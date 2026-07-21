import ProductCard from "../ui/ProductCard";

export default function ShopGrid({
  products,
  totalPages,
  setCurrentPage,
  currentPage,
}) {
  return (
    <div>
      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>

      <div className="flex items-center justify-center mt-14 gap-1">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`inline-flex size-10 items-center justify-center rounded-full text-sm font-medium transition ${
              currentPage === index + 1
                ? "bg-foreground text-background"
                : "hover:bg-muted"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
