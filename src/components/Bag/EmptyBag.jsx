import { Link } from "react-router-dom";
import { LuShieldCheck } from "react-icons/lu";
import { GoArrowRight } from "react-icons/go";

export default function EmptyWishlistContent() {
  return (
    <>
      <div className="size-16 bg-muted rounded-full items-center justify-center">
        <LuShieldCheck className="size-7 text-muted-foreground" />
      </div>

      <h1 className="mt-6 font-display font-bold text-3xl">
        Your bag is empty
      </h1>

      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        Add gear to your bag and it'll show up here. <br /> Free shipping over
        $120.
      </p>

      <Link
        className=" btn-shine mt-6 inline-flex items-center h-11 px-6 rounded-full bg-foreground text-sm font-semibold text-background"
        to="/products"
      >
        Start shopping
        <GoArrowRight className="size-4" />
      </Link>
    </>
  );
}
