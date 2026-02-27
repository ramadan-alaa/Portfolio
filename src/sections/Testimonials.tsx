import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart',
    content: 'Working with this developer was an absolute pleasure. They transformed our vision into a stunning reality that exceeded all expectations. The attention to detail and technical expertise is unmatched.',
    image: '/images/testimonial-sarah.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder',
    company: 'DesignCo',
    content: 'The attention to detail and creative problem-solving skills are unmatched. Our project was delivered on time and beyond expectations. I highly recommend their services to anyone looking for quality work.',
    image: '/images/testimonial-michael.jpg',
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Marketing Director',
    company: 'BrandX',
    content: 'Exceptional work from start to finish. The expertise in both design and development created a seamless experience. Our website performance improved significantly after the redesign.',
    image: '/images/testimonial-emily.jpg',
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const nextSlide = () => {
    goToSlide((activeIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    goToSlide((activeIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className={`section-label transition-all duration-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Testimonials
          </span>
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mt-4 transition-all duration-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '100ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </div>

        {/* Carousel */}
        <div
          className={`relative perspective-1000 transition-all duration-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '300ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          {/* Cards Container */}
          <div className="relative h-[400px] sm:h-[350px]">
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === (activeIndex - 1 + testimonials.length) % testimonials.length;
              const isNext = index === (activeIndex + 1) % testimonials.length;

              return (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-600 ${
                    isActive
                      ? 'opacity-100 translate-z-0 scale-100 z-20'
                      : isPrev || isNext
                      ? 'opacity-40 scale-75 z-10'
                      : 'opacity-0 scale-50 z-0'
                  }`}
                  style={{
                    transform: isActive
                      ? 'translateX(0) translateZ(50px) scale(1)'
                      : isPrev
                      ? 'translateX(-60%) translateZ(-50px) scale(0.75)'
                      : isNext
                      ? 'translateX(60%) translateZ(-50px) scale(0.75)'
                      : 'translateX(0) translateZ(-100px) scale(0.5)',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div className="glass rounded-3xl p-8 sm:p-10 h-full">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <Quote className="w-10 h-10 text-primary/50 animate-pulse" />
                    </div>

                    {/* Content */}
                    <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/50 animate-pulse-glow">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-white/60">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-primary w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
