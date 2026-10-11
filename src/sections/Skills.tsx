import { useEffect, useRef, useState, useMemo } from "react";
import {
  Sparkles,
  Layers,
  Cpu,
  Gauge,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import {
  NextJsIcon,
  ReactIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  TailwindIcon,
  ReduxIcon,
  Html5Icon,
  Css3Icon,
  GitIcon,
  ApiIcon,
  ResponsiveIcon,
  ViteIcon,
} from "../components/TechIcons";

interface SkillItem {
  id: string;
  name: string;
  category: "frameworks" | "styling" | "state" | "tools";
  categoryLabel: string;
  badge: string;
  level: number;
  description: string;
  tags: string[];
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}

const skillsData: SkillItem[] = [
  {
    id: "nextjs",
    name: "Next.js",
    category: "frameworks",
    categoryLabel: "Framework",
    badge: "Production Ready",
    level: 92,
    description: "App Router, Server Components, SSR/SSG & Route Handlers.",
    tags: ["App Router", "SSR / SSG", "Server Actions"],
    color: "#ffffff",
    icon: NextJsIcon,
  },
  {
    id: "react",
    name: "React.js",
    category: "frameworks",
    categoryLabel: "Library",
    badge: "Expert",
    level: 96,
    description: "Component Architecture, Custom Hooks, Virtual DOM & Context API.",
    tags: ["React 19", "Hooks", "Component Design"],
    color: "#61dafb",
    icon: ReactIcon,
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frameworks",
    categoryLabel: "Language",
    badge: "Advanced",
    level: 90,
    description: "Strict Type Safety, Interfaces, Generics & Enterprise Scalability.",
    tags: ["Type Safety", "Generics", "Interfaces"],
    color: "#3178c6",
    icon: TypeScriptIcon,
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "frameworks",
    categoryLabel: "Language",
    badge: "Mastery",
    level: 95,
    description: "Modern Syntax, Asynchronous Flow, Event Loop & Web APIs.",
    tags: ["ESNext", "Async/Await", "DOM Engine"],
    color: "#f7df1e",
    icon: JavaScriptIcon,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "styling",
    categoryLabel: "Styling",
    badge: "Expert",
    level: 96,
    description: "Utility-First Styling, Custom Themes, Responsive & Micro-interactions.",
    tags: ["Modern UI", "Dark Mode", "Custom Theme"],
    color: "#06b6d4",
    icon: TailwindIcon,
  },
  {
    id: "redux-zustand",
    name: "Redux & Zustand",
    category: "state",
    categoryLabel: "State Management",
    badge: "Advanced",
    level: 88,
    description: "Centralized Global State, Redux Toolkit (RTK) & Slices Architecture.",
    tags: ["RTK", "Zustand", "Global Store"],
    color: "#764abc",
    icon: ReduxIcon,
  },
  {
    id: "html5",
    name: "HTML5 Semantic",
    category: "styling",
    categoryLabel: "Markup",
    badge: "Expert",
    level: 98,
    description: "Modern Semantic Hierarchy, Accessible Layouts (a11y) & Clean SEO.",
    tags: ["Semantic HTML", "Accessibility", "SEO Markup"],
    color: "#e34f26",
    icon: Html5Icon,
  },
  {
    id: "css3",
    name: "CSS3 & Animations",
    category: "styling",
    categoryLabel: "Styling",
    badge: "Advanced",
    level: 94,
    description: "Flexbox, CSS Grid, Glassmorphism, Keyframes & Custom Properties.",
    tags: ["CSS Grid", "Keyframe Animations", "Glassmorphism"],
    color: "#264de4",
    icon: Css3Icon,
  },
  {
    id: "responsive",
    name: "Responsive & Mobile-First",
    category: "styling",
    categoryLabel: "Architecture",
    badge: "Mastery",
    level: 96,
    description: "Cross-Device Adaptability, Touch Optimization & Fluid Media Queries.",
    tags: ["Mobile-First", "Fluid Layouts", "Adaptive"],
    color: "#8751ff",
    icon: ResponsiveIcon,
  },
  {
    id: "api-axios",
    name: "REST APIs & Axios",
    category: "state",
    categoryLabel: "Data & Network",
    badge: "Advanced",
    level: 92,
    description: "RESTful Endpoints, Async Data Fetching, Interceptors & Error Handling.",
    tags: ["RESTful", "Axios", "Async Fetch"],
    color: "#4ade80",
    icon: ApiIcon,
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "tools",
    categoryLabel: "DevOps / VCS",
    badge: "Proficient",
    level: 90,
    description: "Version Control, Branching Models, Merges, PRs & Code Review.",
    tags: ["Git Flow", "GitHub", "Collaboration"],
    color: "#f05032",
    icon: GitIcon,
  },
  {
    id: "vite",
    name: "Vite & Modern Tooling",
    category: "tools",
    categoryLabel: "Bundling & Tools",
    badge: "Advanced",
    level: 92,
    description: "Lightning-fast HMR Bundling, NPM/Pnpm, ESLint & Build Optimization.",
    tags: ["Fast HMR", "ESLint", "Modern Bundler"],
    color: "#bd34fe",
    icon: ViteIcon,
  },
];

const categories = [
  { key: "all", label: "All Skills" },
  { key: "frameworks", label: "Frameworks & Logic" },
  { key: "styling", label: "Styling & UI" },
  { key: "state", label: "State & Data" },
  { key: "tools", label: "Tools & Workflow" },
] as const;

type CategoryKey = (typeof categories)[number]["key"];

const pillars = [
  {
    icon: Layers,
    title: "Component Architecture",
    description: "Modular, highly reusable, and scalable components with clean separation of concerns.",
  },
  {
    icon: Gauge,
    title: "Performance & Web Vitals",
    description: "High Lighthouse benchmarks, instant page loads, optimized assets, and zero layout shift.",
  },
  {
    icon: ShieldCheck,
    title: "Type Safety & Maintainability",
    description: "End-to-end typed props, interfaces, and predictable data contracts preventing bugs.",
  },
  {
    icon: Cpu,
    title: "State & Real-Time Sync",
    description: "Efficient local and global data flow, background caching, and seamless server sync.",
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredSkills = useMemo(() => {
    if (activeCategory === "all") return skillsData;
    return skillsData.filter((skill) => skill.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Dynamic Background Blurs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-[#61dafb]/5 rounded-full blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs sm:text-sm font-medium text-primary mb-4 transition-all duration-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Core Expertise & Tech Stack</span>
          </div>

          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white transition-all duration-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{
              transitionDelay: "100ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            Modern Frontend <span className="gradient-text">Technologies</span>
          </h2>

          <p
            className={`text-white/60 text-base sm:text-lg mt-5 transition-all duration-600 leading-relaxed ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{
              transitionDelay: "200ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            A carefully curated stack built around Next.js, React, and TypeScript.
            Crafted for lightning-fast performance, resilient architecture, and
            exceptional digital experiences.
          </p>
        </div>

        {/* Infinite Tech Marquee Ticker */}
        <div
          className={`relative w-full overflow-hidden mb-16 py-3 border-y border-white/5 transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          {/* Gradient fade on left & right */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0f0f0f] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0f0f0f] to-transparent z-10" />

          <div className="animate-marquee flex items-center gap-6 select-none">
            {[...skillsData, ...skillsData].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={`${item.id}-${idx}`}
                  className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/40 hover:bg-white/[0.06] transition-all whitespace-nowrap cursor-default group"
                >
                  <div
                    className="w-6 h-6 rounded-md flex items-center justify-center p-0.5 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <IconComp className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/5 text-white/50 border border-white/5">
                    {item.badge}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div
          className={`flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          {categories.map((cat) => {
            const count =
              cat.key === "all"
                ? skillsData.length
                : skillsData.filter((s) => s.category === cat.key).length;
            const isActive = activeCategory === cat.key;

            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "text-white bg-primary shadow-[0_0_25px_rgba(135,81,255,0.45)] scale-105"
                    : "text-white/60 bg-white/5 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-2 py-0.2 rounded-full ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-white/5 text-white/40"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComp = skill.icon;
            return (
              <div
                key={skill.id}
                className={`group relative rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden bg-white/[0.03] border border-white/10 hover:border-white/20 hover:shadow-2xl ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${Math.min(index * 60, 600)}ms`,
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Ambient glow matching tech color */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: skill.color }}
                />

                {/* Card Top: Icon + Info */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    {/* Tech Icon Container */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center p-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 shadow-inner"
                      style={{
                        backgroundColor: `${skill.color}15`,
                        border: `1px solid ${skill.color}35`,
                      }}
                    >
                      <IconComp className="w-8 h-8" />
                    </div>

                    {/* Badge */}
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/5 text-white/70 border border-white/10">
                        {skill.badge}
                      </span>
                      <span className="text-[11px] text-white/40 font-mono">
                        {skill.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                    {skill.name}
                  </h3>
                  <p className="text-white/60 text-sm mt-2 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Card Bottom: Progress Bar + Tags */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  {/* Mastery Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center text-xs mb-1.5">
                      <span className="text-white/50 font-medium">Proficiency</span>
                      <span
                        className="font-mono font-bold"
                        style={{ color: skill.color }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          backgroundColor: skill.color,
                          boxShadow: `0 0 10px ${skill.color}80`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/[0.04] text-white/70 border border-white/5 group-hover:border-white/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Pillars - Bottom Highlight Banner */}
        <div
          className={`mt-20 glass rounded-3xl p-8 sm:p-10 transition-all duration-700 relative overflow-hidden ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{
            transitionDelay: "600ms",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Subtle Background Radial */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="section-label">Engineering Standards</span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-2">
                Pillars of Modern <span className="gradient-text">Frontend Craft</span>
              </h3>
              <p className="text-white/60 text-sm sm:text-base mt-2">
                Delivering high-caliber digital products with rigorous engineering
                practices and clean, scalable code.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, pIdx) => {
                const PillarIcon = pillar.icon;
                return (
                  <div
                    key={pIdx}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 hover:bg-white/[0.04] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                      <PillarIcon className="w-5 h-5" />
                    </div>
                    <h4 className="text-white font-semibold text-base mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{pillar.title}</span>
                    </h4>
                    <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
