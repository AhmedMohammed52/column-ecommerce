export default function Newsletter() {
  return (
    <div>
      <p className="text-4xl md:text-[50px] font-bold font-display tracking-tight">
        Built for athletes. Designed for life.
      </p>

      <p className="text-sm text-background/70 max-w-md mt-6">
        Join the ATHLIX club for early access, member pricing, and stories from
        athletes chasing their edge.
      </p>

      <form className="mt-6 flex gap-2 max-w-md">
        <input
          type="email"
          placeholder="you@example.com"
          className="flex-1 h-12 px-5 border border-background/20 bg-background/5 text-background rounded-full text-sm placeholder:text-background/50 focus:border-background/40 focus:outline-none"
        />

        <button
          type="submit"
          className="h-11 px-6 bg-background rounded-full text-sm font-semibold text-foreground transition hover:bg-background/90"
        >
          Join
        </button>
      </form>
    </div>
  );
}
