import CardProject from "@/components/Card/CardProject";
import { getAllPortofolios } from "@/libs/data";

export const metadata = {
  title: "Projects",
};

export default function Projects() {
  const portofolios = getAllPortofolios();

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between py-5">
        {portofolios.map((p, key) => (
          <CardProject key={key} portofolio={p} is_stack={true} />
        ))}
      </section>
    </>
  );
}
