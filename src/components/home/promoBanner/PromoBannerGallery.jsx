import { Link } from "react-router-dom";

import promoProducts from "../../../data/promoBannerData";

export default function PromoBannerGallery() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {promoProducts.map((product) => (
        <Link
          className="group bg-royal-foreground/10 overflow-hidden rounded-2xl"
          to={product.path}
          key={product.id}
        >
          <div className="overflow-hidden aspect-square">
            <img
              src={product.image}
              alt={product.alt}
              className="group-hover:scale-105 duration-500 transition size-full object-cover"
              loading="lazy"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
