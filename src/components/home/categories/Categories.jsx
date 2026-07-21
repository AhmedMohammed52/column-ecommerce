import SectionHeader from "../../ui/SectionHeader";
import sportsData from "../../../data/sportsData";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <section className=" container-athlix py-16">
      <SectionHeader
        eyebrow="Shop by sport"
        title="Find your discipline"
        linkText="All Categories"
        buttonLink="/shop"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {sportsData.map((sport) => (
          <CategoryCard data={sport} key={sport.name} />
        ))}
      </div>
    </section>
  );
}
