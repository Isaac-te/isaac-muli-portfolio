import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ResumeSection from "@/components/ResumeSection";
import ProjectsSection from "@/components/ProjectsSection";
import LabsSection from "@/components/LabsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ResumeSection />
        <ProjectsSection />
        <LabsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
