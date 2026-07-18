import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

export default function SustainabilityCard() {
  return (
    <div className="bg-emerald text-emerald-foreground p-10 rounded-3xl overflow-hidden group relative">
      <p className="text-emerald-foreground/80 text-xs tracking-widest uppercase">
        Sustainability
      </p>

      <h3 className="mt-3 text-3xl md:text-[42px] font-bold leading-tight font-display">
        90% recycled content across our 2026 apparel line
      </h3>

      <p className="mt-4 text-emerald-foreground/85 max-w-md">
        We rebuilt the supply chain from the yarn up. Here's what changed.
      </p>

      <Link
        className=" mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-foreground story-link active"
        to="/products"
      >
        Our commitments <GoArrowRight className="size-4" />
      </Link>
    </div>
  );
}
