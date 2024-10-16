const myInformation = {
  experience: `${new Date().getFullYear() - 2019} Years`,
  timeZone: "ICT (UTC+7)",
  email: {
    text: "denny.az45@gmail.com",
    link: "mailto:denny.az45@gmail.com",
  },
  github: {
    text: "katzura1",
    link: "https://github.com/katzura1",
  },
  whatsapp: {
    text: "+62-895-3658-43243",
    link: "https://wa.me/62895365843243",
  },
};

const stacks = [
  "Laravel",
  "CodeIgniter",
  "Flutter",
  "PHP",
  "MySQL",
  "Microsoft SQL Server",
  "Git/GitHub",
  "Javascript",
  "WordPress",
];

const capitalizeFirstLetter = (value: string): string => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const CardInformation = () => {
  return (
    <div className="flex w-full shrink-0 flex-col gap-5 rounded-xl border border-base-border p-5 sm:gap-6 sm:p-6">
      {Object.entries(myInformation).map(([key, value]) => (
        <div key={key}>
          <div className="mb-1 truncate text-sm text-base-text-weak">
            {capitalizeFirstLetter(key)}
          </div>
          {typeof value === "object" ? (
            <>
              <a
                className="focus-outline rounded text-primary-text hover:underline underline truncate whitespace-normal text-base font-semibold"
                href={value.link}
              >
                {value.text}
              </a>
            </>
          ) : (
            <div className="truncate whitespace-normal text-base font-semibold">
              {value}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const StackCard = () => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-bold">Stacks</h3>
      <div className="flex flex-wrap gap-3">
        {stacks.map((stack) => (
          <div
            key={stack}
            className="inline-flex select-none items-center rounded-sm bg-base-surface px-2 py-1 text-sm transition sm:text-base text-base-text-weak hover:text-base-text-weak hover:font-bold"
          >
            <span className="truncate text-sm">
              {capitalizeFirstLetter(stack)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function DetailSection() {
  return (
    <section className="flex flex-col items-start gap-9">
      <h2 className="text-3xl font-bold">Details</h2>
      <div className="flex flex-col flex-wrap gap-7 min-[794px]:flex-row min-[794px]:gap-11 w-full">
        <div className="flex flex-1 flex-col gap-7 min-[794px]:max-w-[21.5rem]">
          <CardInformation />
          <StackCard />
        </div>
        <div className="flex-1 min-[794px]:min-w-[23.75rem]">b</div>
      </div>
    </section>
  );
}
