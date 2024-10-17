import Link from "next/link";

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

const StackSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-bold">Stacks</h3>
      <div className="flex flex-wrap gap-3">
        {stacks.map((stack) => (
          <div
            key={stack}
            className="inline-flex select-none items-center rounded-sm bg-base-surface px-2 py-1 text-sm transition sm:text-base text-base-text-weak hover:text-base-text-strong hover:font-bold"
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

const experiences = [
  {
    title: "Full-stack Developer",
    company: "PT. Kalbe Farma, Tbk",
    company_link: "http://kalbe.co.id",
    start_from: new Date("2022-10-01"),
    end_from: new Date(),
    description:
      "Developed and maintained web applications using the Laravel framework while collaborating with business analysts and stakeholders to ensure user needs were met at every stage of product development, and resolved bugs by providing technical solutions to issues that arose during development and post-production.",
  },
  {
    title: "IT Engineer",
    company: "PT. Total Mandiri Selaras",
    company_link: "http://temans.co.id",
    start_from: new Date("2019-08-01"),
    end_from: new Date("2022-09-01"),
    description:
      "Developed and maintained web applications using Laravel and CodeIgniter frameworks, managed application deployment on Linux-based servers, resolved bugs while providing technical solutions to issues arising during development and post-production, and conducted user needs analysis by creating documentation in the form of Entity-Relationship Diagrams (ERD) at each stage of product development.",
  },
  {
    title: "Freelance Full-stack Developer",
    company: "-",
    company_link: "#",
    start_from: new Date("2019-08-01"),
    end_from: new Date(),
    description:
      "Developed and maintained responsive web applications using Laravel/CodeIgniter/Wordpress, designed and built mobile applications with Flutter, and resolved bugs and technical issues throughout the development process.",
  },
];

const ExperienceSection = () => {

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  };
  
  // Function to format date
  const formatDate = (date: Date) => {
    return date.toLocaleDateString(undefined, options);
  };

  // Function to calculate duration
  const calculateDuration = (start: Date, end: Date) => {
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    years = years + (months < 0 ? -1 : 0);
    months = (months + 12) % 12;

    const formattedYears = `${years} year${years !== 1 ? "s" : ""} `;
    const formattedMonths = `${months} month${months !== 1 ? "s" : ""}`;

    return {
      years: formattedYears,
      months: formattedMonths,
    };
  };

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-bold">Experiences</h3>
      {experiences.map((exp, key) => {
        const start = exp.start_from;
        const end = exp.end_from;
        const formattedStart = formatDate(start);
        const formattedEnd = formatDate(end);
        const currentYearMonth = formatDate(new Date());
        const duration = calculateDuration(start, end);

        return (
          <div className="flex flex-col gap-4" key={key}>
            <div>
              <div className="text-base font-semibold">{exp.title}</div>
              {exp.company_link.startsWith("http://") ? (
                <div className="text-sm text-base-text-weak">
                  <Link
                    href={exp.company_link}
                    className="flex gap-2 items-center"
                  >
                    {exp.company}
                    <i className="fas fa-external-link-alt"></i>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="text-sm text-base-text-weak">
              {`${formattedStart} - ${formattedEnd == currentYearMonth ? 'Current' : formattedEnd} (${
                duration.years + " " + duration.months
              })`}
            </div>
            <div className="text-sm text-base-text-weak">{exp.description}</div>
          </div>
        );
      })}
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
          <StackSection />
        </div>
        <div className="flex-1 min-[794px]:min-w-[23.75rem]">
          <ExperienceSection />
        </div>
      </div>
    </section>
  );
}
