import PromoBannerContent from "./PromoBannerContent";
import PromoBannerGallery from "./PromoBannerGallery";

export default function PromoBanner() {
  return (
    <section className=" container-athlix py-16">
      <div className="bg-royal text-royal-foreground overflow-hidden rounded-3xl">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 p-8 md:p-14">
          <PromoBannerContent />

          <PromoBannerGallery />
        </div>
      </div>
    </section>
  );
}
