import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Calendar,
  User,
  Layers,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Share2,
} from "lucide-react";
import { projects } from "../data/projects";
import { toast } from "sonner";

const ProjectDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  // Find project by id or by slug
  const projectIndex = projects.findIndex(
    (p) => p.id.toString() === id || p.slug === id,
  );
  const project = projectIndex !== -1 ? projects[projectIndex] : null;

  const prevProject =
    projectIndex > 0 ? projects[projectIndex - 1] : projects[projects.length - 1];
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : projects[0];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-3xl font-display font-bold text-white mb-4">
          Project Not Found
        </h2>
        <p className="text-white/60 mb-8 max-w-md">
          The project you are looking for does not exist or has been moved.
        </p>
        <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft size={18} />
          Back to All Projects
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Project link copied to clipboard!");
    }
  };

  return (
    <article className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation & Breadcrumbs Bar */}
        <div
          className={`flex items-center justify-between mb-10 transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white hover:bg-white/5 px-3 py-1.5 rounded-full border border-white/10 transition-all"
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
            <span className="text-white/30 hidden sm:inline">/</span>
            <Link
              to="/projects"
              className="text-sm text-white/50 hover:text-primary transition-colors hidden sm:inline"
            >
              Projects
            </Link>
            <span className="text-white/30 hidden sm:inline">/</span>
            <span className="text-sm text-white/80 font-medium truncate max-w-[200px] sm:max-w-none hidden sm:inline">
              {project.title.split("–")[0].trim()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-primary/40 transition-all"
              title="Share project"
            >
              <Share2 size={14} />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>
        </div>

        {/* Hero Header */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/15 text-primary border border-primary/30">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/60 border border-white/10">
              {project.timeline}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mt-4 leading-relaxed font-light">
            {project.subtitle}
          </p>

          {/* Quick Info Bar & Action Buttons */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Meta Tags */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <User size={16} className="text-primary" />
                <span>{project.role}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                <span>Duration: {project.timeline}</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers size={16} className="text-primary" />
                <span>{project.tech.length} Technologies</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-sm !px-6 !py-3 group"
              >
                <span>Live Demo</span>
                <ExternalLink
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2 text-sm !px-6 !py-3 hover:bg-white/10"
              >
                <Github size={16} />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </div>

        {/* Project Browser Frame Showcase */}
        <div
          className={`mb-16 transition-all duration-800 ${
            isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-dark-surface border border-white/15 shadow-2xl group">
            {/* Mockup Browser Window Header */}
            <div className="px-4 py-3 bg-white/[0.04] border-b border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>

              {/* URL simulation */}
              <div className="flex-1 max-w-md mx-auto hidden sm:flex items-center justify-center px-4 py-1 rounded-full bg-dark/60 text-xs text-white/50 border border-white/5 font-mono truncate">
                {project.liveUrl}
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-xs text-white/60 font-medium hidden sm:inline">
                  Active
                </span>
              </div>
            </div>

            {/* Main Screenshot Image */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/8] overflow-hidden bg-dark">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Key Metrics Strip */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 gap-4 mb-16 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          {project.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl glass border border-white/10 hover:border-primary/40 transition-all flex flex-col justify-between"
            >
              <span className="text-xs sm:text-sm text-white/50 font-medium">
                {metric.label}
              </span>
              <span className="text-2xl sm:text-4xl font-display font-bold text-white gradient-text mt-2">
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        {/* Deep Dive Grid: Overview & Tech Stack */}
        <div className="grid lg:grid-cols-3 gap-10 mb-16">
          {/* Left Column: Project Overview */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "350ms" }}
          >
            <div className="glass rounded-3xl p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles size={14} />
                <span>Executive Summary</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                Project Overview & Objectives
              </h2>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed font-light">
                {project.overview}
              </p>
            </div>

            {/* Core Features */}
            <div className="glass rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span>Key Features & Capabilities</span>
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary/30 transition-all"
                  >
                    <h4 className="text-white font-semibold text-base mb-1.5">
                      {feature.title}
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Tech Stack & Architecture Details */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            {/* Tech Stack Card */}
            <div className="glass rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" />
                <span>Technologies Used</span>
              </h3>
              <p className="text-white/50 text-xs mb-4">
                Modern frontend libraries and developer tooling powering this application.
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/5 text-white/90 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Quick Links Card */}
            <div className="glass rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-primary/10 via-transparent to-transparent">
              <h4 className="text-lg font-bold text-white mb-2">
                Explore The Project
              </h4>
              <p className="text-white/60 text-sm mb-6">
                Interact with the live deployed build or inspect the source code on GitHub.
              </p>

              <div className="space-y-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary flex items-center justify-center gap-2 text-sm !py-3"
                >
                  <span>Launch Live Site</span>
                  <ExternalLink size={16} />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-outline flex items-center justify-center gap-2 text-sm !py-3 hover:bg-white/10"
                >
                  <Github size={16} />
                  <span>View Repository</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Challenges & Solutions Section */}
        <div
          className={`glass rounded-3xl p-6 sm:p-10 mb-20 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "450ms" }}
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="section-label">Engineering Deep Dive</span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-2">
              Challenges & Technical Solutions
            </h3>
            <p className="text-white/60 text-sm sm:text-base mt-2">
              Real engineering obstacles encountered during development and how they were systematically resolved.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Challenges */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <div className="flex items-center gap-2 text-accent text-base font-semibold">
                <AlertTriangle size={18} />
                <span>Technical Hurdles</span>
              </div>
              <ul className="space-y-3">
                {project.challenges.map((challenge, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-2.5 text-sm text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <div className="flex items-center gap-2 text-success text-base font-semibold">
                <Lightbulb size={18} />
                <span>Implemented Solutions</span>
              </div>
              <ul className="space-y-3">
                {project.solutions.map((solution, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2.5 text-sm text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-success shrink-0 mt-2" />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Previous & Next Project Navigation */}
        <div
          className={`grid sm:grid-cols-2 gap-6 pt-10 border-t border-white/10 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          {/* Previous */}
          <Link
            to={`/projects/${prevProject.id}`}
            className="group p-5 rounded-2xl glass hover:border-primary/40 transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-primary group-hover:text-white flex items-center justify-center text-white/60 transition-colors">
                <ArrowLeft size={18} />
              </div>
              <div>
                <span className="text-xs text-white/40 block">Previous Project</span>
                <span className="text-base font-bold text-white group-hover:text-primary transition-colors">
                  {prevProject.title.split("–")[0].trim()}
                </span>
              </div>
            </div>
          </Link>

          {/* Next */}
          <Link
            to={`/projects/${nextProject.id}`}
            className="group p-5 rounded-2xl glass hover:border-primary/40 transition-all flex items-center justify-between text-right"
          >
            <div className="flex items-center gap-4 ml-auto">
              <div>
                <span className="text-xs text-white/40 block">Next Project</span>
                <span className="text-base font-bold text-white group-hover:text-primary transition-colors">
                  {nextProject.title.split("–")[0].trim()}
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-primary group-hover:text-white flex items-center justify-center text-white/60 transition-colors">
                <ArrowRight size={18} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectDetailsPage;
