const portfolios = [
  {
    title: "Praja Group Company Profile",
    type: "Website",
    description:
      "Developed a company profile website for Praja Group using WordPress and the Elementor theme builder. The project involved setting up the website from scratch, customizing the theme, implementing basic SEO practices, and integrating the site with Google Search Console for improved search visibility.",
    client: "Freelance Project",
    start_date: new Date("2024-08-01"),
    end_date: new Date("2024-08-30"),
    thumbnail: "/portfolios/praja_group.png",
    stacks: [
      "WordPress",
      "PHP",
      "Elementor",
      "Google Search Console",
      "CSS",
      "JavaScript",
    ],
    slug: "praja-group",
  },
  {
    title: "Rumah Murah Landing Page",
    type: "Website",
    description:
      "Created a landing page for Rumah Murah using WordPress with Elementor for theme customization. Integrated Google Tag Manager (GTM) to track events, which is connected to Facebook Pixel, Google Analytics, and Google Ads for tracking and marketing insights.",
    client: "Freelance Project",
    start_date: new Date("2024-07-01"),
    end_date: new Date("2024-07-30"),
    thumbnail: "/portofolios/rumah_murah.png",
    stacks: [
      "WordPress",
      "Elementor",
      "Google Tag Manager",
      "Facebook Pixel",
      "Google Analytics",
      "Google Ads",
      "PHP",
      "CSS",
      "JavaScript",
    ],
    slug: "rumah-murah",
  },
  {
    title: "Film Explorer",
    type: "Mobile Application",
    description:
      "A Flutter application that connects to the TMDb API to display movie information, a list of popular movies, and movie details. Users can browse movies, view trailers, and check movie ratings, utilizing the BLoC architecture for efficient state management.",
    client: "Personal Project",
    start_date: new Date("2024-01-01"),
    end_date: new Date("2024-02-28"),
    thumbnail: "/portfolios/film_explorer.webp",
    stacks: ["Flutter", "Dart", "BLoC", "TMDb API"],
    slug: "film-explorer",
  },
  {
    title: "e-Wallet Mobile Apps",
    type: "Mobile Application",
    description:
      "A personal project developed as part of an online course, where I built an e-wallet mobile application. The app was integrated with Midtrans for secure payment processing, and it featured a user-friendly interface, allowing users to manage their wallet balance, transaction history, and perform online payments.",
    client: "Personal Project",
    start_date: new Date("2023-06-01"),
    end_date: new Date("2023-06-30"),
    thumbnail: "/portfolios/flutter_bank.webp",
    stacks: ["PHP", "Laravel", "MySQL", "RESTful API", "Flutter", "Dart"],
    slug: "e-wallet-mobile-apps",
  },
  {
    title: "HRIS Mobile (Backend)",
    type: "API",
    description:
      "Developed and maintained the backend for a Human Resource Information System (HRIS) mobile application, using Laravel Framework. The project involved building secure APIs for handling employee data, attendance tracking, and leave management. Additionally, I implemented database optimization and ensured smooth integration with the mobile frontend to enhance user experience.",
    client: "PT. Mutu Jaya Utama",
    start_date: new Date("2023-03-01"),
    end_date: new Date("2023-05-30"),
    thumbnail: "/",
    stacks: ["PHP", "Laravel", "MySQL", "RESTful API"],
    slug: "hris-mobile-backend",
  },
  {
    title: "Airplane Travel Ticket Mobile Apps",
    type: "Mobile Application",
    description:
      "A personal project developed as part of an online course, this mobile application allows users to search, book, and manage airplane travel tickets. The app integrates with Firebase for real-time data synchronization and user authentication, while utilizing Flutter for the front-end and Dart for logic.",
    client: "Personal Project",
    start_date: new Date("2022-10-01"),
    end_date: new Date("2022-10-30"),
    thumbnail: "/portfolios/flutter_pesawat.png",
    stacks: ["Firebase", "Flutter", "Dart"],
    slug: "airplane-travel-ticket-mobile-apps",
  },
  {
    title: "Salesman Visitor Apps",
    type: "Mobile & Web Application",
    description:
      "Developed a mobile application for recording visits by salesmen to clients in the tire sales industry. The app allows salesmen to log visit details, while a web-based platform enables monitoring and reporting on visit outcomes. The mobile app was built with Flutter, and the web system was developed using Laravel.",
    client: "Freelance Project",
    start_date: new Date("2019-08-01"),
    end_date: new Date("2019-10-30"),
    thumbnail: "/portfolios/sumberban_web.png",
    stacks: ["Laravel", "Flutter", "Dart", "PHP", "MySQL"],
    slug: "sumberban-apps",
  },
];

export const getTopTwoPortfolios = () => {
  return portfolios.slice(0, 2);
};

export const getAllPortfolios = () => {
  return portfolios;
};

// interface Portfolio {
//   stacks: string[];
//   // other properties can be defined here
// }

export const getAllStacks = (): string[] => {
  const stacks: string[] = [];

  portfolios.forEach((port) => {
    Array.prototype.push.apply(stacks, port.stacks);
  });

  const uniqueArray: string[] = stacks.filter(
    (value, index, self) => self.indexOf(value) === index
  );
  return uniqueArray;
};
