import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Redesign',
    category: 'Web Design',
    description: 'A complete redesign of an e-commerce platform focusing on user experience and conversion optimization.',
    image: '/images/project-ecommerce.jpg',
    tech: ['React', 'Tailwind', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Brand Identity System',
    category: 'Branding',
    description: 'Comprehensive brand identity including logo, color system, and brand guidelines.',
    image: '/images/project-branding.jpg',
    tech: ['Figma', 'Illustrator'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Mobile App Design',
    category: 'UI/UX',
    description: 'Intuitive mobile application design with focus on accessibility and user engagement.',
    image: '/images/project-mobileapp.jpg',
    tech: ['React Native', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Dashboard Interface',
    category: 'Development',
    description: 'Data visualization dashboard with real-time analytics and customizable widgets.',
    image: '/images/project-dashboard.jpg',
    tech: ['React', 'D3.js', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

const ProjectCard = ({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative transition-all duration-700 ${
        isVisible
          ? 'translate-y-0 opacity-100 scale-100'
          : 'translate-y-12 opacity-0 scale-95'
      }`}
      style={{
        transitionDelay: `${index * 150 + 300}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-3xl bg-dark-surface transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent transition-opacity duration-500 ${
              isHovered ? 'opacity-90' : 'opacity-60'
            }`}
          />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 bg-primary/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
              {project.category}
            </span>
          </div>

          {/* Hover Actions */}
          <div
            className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-500 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
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

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-white/60 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          
          {/* Tech Stack */}
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

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <span
              className={`section-label transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              Portfolio
            </span>
            <h2
              className={`text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mt-4 transition-all duration-600 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '100ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <p
            className={`text-white/60 max-w-md mt-4 lg:mt-0 transition-all duration-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '200ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            A selection of my recent work, showcasing my skills in design,
            development, and problem-solving.
          </p>
        </div>

        {/* Projects Grid - Masonry Style */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={index % 2 === 1 ? 'md:mt-12' : ''}
            >
              <ProjectCard
                project={project}
                index={index}
                isVisible={isVisible}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-16 transition-all duration-500 ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-90'
          }`}
          style={{ transitionDelay: '900ms', transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}
        >
          <a
            href="#"
            className="btn-outline inline-flex items-center gap-2 group"
          >
            View All Projects
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
