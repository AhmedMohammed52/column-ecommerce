import SectionHeader from "../ui/SectionHeader";
import ProductGrid from "./ProductGrid";

export default function ProductSection({
  eyebrow,
  title,
  linkText,
  products,
  buttonLink,
}) {
  return (
    <>
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        linkText={linkText}
        buttonLink={buttonLink}
      />

      <ProductGrid products={products} />
    </>
  );
}
