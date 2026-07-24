import { FiFacebook, FiMinus, FiTwitter } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa6";
import { LuShare2 } from "react-icons/lu";
import { IoMdLink } from "react-icons/io";
import { useState } from "react";

export default function ProductActions({ product }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <>
      <div className="mt-8 flex gap-3">
        <div className=" inline-flex h-14 items-center  border border-border rounded-full">
          <button
            onClick={decreaseQuantity}
            className=" flex items-center justify-center rounded-full size-14 hover:bg-muted"
          >
            <FiMinus className="size-4" />
          </button>

          <span className="w-8 text-center text-sm font-semibold">
            {quantity}
          </span>

          <button
            onClick={increaseQuantity}
            className=" flex items-center justify-center rounded-full size-14 hover:bg-muted"
          >
            <GoPlus className="size-4" />
          </button>
        </div>

        <button className=" btn-shine inline-flex flex-1 h-14 items-center justify-center rounded-full bg-foreground text-base font-semibold text-background transition">
          Add to bag · ${(product.price * quantity).toFixed(2)}
        </button>

        <button className=" flex items-center justify-center size-14 rounded-full border border-border transition hover:bg-muted">
          <FaRegHeart className=" size-5" />
        </button>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <LuShare2 className="size-3.5" />
          Share
        </span>

        <div className=" flex gap-2">
          <button className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-foreground hover:text-foreground">
            <FiTwitter className=" size-4" />
          </button>

          <button className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-foreground hover:text-foreground">
            <FiFacebook className=" size-4" />
          </button>

          <button className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-foreground hover:text-foreground">
            <IoMdLink className=" size-4" />
          </button>
        </div>
      </div>
    </>
  );
}
