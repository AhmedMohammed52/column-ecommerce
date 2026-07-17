import FeatureCard from "./FeatureCard";
import featureData from "./featuresData";

export default function Features() {
  return (
    <div className=" container-athlix py-16">
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4">
        {featureData.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
}
