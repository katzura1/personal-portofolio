import Image from "next/image";

interface Portofolio {
  title: string;
  type: string;
  description: string;
  client: string;
  start_date: Date;
  end_date: Date;
  thumbnail: string;
  stacks: string[];
  slug: string;
}

interface CardProjectProps {
  key: number;
  portofolio: Portofolio;
  is_stack: boolean;
}

const CardProject = ({ portofolio, is_stack }: CardProjectProps) => {
  return (
    <div className="w-full border rounded flex flex-col gap-4">
      <div className="bg-neutral-300 relative rounded pt-[56.4706%]">
        {portofolio.thumbnail.length < 3 ? (
          <></>
        ) : (
          <Image
            className="grayscale hover:grayscale-0"
            src={portofolio.thumbnail}
            fill
            alt={portofolio.title}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>

      <div className="flex-1 flex flex-col gap-4 p-3 justify-between">
        <div className="font-bold text-lg mb-3">{portofolio.title}</div>
        <div className="text-base-text-weak text-sm">
          {portofolio.description}
        </div>
        {is_stack ? (
          <div className="flex-1 flex flex-col justify-end">
            <div className="flex flex-wrap gap-2">
              {portofolio.stacks.map((s, k) => (
                <div
                  className="w-auto bg-base-surface rounded text-sm p-2"
                  key={k}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CardProject;
