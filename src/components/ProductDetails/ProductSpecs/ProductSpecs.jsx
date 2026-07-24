import SpecsCard from "./SpecsCard";

export default function ProductSpecs() {
  return (
    <div className=" py-12 border-t border-border">
      <div className=" grid gap-10 md:grid-cols-[240px_1fr]">
        <h2 className="font-display font-bold text-2xl">
          Additional information
        </h2>

        <dl className=" grid sm:grid-cols-2 gap-3">
          <SpecsCard />
        </dl>
      </div>
    </div>
  );
}
