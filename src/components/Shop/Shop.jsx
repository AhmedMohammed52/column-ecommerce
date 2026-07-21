import ShopContent from "./ShopContent";
import ShopFilter from "./ShopFilter";
import ShopHeader from "./ShopHeader";
import MobileAside from "./MobileAside";
import MenuOverlay from "../navbar/MenuOverlay";
import useShop from "../../hooks/useShop";
import trendingProducts from "../../data/trendingProductsData";

export default function Shop() {
  const {
    selectedCategories,
    selectedBrands,
    sortBy,
    currentPage,
    isMobileAsideOpen,

    currentProducts,
    totalPages,
    filteredProducts,

    handleCategoryClick,
    handleBrandClick,

    setSortBy,
    setCurrentPage,
    setIsMobileAsideOpen,
  } = useShop();

  return (
    <>
      <section className=" border-b border-border bg-muted/50">
        <ShopHeader
          handleCategoryClick={handleCategoryClick}
          productsCount={trendingProducts.length}
        />
      </section>

      <ShopFilter
        selectedCategories={selectedCategories}
        handleCategoryClick={handleCategoryClick}
        productsCount={filteredProducts.length}
        sortBy={sortBy}
        setSortBy={setSortBy}
        setCurrentPage={setCurrentPage}
        setIsMobileAsideOpen={setIsMobileAsideOpen}
        selectedBrands={selectedBrands}
        handleBrandClick={handleBrandClick}
      />

      <div className=" container-athlix py-10">
        <ShopContent
          selectedCategories={selectedCategories}
          handleCategoryClick={handleCategoryClick}
          selectedBrands={selectedBrands}
          handleBrandClick={handleBrandClick}
          products={currentProducts}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>

      <MobileAside
        isMobileAsideOpen={isMobileAsideOpen}
        setIsMobileAsideOpen={setIsMobileAsideOpen}
        handleCategoryClick={handleCategoryClick}
        selectedCategories={selectedCategories}
        handleBrandClick={handleBrandClick}
        selectedBrands={selectedBrands}
      />

      <MenuOverlay
        isMobileAsideOpen={isMobileAsideOpen}
        setIsMobileAsideOpen={setIsMobileAsideOpen}
      />
    </>
  );
}
