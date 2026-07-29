import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "Applying strong Object-Oriented Programming (OOP) principles and standard SDLC practices to write scalable, maintainable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Leveraging a deep understanding of data structures and algorithmic problem-solving to build highly optimized and performant systems..",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Pushing the boundaries of traditional web development by integrating AI systems, smart prompt engineering, and modern LLMs.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building intelligent systems,
              <span className="font-serif italic font-normal text-white">
                {" "}
                not just websites.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a software engineer who thrives at the intersection of full-stack development and modern AI. My journey started with a fascination for web architecture, which quickly evolved into a focus on building scalable systems using the MERN stack and integrating intelligent LLM capabilities.
              </p>
              <p>
                I specialize in developing production-grade applications. My approach combines a strong foundation in data structures and object-oriented programming with a drive to solve complex, real-world engineering challenges.
              </p>
              <p>
                When I'm not building web applications, you'll likely find me tackling algorithmic problem-solving through competitive programming, or exploring the latest advancements in AI and machine learning. I believe in continuous learning and applying new technologies to create innovative solutions.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};