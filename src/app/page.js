import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import { CardsSection } from "./components/CardsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutUs />
        <CardsSection />
        {/* <AchievementsSection /> */}
        {/* <ProjectsSection /> */}
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
