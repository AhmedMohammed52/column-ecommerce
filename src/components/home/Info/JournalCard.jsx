import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

export default function JournalCard() {
  return (
    <div className="bg-muted p-10 rounded-3xl overflow-hidden group relative">
      <p className="text-muted-foreground text-xs tracking-widest uppercase">
        The Journal
      </p>

      <h3 className="mt-3 text-3xl md:text-[42px] font-bold leading-tight font-display">
        How Amara Okafor trained for her sub-2:15 marathon
      </h3>

      <p className="mt-4 text-muted-foreground max-w-md">
        A season of intervals, altitude blocks and the exact gear she trusted on
        race day.
      </p>

      <Link
        className=" mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground story-link active"
        to="/products"
      >
        Read the story <GoArrowRight className="size-4" />
      </Link>
    </div>
  );
}
