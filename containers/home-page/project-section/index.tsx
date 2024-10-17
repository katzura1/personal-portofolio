import { getTopTwoPortofolios } from "@/libs/data";
import { get } from "http";
import Image from "next/image";

export default function ProjectSection() {
  return (
    <section className="flex flex-col gap-9">
      <h3 className="text-3xl font-bold">Projects</h3>

      <div className="flex flex-col lg:flex-row gap-4">
        {getTopTwoPortofolios().map((portofolio, key) => (
          <div
            key={key}
            className="w-full border rounded flex flex-col gap-4"
          >
            <div className="bg-neutral-300 relative rounded pt-[56.4706%]">
              <Image className="grayscale hover:grayscale-0" src={portofolio.thumbnail} fill alt={portofolio.title} />
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
    </section>
  );
}
