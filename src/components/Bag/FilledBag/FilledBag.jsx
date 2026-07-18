import BagGrid from "./BagGrid/BagGrid";
import BagHeader from "./BagHeader";

export default function FilledBag() {
  return (
    <div className=" container-athlix py-10 md:py-14">
      <BagHeader />

      <BagGrid />
    </div>
  );
}
