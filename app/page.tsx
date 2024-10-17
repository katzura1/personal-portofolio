import DetailSection from "@/containers/home-page/detail-section";
import HeroSection from "@/containers/home-page/hero-section";
import ProjectSection from "@/containers/home-page/project-section";

export default function Home() {
  return (
    <main className="flex flex-col gap-9">
    <HeroSection/>
    <DetailSection/>
    <ProjectSection/>
    </main>
  );
}
