import FooterBottom from "./FooterBottom";
import FooterContent from "./FooterContent";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background mt-24">
      <div className=" container-athlix py-16 md:py-24">
        <FooterContent />

        <FooterBottom />
      </div>
    </footer>
  );
}
