import { FaStar } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";

export default function ProductMeta({ product }) {
  return (
    <div>
      <p className=" tracking-[0.2em] text-xs font-semibold text-royal uppercase">
        {product.brand}
      </p>

      <h1 className="font-display font-bold text-3xl md:text-5xl my-3 tracking-tight">
        {product.name}
      </h1>

      <div className=" flex items-center gap-3">
        <div className=" flex items-center gap-1">
          <FaStar className=" size-4 text-yellow-400" />
          <FaStar className=" size-4 text-yellow-400" />
          <FaStar className=" size-4 text-yellow-400" />
          <FaStar className=" size-4 text-yellow-400" />
          <FaStar className=" size-4 text-yellow-400" />
        </div>

        <span className=" text-sm text-muted-foreground">
          {product.rating} · {product.reviews} reviews
        </span>
      </div>

      <div className="mt-6 flex items-baseline gap-3">
        <span className="text-3xl font-bold font-display">
          ${product.price}
        </span>

        {product.oldPrice && (
          <span className=" line-through text-muted-foreground text-lg">
            ${product.oldPrice}
          </span>
        )}

        {product.discount && (
          <span className=" inline-flex items-center py-0.5 px-2 rounded-full bg-destructive/10 text-destructive text-xs font-semibold">
            {product.discount}%
          </span>
        )}
      </div>

      <div className=" mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
        <span className=" inline-flex px-2.5 py-1 items-center bg-emerald/10 text-emerald gap-1.5 rounded-full font-semibold">
          <IoMdCheckmark className="size-3.5" />
          In stock — ships in 24h
        </span>

        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
          <FiPackage className="size-3.5" />
          Footwear · Running
        </span>
      </div>

      <p className=" text-muted-foreground text-sm mt-6 leading-relaxed">
        {/* {product.description} */}
        Race-day cushioning with a carbon-infused plate. Featherlight upper,
        snappy rebound, all-day comfort
      </p>
    </div>
  );
}
