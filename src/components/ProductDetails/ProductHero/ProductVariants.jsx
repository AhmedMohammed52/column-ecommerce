import { useState } from "react";

export default function ProductVariants() {
  const [selectedSize, setSelectedSize] = useState("M");

  const sizes = [
    { name: "XS", disabled: false },
    { name: "S", disabled: false },
    { name: "M", disabled: false },
    { name: "L", disabled: false },
    { name: "XL", disabled: false },
    { name: "XXL", disabled: true },
  ];

  return (
    <div className="mt-8">
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className=" text-sm font-semibold">Color</p>
          <p className=" text-xs text-muted-foreground">Color</p>
        </div>

        <div className="flex gap-2">
          <button className=" flex items-center justify-center size-10 rounded-full border-2 transition border-foreground">
            <span className="size-7 rounded-full border border-border bg-[#3852e0]"></span>
          </button>

          <button className=" flex items-center justify-center size-10 rounded-full border-2 border-transparent transition ">
            <span className="size-7 rounded-full border border-border bg-[#111827]"></span>
          </button>

          <button className=" flex items-center justify-center size-10 rounded-full border-2 border-transparent transition ">
            <span className="size-7 rounded-full border border-border bg-[#10b981]"></span>
          </button>
        </div>
      </div>

<div className="mt-6">
      <p className="mb-3 text-sm font-semibold">Size</p>

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
        {sizes.map((size) => (
          <button
            key={size.name}
            disabled={size.disabled}
            onClick={() => setSelectedSize(size.name)}
            className={`h-12 rounded-xl border px-4 text-sm font-medium transition-all duration-200
              ${
                size.disabled
                  ? "cursor-not-allowed border-dashed bg-muted/40 text-muted-foreground/50 line-through opacity-60"
                  : selectedSize === size.name
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-background text-foreground hover:-translate-y-0.5 hover:shadow-sm"
              }`}
          >
            {size.name}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
}
