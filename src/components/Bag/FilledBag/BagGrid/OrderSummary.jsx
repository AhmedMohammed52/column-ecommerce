import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { LuShieldCheck } from "react-icons/lu";

export default function OrderSummary() {
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <div className="bg-muted/40 rounded-3xl p-6 border border-border">
        <h2 className="font-display font-bold text-xl">Order summary</h2>

        <dl className="mt-6 text-sm space-y-3">
          <div className=" flex items-center justify-between">
            <dt className=" text-muted-foreground">$594</dt>

            <dd className=" font-medium">Subtotal</dd>
          </div>

          <div className=" flex items-center justify-between">
            <dt className=" text-muted-foreground">Free</dt>

            <dd className=" font-medium">Shipping</dd>
          </div>

          <div className=" flex items-center justify-between">
            <dt className=" text-muted-foreground">Calculated at checkout</dt>

            <dd className="text-muted-foreground">Estimated tax</dd>
          </div>
        </dl>

        <div className="my-6 h-px bg-border"></div>

        <dl className=" flex items-center justify-between">
          <dt className=" font-semibold">Total</dt>

          <dd className=" font-display text-2xl font-bold">$594</dd>
        </dl>

        <Link
          className=" btn-shine mt-6 inline-flex bg-foreground gap-2 px-6 h-13 w-full text-center items-center justify-center text-background rounded-full text-sm font-semibold transition hover:opacity-90"
          to="/checkout"
        >
          Secure checkout
          <GoArrowRight className="size-4" />
        </Link>

        <p className="text-xs text-muted-foreground mt-3 flex items-center justify-center gap-1.5">
          <LuShieldCheck className="size-3.5" />
          256-bit SSL · 30-day returns
        </p>
      </div>
    </aside>
  );
}
