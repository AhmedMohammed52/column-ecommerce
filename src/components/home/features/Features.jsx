import FeatureCard from "./FeatureCard";
import featureData from "./featuresData";

export default function Features() {
  return (
    <div className=" container-athlix py-16">
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4">
        {featureData.map((feature) => (
          <FeatureCard
            featureIcon={feature.icon}
            featureTitle={feature.title}
            featureDescription={feature.description}
          />
        ))}
      </div>
    </div>
  );
}
