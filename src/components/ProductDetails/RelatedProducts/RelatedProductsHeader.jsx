import { IoChevronBackSharp, IoChevronForward } from "react-icons/io5";

export default function RelatedProductsHeader({ scrollNext, scrollPrev }) {
  return (
    <div className=" flex items-center justify-between gap-4">
      <h2 className=" font-display font-bold text-3xl">You might also like</h2>

      <div className="hidden sm:flex gap-2">
        <button
          onClick={scrollPrev}
          className="size-11 rounded-full flex items-center justify-center border border-border transition hover:bg-muted"
        >
          <IoChevronBackSharp className="size-4" />
        </button>

        <button
          onClick={scrollNext}
          className="size-11 rounded-full flex items-center justify-center border border-border transition hover:bg-muted"
        >
          <IoChevronForward className="size-4" />
        </button>
      </div>
    </div>
  );
}
