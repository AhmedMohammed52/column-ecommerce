import Features from "./features/Features";
import Hero from "./hero/Hero";

export default function HomeContent() {
  return (
    <main className="flex-1 pb-20 lg:pb-0">
      <Hero />

      <Features />
    </main>
  );
}
