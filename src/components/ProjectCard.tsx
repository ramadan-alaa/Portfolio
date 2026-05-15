import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
}

const ProjectCard = ({ project, index, isVisible }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative transition-all duration-700 ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-12 opacity-0 scale-95"
      }`}
      style={{
        transitionDelay: `${index * 150 + 300}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-3xl bg-dark-surface transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />

          <div
            className={`absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent transition-opacity duration-500 ${
              isHovered ? "opacity-90" : "opacity-60"
            }`}
          />

          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 bg-primary/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
              {project.category}
            </span>
          </div>

          <div
            className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-500 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href={project.liveUrl}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
            >
              <ExternalLink size={20} />
            </a>
            <a
              href={project.githubUrl}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-white/60 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white/5 text-white/70 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
