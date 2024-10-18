import CardProject from "@/components/Card/CardProject";
import { getTopTwoPortofolios } from "@/libs/data";
import Link from "next/link";

export default function ProjectSection() {
  return (
    <section className="flex flex-col gap-9 items-start">
      <h3 className="text-3xl font-bold">Portofolios</h3>

      <div className="flex flex-col lg:flex-row gap-4">
        {getTopTwoPortofolios().map((portofolio, key) => (
          <CardProject key={key} portofolio={portofolio} is_stack={false} />
        ))}
      </div>

      <Link
        className="focus-outline inline-flex select-none items-center justify-center whitespace-nowrap rounded border px-5 py-4 text-base font-bold leading-none transition border-base-border bg-transparent text-primary-text hover:border-primary-border"
        href={"/portofolios"}
      >
        View All
      </Link>
    </section>
  );
}
