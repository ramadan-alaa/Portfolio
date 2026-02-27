import { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  Palette, 
  Layout, 
  Database, 
  GitBranch, 
  Terminal,
  Smartphone,
  Zap
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ElementType;
  level: number;
  color: string;
}

const skillCategories = [
  {
    title: 'Frontend Core',
    skills: [
      { name: 'HTML5', icon: Code2, level: 95, color: '#e34c26' },
      { name: 'CSS3', icon: Palette, level: 92, color: '#264de4' },
      { name: 'JavaScript', icon: Terminal, level: 90, color: '#f7df1e' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', icon: Zap, level: 88, color: '#61dafb' },
      { name: 'TypeScript', icon: Code2, level: 85, color: '#3178c6' },
      { name: 'Tailwind CSS', icon: Layout, level: 93, color: '#06b6d4' },
    ],
  },
  {
    title: 'Tools & More',
    skills: [
      { name: 'Sass/SCSS', icon: Palette, level: 87, color: '#cc6699' },
      { name: 'Bootstrap', icon: Layout, level: 80, color: '#7952b3' },
      { name: 'Git', icon: GitBranch, level: 82, color: '#f05032' },
    ],
  },
  {
    title: 'API & Data',
    skills: [
      { name: 'REST APIs', icon: Database, level: 85, color: '#4ade80' },
      { name: 'Axios', icon: Zap, level: 88, color: '#5a29e4' },
      { name: 'Responsive', icon: Smartphone, level: 95, color: '#8751ff' },
    ],
  },
];

const SkillCard = ({ skill, index, isVisible }: { skill: Skill; index: number; isVisible: boolean }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, index * 150 + 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, index]);

  return (
    <div
      className={`relative group transition-all duration-700 ${
        isVisible
          ? 'translate-y-0 opacity-100 rotate-x-0'
          : 'translate-y-12 opacity-0'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div className="relative glass rounded-2xl p-5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-glow group-hover:border-primary/50">
        {/* Border Gradient Animation */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div
            className="absolute inset-[-2px] rounded-2xl animate-border-rotate"
            style={{
              background: `linear-gradient(90deg, ${skill.color}, #8751ff, ${skill.color})`,
              backgroundSize: '200% 100%',
              zIndex: -1,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            style={{ backgroundColor: `${skill.color}20` }}
          >
            <skill.icon className="w-6 h-6" style={{ color: skill.color }} />
          </div>

          {/* Name */}
          <h4 className="text-white font-semibold mb-3">{skill.name}</h4>

          {/* Progress Bar */}
          <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
              style={{
                width: `${animatedLevel}%`,
                backgroundColor: skill.color,
                boxShadow: `0 0 10px ${skill.color}50`,
              }}
            />
          </div>

          {/* Level */}
          <div className="flex justify-between mt-2">
            <span className="text-xs text-white/50">Proficiency</span>
            <span className="text-xs font-medium" style={{ color: skill.color }}>
              {animatedLevel}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
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
      id="skills"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className={`section-label transition-all duration-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            My Skills
          </span>
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mt-4 transition-all duration-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '100ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p
            className={`text-white/60 max-w-2xl mx-auto mt-4 transition-all duration-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '200ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            I've worked with a variety of technologies in the web development world.
            Here are the main tools and frameworks I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <h3
                className={`text-xl font-semibold text-white mb-6 transition-all duration-500 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: `${categoryIndex * 100 + 300}ms` }}
              >
                {category.title}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={categoryIndex * 3 + skillIndex}
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className={`mt-16 glass rounded-3xl p-8 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '800ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <h3 className="text-2xl font-display font-bold text-white mb-4">
            Always Learning
          </h3>
          <p className="text-white/60 max-w-2xl mx-auto">
            Technology evolves rapidly, and I'm committed to staying at the forefront.
            Currently exploring Next.js, Three.js, and advanced animation techniques
            to create even more immersive web experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
