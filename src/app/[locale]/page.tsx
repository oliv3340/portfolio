import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/navigation/NavBar";

export default function Home() {
  return (
    <main className="min-w-screen min-h-screen">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
