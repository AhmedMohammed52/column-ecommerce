import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

export default function SubHeader({ eyebrow, title, linkText, buttonLink }) {
  return (
    <div className="flex items-end justify-between gap-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal">
          {eyebrow}
        </p>

        <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-display mt-2">
          {title}
        </h2>
      </div>

      <Link
        className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-foreground story-link"
        to={buttonLink}
      >
        {linkText}

        <GoArrowRight className="size-4" />
      </Link>
    </div>
  );
}
