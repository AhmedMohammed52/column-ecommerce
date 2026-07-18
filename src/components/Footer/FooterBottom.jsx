import { Link } from "react-router-dom";
import socialLinksData from "../../data/socialLinksData";

export default function FooterBottom() {
  return (
    <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-background/10 pt-8">
      <p className="text-xs text-background/60">
        © 2026 ATHLIX Performance Co. All rights reserved.
      </p>

      <div className="flex items-center gap-3">
        {socialLinksData.map((link) => (
          <Link
            className="size-10 btn-shine rounded-full border border-background/15 flex items-center justify-center transition hover:border-background/40"
            key={link.platformName}
            to={link.path}
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
