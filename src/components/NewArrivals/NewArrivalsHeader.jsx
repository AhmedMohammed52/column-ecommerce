import { LuSparkles } from "react-icons/lu";

export default function NewArrivalsHeader() {
  return (
    <div className="flex flex-col items-start gap-4">
      <span className=" inline-flex px-3 py-1 items-center gap-2 rounded-full text-emerald bg-emerald/10 text-xs font-semibold uppercase tracking-widest">
        <LuSparkles className="size-3.5" />
        Just landed
      </span>

      <h1 className=" text-4xl md:text-6xl tracking-tight font-display font-bold">
        New Arrivals
      </h1>

      <p className=" text-muted-foreground max-w-2xl">
        The freshest performance drops from ATHLIX and our partner brands —
        engineered for the season ahead.
      </p>
    </div>
  );
}
