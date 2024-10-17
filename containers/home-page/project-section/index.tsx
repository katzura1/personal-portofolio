import { getTopTwoPortofolios } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";

export default function ProjectSection() {
  return (
    <section className="flex flex-col gap-9 items-start">
      <h3 className="text-3xl font-bold">Portofolios</h3>

      <div className="flex flex-col lg:flex-row gap-4">
        {getTopTwoPortofolios().map((portofolio, key) => (
          <div key={key} className="w-full border rounded flex flex-col gap-4">
            <div className="bg-neutral-300 relative rounded pt-[56.4706%]">
              <Image
                className="grayscale hover:grayscale-0"
                src={portofolio.thumbnail}
                fill
                alt={portofolio.title}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="flex flex-col gap-2 p-5">
              <div className="font-bold text-lg mb-3">{portofolio.title}</div>
              <div className="text-base-text-weak text-sm">
                {portofolio.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link className="focus-outline inline-flex select-none items-center justify-center whitespace-nowrap rounded border px-5 py-4 text-base font-bold leading-none transition border-base-border bg-transparent text-primary-text hover:border-primary-border" href={"/projects"}>
        View All
      </Link>
    </section>
  );
}
