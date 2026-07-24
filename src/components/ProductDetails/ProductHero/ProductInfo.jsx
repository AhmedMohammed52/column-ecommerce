import ProductActions from "./ProductActions";
import ProductBenefits from "./ProductBenefits";
import ProductMeta from "./ProductMeta";
import ProductVariants from "./ProductVariants";

export default function ProductInfo({ product }) {
  return (
    <div className="lg:sticky lg:top-28 lg:self-start">
      <ProductMeta product={product} />

      <ProductVariants product={product} />

      <ProductActions product={product} />

      <ProductBenefits product={product} />
    </div>
  );
}
