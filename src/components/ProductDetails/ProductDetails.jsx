import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import ProductHero from "./ProductHero/ProductHero";
import ProductDescription from "./ProductDescription";
import ProductSpecs from "./ProductSpecs/ProductSpecs";
import ProductReviews from "./ProductReviews/ProductReviews";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import trendingProducts from "../../data/trendingProductsData";

export default function ProductDetails() {
  const { id } = useParams();

  const product = trendingProducts.find((item) => item.id === Number(id));

  return (
    <div className=" container-athlix pt-6 pb-16">
      <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <Link className=" hover:text-foreground" to={"/"}>
          Home
        </Link>

        <FaChevronRight className="size-2.5" />

        <Link className=" hover:text-foreground" to={"/shop"}>
          Shop
        </Link>

        <FaChevronRight className="size-2.5" />

        <Link className="font-medium text-foreground">
          {product.name}
        </Link>
      </nav>

      <ProductHero product={product} />

      <ProductDescription product={product} />

      <ProductSpecs product={product} />

      <ProductReviews product={product} />

      <RelatedProducts product={product} />
    </div>
  );
}
