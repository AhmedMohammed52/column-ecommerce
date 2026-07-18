import BagItems from "./BagItems";
import OrderSummary from "./OrderSummary";

export default function BagGrid() {
  return (
    <div className="grid lg:grid-cols-[1.5fr_1fr] mt-10 gap-10">
      <BagItems />

      <OrderSummary />
    </div>
  );
}
