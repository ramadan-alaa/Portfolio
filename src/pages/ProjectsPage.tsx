import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const ProjectsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/3 w-[420px] h-[420px] bg-primary/5 rounded-full blur-[110px]" />
        <div className="absolute bottom-0 right-1/4 w-[320px] h-[320px] bg-secondary/5 rounded-full blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <span
              className={`section-label transition-all duration-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              Portfolio
            </span>
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mt-4 transition-all duration-600 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: "100ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              All <span className="gradient-text">Projects</span>
            </h1>
          </div>
          <div
            className={`flex items-center gap-4 text-white/60 transition-all duration-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{
              transitionDelay: "200ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <p className="max-w-md">
              Browse the complete list of projects with the same visual style
              you saw on the home page.
            </p>
            <Link
              to="/"
              className="btn-outline inline-flex items-center gap-2 whitespace-nowrap"
            >
              <ArrowLeft size={18} />
              Back Home
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className={index % 2 === 1 ? "md:mt-12" : ""}>
              <ProjectCard
                project={project}
                index={index}
                isVisible={isVisible}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
