import { FaCheck } from "react-icons/fa6";
import sortOptions from "../../data/sortOptions";

export default function SortDropdown({
  sortBy,
  setSortBy,
  setIsSortOpen,
  setCurrentPage,
}) {
  return (
    <div className="absolute right-0 top-full p-1 mt-2 min-w-45 rounded-lg border border-border bg-background shadow-xl z-50 ">
      {sortOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => {
            setSortBy(option.value);
            setCurrentPage(1);
            setIsSortOpen(false);
          }}
          className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground hover:bg-accent"
        >
          <span className=" absolute right-2 size-3.5 flex items-center justify-center">
            {sortBy === option.value && <FaCheck className="size-3.5" />}
          </span>

          <span>{option.label}</span>
        </button>
      ))}
    </div>
  );
}
