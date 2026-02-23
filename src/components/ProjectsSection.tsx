import { Terminal, Calculator, Lock } from "lucide-react";

const projects = [
  {
    icon: Terminal,
    title: "Custom Python Port Scanner",
    problem: "Needed a lightweight tool to scan open ports on target machines for security assessments without relying on heavy external software.",
    tools: ["Python", "Socket Library", "Threading"],
    summary: "Built a multithreaded port scanner that scans a range of ports on a given IP address, identifying open services and potential vulnerabilities. Implemented timeout handling and banner grabbing for service identification.",
    results: "Learned socket programming, TCP handshake mechanics, and how real-world scanners like Nmap operate under the hood. Achieved scanning of 1000 ports in under 10 seconds.",
  },
  {
    icon: Calculator,
    title: "Subnet Calculator Tool",
    problem: "Manual subnetting is error-prone and time-consuming, especially when designing network architectures for class assignments and lab exercises.",
    tools: ["Python", "ipaddress module", "CLI"],
    summary: "Developed a command-line tool that takes an IP address and CIDR notation, then calculates the network address, broadcast address, usable host range, and number of available hosts.",
    results: "Deepened understanding of IPv4 addressing, CIDR notation, and binary math. The tool became a go-to utility for networking coursework.",
  },
  {
    icon: Lock,
    title: "Password Strength Checker",
    problem: "Users often create weak passwords. Needed a simple, visual tool to evaluate password strength and encourage better security practices.",
    tools: ["HTML", "CSS", "JavaScript", "Regex"],
    summary: "Created a web-based tool that analyzes password input in real-time, checking for length, complexity, common patterns, and dictionary words. Displays a visual strength meter with actionable feedback.",
    results: "Gained experience in client-side validation, regex patterns for security, and UI/UX design for security tools. Explored common password attack vectors.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <p className="section-subtitle">What I've Built</p>
      <h2 className="section-title">Projects</h2>

      <div className="grid gap-8 mt-12">
        {projects.map((project) => (
          <div key={project.title} className="rounded-lg bg-card p-6 md:p-8 glow-border">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 rounded-md bg-secondary">
                <project.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-primary font-mono text-xs mb-1">Problem Statement</p>
                <p className="text-muted-foreground">{project.problem}</p>
              </div>
              <div>
                <p className="text-primary font-mono text-xs mb-1">Tools Used</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="skill-tag text-xs">{tool}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-primary font-mono text-xs mb-1">Implementation</p>
                <p className="text-muted-foreground">{project.summary}</p>
              </div>
              <div>
                <p className="text-primary font-mono text-xs mb-1">Key Results</p>
                <p className="text-muted-foreground">{project.results}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
