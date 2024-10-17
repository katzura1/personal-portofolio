import { getAllPortofolios } from "@/libs/data";
import Image from "next/image";

export const metadata = {
  title: "Projects",
};

export default function Projects() {
  const portofolios = getAllPortofolios();

  return (
    <>
      <section className="grid grid-cols-2 gap-4 justify-between py-5">
        {portofolios.map((p, key) => (
          <div className="border rounded flex flex-col" key={key}>
            <div className="bg-neutral-300 relative rounded pt-[56.4706%]">
              {p.thumbnail.length < 3 ? (
                <></>
              ) : (
                <Image
                  src={p.thumbnail}
                  fill
                  alt={p.title}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
            </div>
            <div className="flex-1 flex flex-col gap-4 p-3 justify-between">
              <h2 className="text-lg font-bold">{p.title}</h2>
              <div className="text-base-text-weak text-sm">{p.description}</div>

              <div className="flex flex-wrap gap-2">
                {
                    p.stacks.map((s, k) => (
                        <div className="w-auto bg-base-surface rounded text-sm p-2" key={k}>
                            {s}
                        </div>
                    ))
                }
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
