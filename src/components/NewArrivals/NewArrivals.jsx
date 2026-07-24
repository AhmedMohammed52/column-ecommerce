import FeaturedProducts from "./FeaturedProducts";
import NewArrivalsHeader from "./NewArrivalsHeader";
import WeeklyPicks from "./WeeklyPicks";

export default function NewArrivals() {
  return (
    <section className=" container-athlix pt-10 md:pt-16">
      <NewArrivalsHeader />

      <WeeklyPicks />

      <FeaturedProducts />
    </section>
  );
}
