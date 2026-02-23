import profileImage from "@/assets/profile-placeholder.jpg";
import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="section-container min-h-screen flex items-center">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 w-full">
        <div className="flex-1 text-center md:text-left">
          <p className="section-subtitle">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            ISAAC MULI
          </h1>
          <p className="text-primary font-mono text-sm md:text-base mb-6">
            Cybersecurity Enthusiast | Networking Student | Aspiring Ethical Hacker
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-lg mb-8">
            I am a passionate Telecommunication and Information Engineering student with a deep interest 
            in cybersecurity, ethical hacking, and network infrastructure. I thrive on solving complex 
            security challenges and building tools that make digital systems safer. Currently pursuing 
            my BSc while actively developing hands-on skills through labs, CTFs, and personal projects.
          </p>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <a href="#contact" className="px-6 py-2.5 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
              Get In Touch
            </a>
            <div className="flex items-center gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:isaacmuli@example.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_30px_hsl(210_100%_55%/0.15)]">
            <img src={profileImage} alt="Isaac Muli" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
