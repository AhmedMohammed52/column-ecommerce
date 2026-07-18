import { FaPlus, FaMinus, FaXmark } from "react-icons/fa6";

export default function BagItemCard() {
  return (
    <div className=" grid grid-cols-[96px_1fr] sm:grid-cols-[120px_1fr] gap-4 mb-4 p-4 rounded-2xl border border-border">
      <div className="overflow-hidden rounded-xl bg-muted">
        <img src="" alt="" className=" size-full object-cover aspect-square" />
      </div>

      <div className="min-w-0">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs tracking-widest uppercase text-muted-foreground">
              ATHLIX
            </p>
            <p className="mt-1 truncate font-semibold">Aero Runner Pro</p>
            <p className="mt-1 text-xs text-muted-foreground">
              "Cloud / Royal" " · Size " "7"
            </p>
          </div>

          <button
            aria-label="Remove"
            className=" size-8 text-muted-foreground rounded-full flex items-center justify-center hover:bg-muted"
          >
            <FaXmark className="size-4" />
          </button>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className=" inline-flex h-11 items-center rounded-full border border-border">
            <button className=" size-10 flex items-center justify-center hover:bg-muted">
              <FaMinus className="size-4" />
            </button>

            <span className="w-8 text-center text-sm font-semibold">1</span>

            <button className=" size-10 flex items-center justify-center hover:bg-muted">
              <FaPlus className="size-4" />
            </button>
          </div>

          <span className="font-bold">$189</span>
        </div>
      </div>
    </div>
  );
}
