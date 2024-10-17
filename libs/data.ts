const portofolios = [
    {
        "title": "Film Explorer",
        "type": "Mobile Application",
        "description": "A Flutter application that connects to the TMDb API to display movie information, a list of popular movies, and movie details. Users can browse movies, view trailers, and check movie ratings, utilizing the BLoC architecture for efficient state management.",
        "client": "Personal Project",
        "start_date": new Date("2024-01-01"),
        "end_date": new Date("2024-02-28"),
        "thumbnail": "/portofolios/film_explorer.png",
        "stacks": ["Flutter", "Dart", "BLoC", "TMDb API"]
    },    
    {
        "title": "e-Wallet Mobile Apps",
        'type' : 'Mobile Application',
        "description": "A personal project developed as part of an online course, where I built an e-wallet mobile application. The app was integrated with Midtrans for secure payment processing, and it featured a user-friendly interface, allowing users to manage their wallet balance, transaction history, and perform online payments.",
        "client": "Personal Project",
        "start_date": new Date("2023-06-01"),
        "end_date": new Date("2023-06-30"),
        "thumbnail": "/portofolios/flutter_bank.webp",
        "stacks": ["PHP", "Laravel", "MySQL", "RESTful API", "Flutter", "Dart"]
    },    
    {
        "title": "HRIS Mobile (Backend)",
        'type' : 'API',
        "description": "Developed and maintained the backend for a Human Resource Information System (HRIS) mobile application, using Laravel Framework. The project involved building secure APIs for handling employee data, attendance tracking, and leave management. Additionally, I implemented database optimization and ensured smooth integration with the mobile frontend to enhance user experience.",
        "client": "PT. Mutu Jaya Utama",
        "start_date": new Date("2023-03-01"),
        "end_date": new Date("2023-05-30"),
        "thumbnail": "/",
        "stacks": ["PHP", "Laravel", "MySQL", "RESTful API"]
    },
    {
        "title": "Airplane Travel Ticket Mobile Apps",
        "type": "Mobile Application",
        "description": "A personal project developed as part of an online course, this mobile application allows users to search, book, and manage airplane travel tickets. The app integrates with Firebase for real-time data synchronization and user authentication, while utilizing Flutter for the front-end and Dart for logic.",
        "client": "Personal Project",
        "start_date": new Date("2022-10-01"),
        "end_date": new Date("2022-10-30"),
        "thumbnail": "/portofolios/flutter_pesawat.webp",
        "stacks": ["Firebase", "Flutter", "Dart"]
    },
];

export const getTopTwoPortofolios = ()=>{
    return portofolios.slice(0,2);
}

export const getAllPortofolios = ()=>{
    return portofolios;
}