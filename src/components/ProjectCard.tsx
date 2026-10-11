import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
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
      <div className="relative overflow-hidden rounded-3xl bg-dark-surface border border-white/5 transition-all duration-500 hover:-translate-y-3 hover:border-primary/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
        {/* Clickable Card Link for Image */}
        <Link
          to={`/projects/${project.id}`}
          className="block relative h-64 overflow-hidden cursor-pointer"
        >
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />

          <div
            className={`absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent transition-opacity duration-500 ${
              isHovered ? "opacity-90" : "opacity-60"
            }`}
          />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1.5 bg-primary/80 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-primary/30 shadow-sm">
              {project.category}
            </span>
          </div>

          {/* Hover Actions Bar */}
          <div
            className={`absolute inset-0 z-20 flex items-center justify-center gap-3 transition-all duration-500 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            {/* View Project Details Button */}
            <span className="px-4 py-2.5 bg-primary text-white rounded-full flex items-center gap-1.5 text-xs font-semibold shadow-glow hover:scale-105 transition-all">
              <span>View Details</span>
              <ArrowUpRight size={16} />
            </span>

            {/* Live Demo External */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-primary transition-all hover:scale-110"
              title="Live Demo"
            >
              <ExternalLink size={18} />
            </a>

            {/* GitHub Repo External */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-primary transition-all hover:scale-110"
              title="Source Code"
            >
              <Github size={18} />
            </a>
          </div>
        </Link>

        {/* Content Section */}
        <div className="p-6">
          <Link to={`/projects/${project.id}`} className="block group/title">
            <h3 className="text-xl font-display font-bold text-white mb-2 group-hover/title:text-primary transition-colors flex items-center justify-between">
              <span className="line-clamp-1">{project.title}</span>
              <ArrowUpRight
                size={18}
                className="opacity-0 group-hover/title:opacity-100 -translate-x-2 group-hover/title:translate-x-0 transition-all text-primary shrink-0 ml-2"
              />
            </h3>
          </Link>

          <p className="text-white/60 text-sm mb-5 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white/[0.04] text-white/70 text-xs font-medium rounded-full border border-white/5"
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
