import { Mail, Phone, Linkedin, Github } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "isaacmuli@example.com", href: "mailto:isaacmuli@example.com" },
  { icon: Phone, label: "Phone", value: "+254 107 625 434", href: "tel:+254107625434" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/isaacmuli", href: "https://linkedin.com/in/isaacmuli" },
  { icon: Github, label: "GitHub", value: "github.com/isaacmuli", href: "https://github.com/isaacmuli" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-container">
      <p className="section-subtitle">Get In Touch</p>
      <h2 className="section-title">Contact</h2>

      <div className="grid sm:grid-cols-2 gap-4 mt-12 max-w-2xl">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-lg bg-card p-5 glow-border group"
          >
            <div className="p-2 rounded-md bg-secondary group-hover:bg-primary/10 transition-colors">
              <contact.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-mono">{contact.label}</p>
              <p className="text-sm text-foreground">{contact.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
