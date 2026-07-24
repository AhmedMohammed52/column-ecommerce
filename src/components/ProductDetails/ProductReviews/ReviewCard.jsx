import { FaStar } from "react-icons/fa";

export default function ReviewCard() {
  return (
    <div className=" border border-border rounded-2xl p-6">
      <div className=" flex items-center gap-1">
        <FaStar className=" size-4 text-yellow-400" />
        <FaStar className=" size-4 text-yellow-400" />
        <FaStar className=" size-4 text-yellow-400" />
        <FaStar className=" size-4 text-yellow-400" />
        <FaStar className=" size-4 text-yellow-400" />
      </div>

      <p className="mt-3 text-sm">Best trainers I've owned in a decade.</p>

      <p className="mt-4 text-xs text-muted-foreground">
        — Jordan M. · Verified
      </p>
    </div>
  );
}
