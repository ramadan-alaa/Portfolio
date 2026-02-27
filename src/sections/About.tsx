import { useEffect, useRef, useState } from "react";
import { Download, Code2, Palette, Globe } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    clients: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          const duration = 2000;
          const steps = 60;
          const interval = duration / steps;

          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounters({
              years: Math.round(3 * easeOut),
              projects: Math.round(50 * easeOut),
              clients: Math.round(30 * easeOut),
            });

            if (step >= steps) clearInterval(timer);
          }, interval);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: Code2,
      label: "Clean Code",
      desc: "Writing maintainable, scalable code",
    },
    {
      icon: Palette,
      label: "UI/UX Design",
      desc: "Creating beautiful interfaces",
    },
    {
      icon: Globe,
      label: "Web Performance",
      desc: "Optimizing for speed & SEO",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div className="relative group">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl" />

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl">
                <div
                  className={`transition-all duration-1200 ${
                    isVisible ? "clip-path-full" : ""
                  }`}
                  style={{
                    clipPath: isVisible
                      ? "inset(0 0 0 0)"
                      : "inset(0 100% 0 0)",
                    transition: "clip-path 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <img
                    src="/images/hero-port.jpg"
                    alt="About"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl animate-float">
                <div className="text-4xl font-display font-bold text-primary">
                  {counters.years}+
                </div>
                <div className="text-sm text-white/70">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div>
            {/* Section Label */}
            <div
              className={`transition-all duration-500 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
            >
              <span className="section-label">About Me</span>
            </div>

            {/* Headline */}
            <h2
              className={`text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mt-4 mb-6 transition-all duration-600 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: "100ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              Crafting Digital
              <span className="gradient-text block">Experiences</span>
            </h2>

            {/* Description */}
            <div
              className={`space-y-4 text-white/70 transition-all duration-600 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: "400ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <p>
                I'm a passionate Front-End Developer with strong experience in
                building modern, responsive, and scalable web applications.
                Skilled in HTML, CSS, JavaScript, React, and TypeScript, with
                hands-on experience integrating RESTful APIs using Axios.
                Experienced in developing and customizing e-commerce themes on
                the Salla, Zid platform using Twig templating, along with
                Tailwind, Bootstrap, and SASS. Proficient in Git/GitHub,
                performance optimization, and building reusable, component-based
                UI. Passionate about delivering clean, user-friendly, and
                high-performance interfaces.
              </p>
              <p>
                I specialize in React, TypeScript, and modern CSS frameworks
                like Tailwind. I believe in writing clean, maintainable code and
                creating interfaces that not only look great but also provide
                exceptional user experiences.
              </p>
            </div>

            {/* Skills */}
            <div
              className={`grid sm:grid-cols-3 gap-4 mt-8 transition-all duration-600 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: "600ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {skills.map((skill, index) => (
                <div
                  key={skill.label}
                  className="glass p-4 rounded-2xl group hover:bg-white/10 transition-colors duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <skill.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-white mb-1">
                    {skill.label}
                  </h4>
                  <p className="text-sm text-white/60">{skill.desc}</p>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div
              className={`flex gap-8 mt-10 transition-all duration-600 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: "700ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-primary animate-counter-pulse">
                  {counters.projects}+
                </div>
                <div className="text-sm text-white/60 mt-1">Projects Done</div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-primary animate-counter-pulse">
                  {counters.clients}+
                </div>
                <div className="text-sm text-white/60 mt-1">Happy Clients</div>
              </div>
            </div>

            {/* CTA */}
            <div
              className={`mt-10 transition-all duration-500 ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-90"
              }`}
              style={{
                transitionDelay: "900ms",
                transitionTimingFunction:
                  "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
              }}
            >
              <a
                href="/Ramadan_CV.pdf"
                download
                aria-label="Download CV"
                className="btn-outline inline-flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
