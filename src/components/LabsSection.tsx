import { Search, Activity } from "lucide-react";

const labs = [
  {
    icon: Search,
    title: "Nmap Enumeration Lab",
    problem: "Identify open ports, running services, and potential vulnerabilities on a target machine within a controlled lab environment to practice network reconnaissance.",
    approach: "Used Nmap with various scan types including SYN scan (-sS), version detection (-sV), and OS fingerprinting (-O). Progressed from basic ping sweeps to aggressive scans with script engine (--script vuln) to identify known vulnerabilities.",
    tools: ["Nmap", "Kali Linux", "VirtualBox", "Metasploitable 2"],
    lessons: [
      "Understood the difference between TCP connect and SYN stealth scans",
      "Learned to interpret Nmap output and identify attack surfaces",
      "Practiced responsible scanning techniques and documentation",
      "Explored NSE scripts for automated vulnerability detection",
    ],
  },
  {
    icon: Activity,
    title: "Wireshark Traffic Analysis Lab",
    problem: "Analyze captured network traffic to identify suspicious communication patterns, unencrypted credentials, and potential security incidents.",
    approach: "Captured live traffic on a lab network and analyzed provided PCAP files. Applied display filters to isolate HTTP, DNS, and TCP traffic. Followed TCP streams to reconstruct sessions and identify data exfiltration attempts.",
    tools: ["Wireshark", "tcpdump", "Kali Linux", "Sample PCAP files"],
    lessons: [
      "Learned to use display and capture filters effectively",
      "Identified plaintext credentials transmitted over HTTP",
      "Understood DNS query patterns and potential DNS tunneling",
      "Gained experience in network forensics and incident analysis",
    ],
  },
];

const LabsSection = () => {
  return (
    <section id="labs" className="section-container">
      <p className="section-subtitle">Hands-On Learning</p>
      <h2 className="section-title">Lab Challenges</h2>

      <div className="grid gap-8 mt-12">
        {labs.map((lab) => (
          <div key={lab.title} className="rounded-lg bg-card p-6 md:p-8 glow-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-2 rounded-md bg-secondary">
                <lab.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{lab.title}</h3>
            </div>

            <div className="space-y-5 text-sm">
              <div>
                <p className="text-primary font-mono text-xs mb-1">Problem Statement</p>
                <p className="text-muted-foreground">{lab.problem}</p>
              </div>
              <div>
                <p className="text-primary font-mono text-xs mb-1">Approach</p>
                <p className="text-muted-foreground">{lab.approach}</p>
              </div>
              <div>
                <p className="text-primary font-mono text-xs mb-1">Tools Used</p>
                <div className="flex flex-wrap gap-2">
                  {lab.tools.map((tool) => (
                    <span key={tool} className="skill-tag text-xs">{tool}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-primary font-mono text-xs mb-1">Key Lessons</p>
                <ul className="space-y-1.5">
                  {lab.lessons.map((lesson, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Screenshot placeholder */}
              <div className="rounded-md bg-secondary border border-border p-8 flex items-center justify-center">
                <p className="text-muted-foreground text-xs font-mono">[ Lab Screenshot Placeholder ]</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LabsSection;
