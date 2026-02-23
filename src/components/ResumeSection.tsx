import { GraduationCap, Briefcase, Award } from "lucide-react";

const skills = {
  Programming: ["Python", "Java", "SQL", "Bash"],
  "Cybersecurity Tools": ["Nmap", "Wireshark", "Metasploit", "Burp Suite"],
  Networking: ["Subnetting", "VLANs", "Routing Basics", "TCP/IP"],
  "Other Tools": ["MATLAB", "Android Studio", "Blender", "Git"],
};

const ResumeSection = () => {
  return (
    <section id="resume" className="section-container">
      <p className="section-subtitle">My Background</p>
      <h2 className="section-title">Resume</h2>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {/* Education */}
        <div className="rounded-lg bg-card p-6 glow-border">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Education</h3>
          </div>
          <div className="border-l-2 border-primary/30 pl-4 space-y-4">
            <div>
              <p className="text-sm text-primary font-mono">2021 – Present</p>
              <p className="font-medium text-foreground">BSc Telecommunication & Information Engineering</p>
              <p className="text-sm text-muted-foreground">Dedan Kimathi University of Technology</p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="rounded-lg bg-card p-6 glow-border">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Experience</h3>
          </div>
          <div className="border-l-2 border-primary/30 pl-4 space-y-4">
            <div>
              <p className="text-sm text-primary font-mono">May 2024 – Aug 2024</p>
              <p className="font-medium text-foreground">Network and Security Attaché</p>
              <p className="text-sm text-muted-foreground">Konza Technopolis Development Authority (KoTDA)</p>
              <p className="text-sm text-muted-foreground mt-1">
                Assisted in network monitoring, firewall configuration, and vulnerability assessments on internal systems.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="rounded-lg bg-card p-6 glow-border md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
          </div>
          <ul className="space-y-2 text-muted-foreground text-sm">
             <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              Network Basics – Cisco Networking Academy
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              Cisco Ethical Hacker Course
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              Animation and Visual Effects – Dekut Film Hub
            </li>
          </ul>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-foreground mb-6">Technical Skills</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-sm font-mono text-primary mb-3">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
