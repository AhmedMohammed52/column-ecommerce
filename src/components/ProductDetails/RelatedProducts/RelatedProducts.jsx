import RelatedProductsHeader from "./RelatedProductsHeader";
import RelatedProductsSlider from "./RelatedProductsSlider";
import useEmblaCarousel from "embla-carousel-react";

export default function RelatedProducts() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });
  const scrollPrev = () => emblaApi?.scrollPrev();

  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="py-16 border-t border-border">
      <RelatedProductsHeader scrollPrev={scrollPrev} scrollNext={scrollNext} />

      <RelatedProductsSlider emblaRef={emblaRef} />
    </div>
  );
}
