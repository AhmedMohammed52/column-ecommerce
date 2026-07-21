import sportsData from "../../data/sportsData";

export default function ShopHeader({ handleCategoryClick, productsCount }) {
  return (
    <div className=" container-athlix py-10 md:py-14">
      <p className=" text-xs uppercase font-semibold tracking-[0.2em] text-royal">
        Shop
      </p>

      <h1 className="font-display font-bold mt-2 tracking-tight text-4xl md:text-5xl">
        All products
      </h1>

      <p className="text-sm text-muted-foreground max-w-xl mt-3">
        {productsCount} products across footwear, apparel, equipment
        and accessories.
      </p>

      <div className=" flex gap-3 overflow-x-auto mt-8 pb-2">
        {sportsData.map((sport) => (
          <button
            key={sport.name}
            onClick={() => handleCategoryClick(sport.name)}
            className="group flex gap-3 items-center shrink-0 rounded-full border border-border bg-background pr-4 transition hover:border-foreground"
          >
            <img
              src={sport.image}
              alt={sport.name}
              className=" size-10 rounded-full object-cover "
            />

            <span className="text-sm font-semibold">{sport.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
