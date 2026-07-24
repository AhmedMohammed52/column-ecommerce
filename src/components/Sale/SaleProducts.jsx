import { Link } from "react-router-dom";
import ProductGrid from "../ui/ProductGrid";
import { GoArrowRight } from "react-icons/go";

export default function SaleProducts({ products }) {
  return (
    <div className="py-10 md:py-14">
      <div className=" mb-6 flex items-end justify-between">
        <h2 className=" font-display font-bold text-2xl">On sale now</h2>

        <Link
          className=" flex items-center gap-2 text-sm font-medium text-royal story-link"
          to="/shop"
        >
          Shop full range
          <GoArrowRight className=" size-3.5" />
        </Link>
      </div>

      <ProductGrid products={products} />
    </div>
  );
}
