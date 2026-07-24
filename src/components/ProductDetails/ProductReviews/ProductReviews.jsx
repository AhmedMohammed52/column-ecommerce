import { FaStar } from "react-icons/fa";
import ReviewCard from "./ReviewCard";

export default function ProductReviews() {
  return (
    <div className=" py-12 border-t border-border">
      <div className=" grid md:grid-cols-[240px_1fr] gap-10">
        <div className="">
          <h2 className=" text-2xl font-display font-bold">Customer reviews</h2>

          <div className=" mt-3 flex items-center gap-3">
            <div className=" flex items-center gap-1">
              <FaStar className=" size-4 text-yellow-400" />
              <FaStar className=" size-4 text-yellow-400" />
              <FaStar className=" size-4 text-yellow-400" />
              <FaStar className=" size-4 text-yellow-400" />
              <FaStar className=" size-4 text-yellow-400" />
            </div>

            <span className=" text-sm text-muted-foreground">
              4.8 · 1,284 reviews
            </span>
          </div>
        </div>

        <div className=" grid gap-4 sm:grid-cols-2">
          <ReviewCard />
        </div>
      </div>
    </div>
  );
}
