import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

export default function ProductHero({ product }) {
  return (
    <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1.15fr_1fr] py-8 lg:py-12">
      <ProductGallery product={product} />

      <ProductInfo product={product} />
    </div>
  );
}
