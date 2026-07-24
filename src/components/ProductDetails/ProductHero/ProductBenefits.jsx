import { FiRotateCcw } from "react-icons/fi";
import { LuShieldCheck, LuTruck } from "react-icons/lu";

export default function ProductBenefits() {
  return (
    <ul className="mt-8 space-y-3 border-t border-border pt-6 text-sm">
      <li className="flex items-center gap-3 text-muted-foreground">
        <LuTruck className="size-4 text-foreground" />
        Free shipping over $120 · 2-day express
      </li>

      <li className="flex items-center gap-3 text-muted-foreground">
        <FiRotateCcw className="size-4 text-foreground" />
        Free 30-day returns
      </li>

      <li className="flex items-center gap-3 text-muted-foreground">
        <LuShieldCheck className="size-4 text-foreground" />
        2-year performance warranty
      </li>
    </ul>
  );
}
