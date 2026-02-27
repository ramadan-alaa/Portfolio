import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of Web Design',
    excerpt: 'Exploring emerging trends and technologies shaping the future of digital experiences. From AI-powered design to immersive 3D interfaces.',
    image: '/images/blog-future.jpg',
    date: 'Dec 15, 2024',
    category: 'Design',
    featured: true,
  },
  {
    id: 2,
    title: 'Building Accessible Interfaces',
    excerpt: 'Best practices for creating inclusive digital experiences for all users.',
    image: '/images/blog-accessible.jpg',
    date: 'Dec 10, 2024',
    category: 'Accessibility',
  },
  {
    id: 3,
    title: 'The Power of Motion Design',
    excerpt: 'How purposeful animations enhance user engagement and understanding.',
    image: '/images/blog-motion.jpg',
    date: 'Dec 5, 2024',
    category: 'Animation',
  },
  {
    id: 4,
    title: 'Color Theory in Digital Design',
    excerpt: 'Understanding the psychology of color and its impact on user behavior.',
    image: '/images/blog-color.jpg',
    date: 'Nov 28, 2024',
    category: 'Design',
  },
];

const BlogCard = ({ post, index, isVisible }: { post: BlogPost; index: number; isVisible: boolean }) => {
  return (
    <article
      className={`group transition-all duration-700 ${
        isVisible
          ? 'translate-y-0 opacity-100 scale-100'
          : 'translate-y-12 opacity-0 scale-95'
      }`}
      style={{
        transitionDelay: `${index * 120 + 600}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div className="relative overflow-hidden rounded-3xl bg-dark-surface transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 bg-primary/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Date */}
          <div className="flex items-center gap-2 text-white/50 text-sm mb-3">
            <Calendar size={14} />
            {post.date}
          </div>

          <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-white/60 text-sm mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          {/* Read More */}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary text-sm font-medium group/link"
          >
            Read More
            <ArrowRight
              size={16}
              className="group-hover/link:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </article>
  );
};

const Blog = () => {
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

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px]" />
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
              Blog
            </span>
            <h2
              className={`text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mt-4 transition-all duration-600 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '100ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              Latest <span className="gradient-text">Insights</span>
            </h2>
          </div>
          <p
            className={`text-white/60 max-w-md mt-4 lg:mt-0 transition-all duration-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '200ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            Thoughts on design, development, and the ever-evolving world of web technology.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <article
            className={`mb-12 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: '300ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <div className="group grid lg:grid-cols-2 gap-8 glass rounded-3xl overflow-hidden">
              {/* Image */}
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <div
                  className={`transition-all duration-1000 ${
                    isVisible ? 'clip-path-full' : ''
                  }`}
                  style={{
                    clipPath: isVisible
                      ? 'inset(0 0 0 0)'
                      : 'inset(0 100% 0 0)',
                    transition: 'clip-path 1s cubic-bezier(0.16, 1, 0.3, 1)',
                    transitionDelay: '300ms',
                  }}
                >
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-surface/50 lg:block hidden" />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1.5 bg-primary/20 text-primary text-xs font-medium rounded-full">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <Calendar size={14} />
                    {featuredPost.date}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h3>
                
                <p className="text-white/70 mb-6">
                  {featuredPost.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-medium group/link"
                >
                  Read Article
                  <ArrowRight
                    size={18}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          </article>
        )}

        {/* Regular Posts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-16 transition-all duration-500 ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-90'
          }`}
          style={{ transitionDelay: '1000ms', transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}
        >
          <a
            href="#"
            className="btn-outline inline-flex items-center gap-2 group"
          >
            View All Posts
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

export default Blog;
