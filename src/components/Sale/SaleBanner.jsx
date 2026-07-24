import { FaFire } from "react-icons/fa";

export default function SaleBanner() {
  return (
    <div className=" overflow-hidden rounded-3xl bg-destructive p-8  md:p-14 text-destructive-foreground">
      <span className=" inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive-foreground/10 text-xs font-semibold uppercase tracking-widest">
        <FaFire className="size-3.5" />
        Season sale
      </span>

      <h1 className=" text-4xl md:text-6xl font-display font-bold mt-4 tracking-tight">
        Up to 23% off
      </h1>

      <p className=" max-w-xl mt-3 text-destructive-foreground/85">
        Limited-time savings across footwear, apparel and equipment. Save up to
        $161 across the collection.
      </p>
    </div>
  );
}
