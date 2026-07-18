import SectionHeader from "../ui/SectionHeader";
import ProductGrid from "./ProductGrid";

export default function ProductSection({ eyebrow, title, linkText, products }) {
  return (
    <>
      <SectionHeader eyebrow={eyebrow} title={title} linkText={linkText} />

      <ProductGrid products={products} />
    </>
  );
}
