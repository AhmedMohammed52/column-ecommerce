import WishlistContent from "./WishlistContent";
import WishlistHeader from "./WishlistHeader";

export default function Wishlist() {
  return (
    <section className="container-athlix py-10 md:py-14">
      <WishlistHeader />

      <WishlistContent />
    </section>
  );
}
