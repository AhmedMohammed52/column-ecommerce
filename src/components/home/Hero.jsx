import { Link } from "react-router-dom";

import HeroImage from "../../assets/hero.jpg";

import { GoArrowUpRight } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { LuSparkles } from "react-icons/lu";
import { IoMdArrowForward } from "react-icons/io";

export default function Hero() {
  const marqueeItems = [
    "Free shipping over $150",
    "Carbon-neutral delivery",
    "30-day returns",
    "New: Autumn Collection",
    "Handmade in limited runs",
  ];

  return (
    <section>
      <div className="border-b border-hairline bg-ink pt-19 text-background sm:pt-23">
        <div className="flex overflow-hidden py-2">
          <div className="animation-marquee flex shrink-0 items-center gap-10 whitespace-nowrap pr-10 text-xs uppercase tracking-[0.14em] opacity-80">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item) => (
              <span className="flex items-center gap-10">
                {item}

                <span className="text-brand">◐</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x pt-10 sm:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-14">
          <div className="flex flex-col justify-between">
            <div>
              <div className=" inline-flex items-center gap-2 bg-surface rounded-full border border-hairline px-3 py-1 text-xs text-ink-muted">
                <LuSparkles className="h-3.5 w-3.5 text-brand" />
                Autumn Collection · 2026
              </div>

              <h1 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-[5.5rem]">
                Objects designed
                <br />
                to outlast trend.
              </h1>

              <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted">
                A quiet catalogue of considered pieces — sourced from ateliers
                in Kyoto, Copenhagen, and Milan. Made to last a decade, not a
                season.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/product"
                  className="btn-shine overflow-hidden relative group inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium bg-ink text-background transition hover:opacity-90"
                >
                  Shop the collection
                  <IoMdArrowForward className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>

                <Link
                  to="/editorial"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium bg-surface border border-hairline hover:bg-secondary"
                >
                  Explore editorial
                  <GoArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-hairline pt-6">
              <div>
                <div className="text-2xl font-semibold tracking-tight">4.9</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-ink-muted">
                  avg. rating
                </div>
              </div>

              <div>
                <div className="text-2xl font-semibold tracking-tight">
                  42k+
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-ink-muted">
                  shipped orders
                </div>
              </div>

              <div>
                <div className="text-2xl font-semibold tracking-tight">112</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-ink-muted">
                  independent makers
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] bg-surface-2">
              <img
                src={HeroImage}
                alt="Hero Image"
                className="h-130 w-full object-cover lg:h-160"
              />

              <div className="absolute bottom-5 left-5 right-5 backdrop-blur-md rounded-2xl border border-white/20 bg-black/25 p-3 pl-4 flex justify-between items-center">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-white/70">
                    Featured
                  </div>
                  <div className="text-sm font-medium text-white">
                    Linen · Vessels · Objects
                  </div>
                </div>

                <Link
                  to="/product"
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-ink hover:bg-white/90"
                >
                  <GoArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="absolute top-6 -left-4 hidden rounded-2xl border border-hairline bg-surface shadow-lift p-3 md:block">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-brand/15 text-brand rounded-full flex items-center justify-center">
                  <FaStar className="h-4 w-4" />
                </div>

                <div>
                  <div className="text-xs font-medium">
                    "Impeccable curation."
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-ink-muted">
                    Kinfolk · Issue 48
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
