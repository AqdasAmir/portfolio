import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Github } from "@/components/Icons";
const projects = [
  {
    title: "AI-Powered Job Preparation Platform",
    description:
      "An AI-powered platform that provides personalized job preparation resources, including interview questions, coding challenges, and resume optimization.",
    image: "/projects/interviewGenie.png",
    tags: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB", "Google Gemini API", "Zod", "pdfmake", "REST APIs", "Git", "Render"],
    link: "https://interview-genie-ai.onrender.com   ",
    github: " https://github.com/AqdasAmir/InterviewGenie-AI",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A real-time chat application with instant messaging, user authentication.",
    image: "/projects/project1.png",
    tags: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB Atlas", "JWT", "Arcjet"],
    link: "https://vibechat-ty1w.onrender.com",
    github: "https://github.com/AqdasAmir/VibeChat",
  },
  {
    title: "Smart Legal Assistant",
    description:
      "An AI-powered legal assistant for legal research and precedent case retrieval.",
    image: "/projects/project2.png",
    tags: ["Python", "Streamlit", "CrewAI", "Multi-Agent Systems", "Vector DB"],
    link: "https://smart-legal-assistant.streamlit.app/",
    github: "https://github.com/AqdasAmir/SmartLegalAssistant",
  },
  {
    title: "Rental Listing Platform",
    description:
      "A modern platform for browsing and managing rental listings with real-time availability updates.",
    image: "/projects/project3.png",
    tags: ["Node.js", "Express.js", "MongoDB", "EJS", "MVC Architecture", "Render"],
    link: "https://rental-listing-fpgh.onrender.com/",
    github: "https://github.com/AqdasAmir/Rental-Listing-web-app",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    Live<ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    GitHub<Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div> */}
      </div>
    </section>
  );
};