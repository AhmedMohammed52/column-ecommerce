export default function FeatureCard({ feature }) {
  return (
    <div className="p-5 rounded-2xl border border-border flex items-start gap-4">
      <div className="size-11 rounded-xl flex items-center justify-center bg-muted">
        {feature.icon}
      </div>

      <div className="min-w-0">
        <p className="text-[15px] font-semibold text-foreground">{feature.title}</p>
        <p className="mt-0.5 text-muted-foreground text-xs">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
