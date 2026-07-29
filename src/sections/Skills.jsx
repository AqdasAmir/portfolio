import {
  Bot,
  Braces,
  Code2,
  Database,
  Globe,
  Server,
  ShieldCheck,
  Terminal,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    icon: Globe,
    title: "Frontend",
    description: "Building responsive, component-driven interfaces.",
    skills: [
      { name: "HTML5", icon: Code2 },
      { name: "CSS3", icon: Braces },
      { name: "JavaScript ES6+", icon: Code2 },
      { name: "React.js", icon: Braces },
      { name: "TypeScript Basic", icon: Code2 },
      { name: "Bootstrap", icon: Globe },
      { name: "Vite", icon: Terminal },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    description: "Designing APIs, auth flows, and real-time services.",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Server },
      { name: "RESTful APIs", icon: Globe },
      { name: "Socket.io", icon: ShieldCheck },
      { name: "JWT", icon: ShieldCheck },
    ],
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Creating practical AI workflows and agent systems.",
    skills: [
      { name: "Python", icon: Terminal },
      { name: "CrewAI", icon: Bot },
      { name: "Multi-Agent Systems", icon: Bot },
      { name: "Prompt Engineering", icon: Braces },
      { name: "AI API Integration", icon: Globe },
    ],
  },
  {
    icon: Database,
    title: "Database",
    description: "Working with structured and document data stores.",
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "MongoDB Atlas", icon: Database },
      { name: "MySQL", icon: Database },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    description: "Shipping, testing, and collaborating with modern tools.",
    skills: [
      { name: "Git", icon: Terminal },
      { name: "GitHub", icon: Terminal },
      { name: "Postman", icon: Globe },
      { name: "VS Code", icon: Code2 },
      { name: "Render", icon: Server },
      { name: "Arcjet", icon: ShieldCheck },
      { name: "Java", icon: Code2 },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Technical Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Tools I use to
            <span className="font-serif italic font-normal text-white">
              {" "}
              ship products.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A focused stack from my resume, covering frontend, backend,
            databases, AI workflows, and deployment tooling.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {skillGroups.map((group, idx) => (
            <div
              key={group.title}
              className={`glass rounded-2xl p-6 animate-fade-in ${
                idx === skillGroups.length - 1 ? "lg:col-span-2" : ""
              }`}
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 hover:bg-primary/20 transition-colors">
                  <group.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {group.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {group.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/skill flex items-center gap-2 px-4 py-2 rounded-full bg-surface text-sm font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                  >
                    <skill.icon className="w-4 h-4 text-primary/70 group-hover/skill:text-primary transition-colors" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
