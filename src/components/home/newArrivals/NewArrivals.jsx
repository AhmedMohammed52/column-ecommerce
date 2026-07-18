import ProductSection from "../../ProductSection/ProductSection";
import newArrivalsData from "../../../data/newArrivalsData";

export default function NewArrivals() {
  return (
    <section className=" container-athlix py-16">
      <ProductSection
        eyebrow="Just dropped"
        title="New arrivals"
        linkText="See all"
        buttonLink="/products"
        products={newArrivalsData}
      />
    </section>
  );
}
