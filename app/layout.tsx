import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Denny - Portofolio",
  description: "",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* 
          Author: Denny 
          Inspired by the website: https://gungho0619.vercel.app/
        */}
      </head>
      <body
        className={`antialiased max-w-4xl px-4 sm:px-8 pb-32 mx-auto bg-white dark:bg-black p-4 md:p-0 md:pb-10`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
