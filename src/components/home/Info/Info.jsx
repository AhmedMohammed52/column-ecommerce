import JournalCard from "./JournalCard";
import SustainabilityCard from "./SustainabilityCard";

export default function Info() {
  return (
    <section className=" container-athlix py-16">
      <div className="grid md:grid-cols-2 gap-6">
        <JournalCard />

        <SustainabilityCard />
      </div>
    </section>
  );
}
