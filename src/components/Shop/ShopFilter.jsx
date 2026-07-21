import { LuSlidersHorizontal } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import SortDropdown from "./SortDropdown";
import sortOptions from "../../data/sortOptions";

export default function ShopFilter({
  selectedCategories,
  handleCategoryClick,
  productsCount,
  sortBy,
  setSortBy,
  setCurrentPage,
  setIsMobileAsideOpen,
  selectedBrands,
  handleBrandClick,
}) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const hasFilters = selectedCategories.length > 0 || selectedBrands.length > 0;
  const selectedFilters = [
    ...selectedCategories.map((item) => ({
      type: "category",
      value: item,
    })),

    ...selectedBrands.map((item) => ({
      type: "brand",
      value: item,
    })),
  ];

  return (
    <div className=" sticky top-16 md:top-20 z-30 border-b border-border bg-background/85 backdrop-blur">
      <div className=" container-athlix py-3 flex items-center gap-3">
        <button
          onClick={() => setIsMobileAsideOpen(true)}
          className=" inline-flex h-10 items-center gap-2 px-4 border border-border text-sm font-medium rounded-full transition hover:bg-muted lg:hidden"
        >
          <LuSlidersHorizontal className="size-4" />
          Filters
        </button>

        <div className=" hidden lg:flex flex-wrap items-center gap-2">
          {!hasFilters && (
            <span className="text-sm text-muted-foreground">
              {productsCount} results
            </span>
          )}

          {selectedFilters.map((filter) => (
            <button
              key={`${filter.type}-${filter.value}`}
              className="inline-flex items-center h-8 gap-1.5 bg-foreground rounded-full pl-3 pr-2 text-xs font-medium text-background"
            >
              {filter.value}

              <FaXmark
                className="size-3.5"
                onClick={() =>
                  filter.type === "category"
                    ? handleCategoryClick(filter.value)
                    : handleBrandClick(filter.value)
                }
              />
            </button>
          ))}
        </div>

        <div className="ml-auto flex gap-3 items-center relative">
          <span className=" hidden sm:inline text-sm text-muted-foreground">
            Sort
          </span>

          <button
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="flex items-center justify-between whitespace-nowrap px-3 py-2 h-10 w-45 rounded-full text-sm shadow-sm border border-input bg-transparent cursor-pointer ring-offset-background focus:outline-none focus:ring-1 focus:ring-ring"
          >
            <span className="font-medium">
              {sortOptions.find((item) => item.value === sortBy)?.label}
            </span>

            <IoIosArrowDown className="size-4 opacity-50" />
          </button>

          {isSortOpen && (
            <SortDropdown
              sortBy={sortBy}
              setSortBy={setSortBy}
              setIsSortOpen={setIsSortOpen}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
}
