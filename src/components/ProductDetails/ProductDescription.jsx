export default function ProductDescription() {
  return (
    <div className="py-12">
      <div className="grid gap-10 md:grid-cols-[240px_1fr]">
        <h2 className="text-2xl fontdis font-bold">Description</h2>

        <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            Race-day cushioning with a carbon-infused plate. Featherlight upper,
            snappy rebound, all-day comfort.
          </p>
          <p>
            Engineered in our performance lab and tested by athletes across
            every discipline. Every detail — from stitching to sole — is
            obsessed over so you can focus on the run, the lift, the game.
          </p>
        </div>
      </div>
    </div>
  );
}
