import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }

    const particles: Particle[] = [];
    const particleCount = 60;
    const connectionDistance = 120;
    const mouseRadius = 150;

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        // Mouse repulsion
        const dx = particle.x - mouseX;
        const dy = particle.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius;
          particle.vx += (dx / distance) * force * 0.02;
          particle.vy += (dy / distance) * force * 0.02;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(135, 81, 255, 0.6)';
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx2 = particle.x - other.x;
          const dy2 = particle.y - other.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (dist2 < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(135, 81, 255, ${0.2 * (1 - dist2 / connectionDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Gradient Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-30 blur-[100px] animate-float-slow"
          style={{ background: 'linear-gradient(135deg, #8751ff, #b3a0ff)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-20 blur-[80px] animate-float"
          style={{ background: 'linear-gradient(135deg, #b3a0ff, #ff6b6b)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] animate-float-slow"
          style={{ background: '#8751ff' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Headline */}
            <div className="overflow-hidden mb-4">
              <h1
                className={`text-6xl sm:text-7xl lg:text-8xl xl:text-[120px] font-display font-bold text-white leading-none transition-all duration-1000 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-full opacity-0'
                }`}
                style={{ transitionDelay: '300ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                Creative
              </h1>
            </div>
            <div className="overflow-hidden mb-8">
              <h1
                className={`text-6xl sm:text-7xl lg:text-8xl xl:text-[120px] font-display font-bold leading-none transition-all duration-1000 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-full opacity-0'
                }`}
                style={{
                  transitionDelay: '500ms',
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <span className="gradient-text">Portfolio</span>
              </h1>
            </div>

            {/* Description */}
            <p
              className={`text-lg text-white/70 max-w-lg mb-10 transition-all duration-800 ${
                isVisible
                  ? 'translate-y-0 opacity-100 blur-0'
                  : 'translate-y-8 opacity-0 blur-sm'
              }`}
              style={{ transitionDelay: '800ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              A passionate Frontend Developer crafting beautiful, responsive, and
              user-friendly web experiences. Specializing in React, TypeScript, and
              modern CSS frameworks.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-600 ${
                isVisible
                  ? 'translate-y-0 opacity-100 scale-100'
                  : 'translate-y-8 opacity-0 scale-90'
              }`}
              style={{ transitionDelay: '1000ms', transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="btn-primary flex items-center gap-2 group"
              >
                View My Work
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
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

            {/* Stats */}
            <div
              className={`flex gap-8 mt-12 transition-all duration-600 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '1200ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <div>
                <div className="text-3xl font-display font-bold text-primary animate-counter-pulse">
                  3+
                </div>
                <div className="text-sm text-white/60">Years Exp.</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary animate-counter-pulse">
                  50+
                </div>
                <div className="text-sm text-white/60">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary animate-counter-pulse">
                  30+
                </div>
                <div className="text-sm text-white/60">Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className={`relative perspective-1000 transition-all duration-1200 ${
                isVisible
                  ? 'translate-x-0 opacity-100 rotate-0'
                  : 'translate-x-24 opacity-0 rotate-y-25'
              }`}
              style={{ transitionDelay: '600ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              {/* Image Container */}
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-30 rounded-3xl blur-2xl group-hover:opacity-50 transition-opacity duration-500" />
                
                {/* Image */}
                <div className="relative w-[300px] h-[400px] sm:w-[350px] sm:h-[467px] lg:w-[400px] lg:h-[533px] rounded-3xl overflow-hidden animate-float-slow">
                  <img
                    src="/images/hero-port.jpg"
                    alt="Portrait"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -left-4 glass px-4 py-3 rounded-2xl animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>

                {/* Tech Stack Badge */}
                <div className="absolute -top-4 -right-4 glass px-4 py-3 rounded-2xl animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex gap-2">
                    <span className="text-xs px-2 py-1 bg-primary/20 rounded-full text-primary">React</span>
                    <span className="text-xs px-2 py-1 bg-primary/20 rounded-full text-primary">TS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent z-10" />
    </section>
  );
};

export default Hero;
