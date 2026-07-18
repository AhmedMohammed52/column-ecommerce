import Newsletter from "./Newsletter";
import FooterLinks from "./FooterLinks";

export default function FooterContent() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1.5fr_2fr]">
      <Newsletter />

      <FooterLinks />
    </div>
  );
}
