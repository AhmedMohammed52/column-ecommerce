import MainArticle from "./MainArticle";
import jornalData from "../../data/jornalData";
import JornalCard from "./JornalCard";

export default function JornalContent() {
  return (
    <div className=" py-10 md:py-14">
      <div className="pb-16">
        <MainArticle />
      </div>

      <div className="pb-16">
        <h2 className=" font-display font-bold text-2xl mb-6">Latest</h2>

        <div className=" grid gap-8 md:grid-cols-3">
          {jornalData.map((item) => (
            <JornalCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
