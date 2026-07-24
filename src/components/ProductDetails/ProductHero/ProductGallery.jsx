import { useEffect, useState } from "react";

export default function ProductGallery({ product }) {
  const [selectedImage, setSelectedImage] = useState(product.image);

  useEffect(() => {
    if (!product) return;

    setSelectedImage(product.image);
  }, [product]);

  return (
    <div className=" grid md:grid-cols-[80px_1fr] gap-4">
      <div className=" order-2 md:order-1 flex md:flex-col gap-3 overflow-x-hidden md:overflow-visible">
        {product.otherImages?.map((item) => (
          <button
            className={`size-20 shrink-0 overflow-hidden rounded-2xl border-2 transition duration-300 ${
              selectedImage === item.image
                ? "border-foreground"
                : "border-transparent hover:border-border"
            }`}
            key={item}
            onClick={() => setSelectedImage(item.image)}
          >
            <img
              src={item.image}
              alt={item.name}
              className=" object-cover size-full"
            />
          </button>
        ))}
      </div>

      <div className=" order-1 md:order-2 overflow-hidden rounded-3xl bg-muted">
        <div className=" aspect-square">
          <img
            src={selectedImage}
            alt={product.name}
            className="size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
