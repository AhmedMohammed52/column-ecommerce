export default function FeatureCard({
  featureIcon,
  featureTitle,
  featureDescription,
}) {
  return (
    <div className="p-5 rounded-2xl border border-border flex items-start gap-4">
      <div className="size-11 rounded-xl flex items-center justify-center bg-muted">
        {featureIcon}
      </div>

      <div className="min-w-0">
        <p className="text-sm font-semibold text-foreground">{featureTitle}</p>
        <p className="mt-0.5 text-muted-foreground text-xs">
          {featureDescription}
        </p>
      </div>
    </div>
  );
}
