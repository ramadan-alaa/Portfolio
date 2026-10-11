import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const [showButton, setShowButton] = useState(false);

  // Scroll to top on route change (or to hash anchor)
  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  // Show floating button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-dark-surface/80 backdrop-blur-xl border border-white/10 text-white/80 hover:text-white hover:border-primary/50 hover:bg-primary/20 shadow-lg hover:shadow-[0_0_20px_rgba(135,81,255,0.4)] transition-all duration-300 group ${
        showButton
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-4 scale-75 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" />
    </button>
  );
};

export default ScrollToTop;
