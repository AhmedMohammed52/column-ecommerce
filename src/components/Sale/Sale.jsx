import SaleBanner from "./SaleBanner";
import SaleProducts from "./SaleProducts";
import products from "../../data/trendingProductsData"

export default function Sale() {
  return (
    <div className=" container-athlix pt-10 md:pt-16">
      <SaleBanner />

      <SaleProducts products={products} />
    </div>
  );
}
