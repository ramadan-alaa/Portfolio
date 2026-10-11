export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  overview: string;
  role: string;
  timeline: string;
  image: string;
  tech: string[];
  features: ProjectFeature[];
  challenges: string[];
  solutions: string[];
  metrics: ProjectMetric[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "taskify",
    title: "Taskify – Collaborative Task Management Platform",
    subtitle: "Modern Kanban-style productivity platform with real-time drag-and-drop workflow.",
    category: "Web Application",
    description:
      "Built a Kanban-style task management app using React and TypeScript with fluid drag-and-drop interactions.",
    overview:
      "Taskify is a comprehensive productivity workspace built with React and TypeScript. Inspired by modern agile frameworks, it provides an intuitive Kanban board for managing workflows, priorities, and sprints. The application emphasizes fluid drag-and-drop interactions, zero latency state updates, and clean modular component architecture.",
    role: "Frontend Developer & UI Architect",
    timeline: "3 Weeks",
    image: "/images/project-taskify.png",
    tech: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons", "Context API"],
    features: [
      {
        title: "Kanban Board & Sprints",
        description: "Interactive boards with customizable columns, priority tags, and deadline tracking.",
      },
      {
        title: "Fluid Drag & Drop",
        description: "Smooth drag-and-drop task reordering with optimistic UI updates and zero lag.",
      },
      {
        title: "Advanced Filtering",
        description: "Instant search and multi-criteria filtering by priority, assignees, and tags.",
      },
      {
        title: "Responsive Dashboard",
        description: "Mobile-first responsive interface optimized for desktop, tablet, and mobile workflows.",
      },
    ],
    challenges: [
      "Managing complex nested state across columns and drag events without performance drops.",
      "Ensuring seamless keyboard accessibility and mobile touch gesture support.",
    ],
    solutions: [
      "Implemented centralized state management with TypeScript interfaces for predictable mutations.",
      "Leveraged CSS hardware-accelerated animations and memoized component renders.",
    ],
    metrics: [
      { label: "Performance Score", value: "98%" },
      { label: "Type Safety", value: "100%" },
      { label: "Render Latency", value: "< 16ms" },
    ],
    liveUrl: "https://taskify-five-ecru.vercel.app/dashboard",
    githubUrl: "https://github.com/ramadan-alaa",
  },
  {
    id: 2,
    slug: "apple-web",
    title: "Apple Web – Interactive 3D Showcase",
    subtitle: "Cinematic, interactive product experience powered by Three.js, GSAP, and React.",
    category: "Creative Web Experience",
    description:
      "Developed a responsive web application using React.js and Tailwind CSS, with smooth and interactive animations powered by GSAP and 3JS.",
    overview:
      "An award-winning inspired web experience recreating Apple's signature interactive product presentation. Leveraging Three.js for interactive 3D model rendering and GSAP for fluid scroll-triggered storytelling, the project demonstrates advanced creative frontend engineering, WebGL rendering, and high-performance physics-based motion.",
    role: "Creative Frontend Developer",
    timeline: "4 Weeks",
    image: "/images/project-apple-web.png",
    tech: ["React.js", "Three.js", "GSAP", "Tailwind CSS", "WebGL"],
    features: [
      {
        title: "Interactive 3D Viewport",
        description: "Real-time 360-degree product inspection with custom lighting, materials, and camera controls.",
      },
      {
        title: "Scroll-Driven Storytelling",
        description: "Complex GSAP timelines synchronized seamlessly with user scroll position.",
      },
      {
        title: "Dynamic Video Scrubbing",
        description: "High-resolution video playback synced to scroll behavior for seamless product reveal.",
      },
      {
        title: "Adaptive Performance",
        description: "Automatic FPS detection and dynamic shader downscaling on lower-end devices.",
      },
    ],
    challenges: [
      "Balancing heavy 3D WebGL assets with fast initial load times and smooth 60fps scrolling.",
      "Cross-browser GPU shader discrepancies and mobile battery consumption.",
    ],
    solutions: [
      "Implemented Draco geometry compression and progressive asset streaming.",
      "Fine-tuned requestAnimationFrame render loops with conditional scene rendering.",
    ],
    metrics: [
      { label: "Frame Rate", value: "60 FPS" },
      { label: "Asset Compression", value: "70%" },
      { label: "Mobile Compatibility", value: "100%" },
    ],
    liveUrl: "https://ramadan-alaa.github.io/Apple-web/",
    githubUrl: "https://github.com/ramadan-alaa",
  },
  {
    id: 3,
    slug: "zenvy",
    title: "Zenvy – Enterprise E-Commerce Platform",
    subtitle: "Scalable full-featured e-commerce ecosystem with customer storefront & admin suite.",
    category: "E-Commerce",
    description:
      "Built a scalable e-commerce web application using React and TypeScript, featuring full customer workflows alongside an admin dashboard.",
    overview:
      "Zenvy is an end-to-end e-commerce solution delivering a polished customer shopping journey alongside a robust administration portal. Built with React, TypeScript, and modern CSS, it features dynamic product catalogues, instantaneous facet filtering, persistent cart workflows, and deep sales analytics.",
    role: "Fullstack Frontend Engineer",
    timeline: "5 Weeks",
    image: "/images/project-zenvy.png",
    tech: ["React", "TypeScript", "Tailwind CSS", "Zustand", "REST APIs"],
    features: [
      {
        title: "Dynamic Product Catalog",
        description: "Instant facet filtering, price range sliders, multi-variant selections, and live stock statuses.",
      },
      {
        title: "Seamless Checkout Workflow",
        description: "Multi-step checkout with address validation, coupon verification, and order confirmation.",
      },
      {
        title: "Merchant Admin Suite",
        description: "Comprehensive dashboard for managing inventory, viewing order pipelines, and tracking analytics.",
      },
      {
        title: "Persistent Cart & Wishlist",
        description: "Local storage backed cart synchronization resilient to page reloads and session drops.",
      },
    ],
    challenges: [
      "Handling complex variant matrix (size, color, material) with accurate real-time inventory checks.",
      "Ensuring fast page load times despite rich image galleries and high volume catalogues.",
    ],
    solutions: [
      "Designed normalized client state structures and custom hook abstraction for cart operations.",
      "Integrated responsive image formats and skeleton loaders for instant feedback.",
    ],
    metrics: [
      { label: "Lighthouse Score", value: "96" },
      { label: "Checkout Flow", value: "3 Steps" },
      { label: "Cart Sync", value: "Instant" },
    ],
    liveUrl: "https://zenvy-omega.vercel.app/",
    githubUrl: "https://github.com/ramadan-alaa",
  },
  {
    id: 4,
    slug: "flow-state",
    title: "Flow State – Productivity & Focus Dashboard",
    subtitle: "All-in-one productivity hub integrating Pomodoro timer, habit tracking, and tasks.",
    category: "Productivity SaaS",
    description:
      "Built a productivity dashboard combining task management, habit tracking, and Pomodoro timer.",
    overview:
      "Flow State is engineered to help knowledge workers eliminate distraction and sustain deep work. By uniting custom configurable Pomodoro intervals, habit consistency heatmaps, and priority-driven task boards into a distraction-free dark interface, users gain total clarity over their day.",
    role: "Frontend Developer & UI/UX",
    timeline: "3 Weeks",
    image: "/images/project-flow-state.png",
    tech: ["React", "TypeScript", "Tailwind CSS", "Web Audio API", "LocalStorage"],
    features: [
      {
        title: "Adaptive Pomodoro Engine",
        description: "Configurable work/break timers with audio cues, notifications, and auto-cycle switches.",
      },
      {
        title: "Habit Streak Visualizer",
        description: "GitHub-style heatmaps and weekly streak tracking encouraging daily consistency.",
      },
      {
        title: "Focus Mode Atmosphere",
        description: "Distraction-free fullscreen mode with minimalist aesthetics and ambient soundscapes.",
      },
      {
        title: "Productivity Analytics",
        description: "Insightful breakdown of deep work hours logged per category and day.",
      },
    ],
    challenges: [
      "Ensuring timer accuracy across background tab throttling in modern browsers.",
      "Building accessible audio cues and persistent user preferences.",
    ],
    solutions: [
      "Utilized Web Workers and delta timestamp calculations to prevent browser timer drift.",
      "Cached user preferences and analytics offline using LocalStorage and IndexedDB.",
    ],
    metrics: [
      { label: "Timer Accuracy", value: "100%" },
      { label: "Offline First", value: "Ready" },
      { label: "User Retention", value: "High" },
    ],
    liveUrl: "https://flow-state-lemon.vercel.app/",
    githubUrl: "https://github.com/ramadan-alaa",
  },
  {
    id: 5,
    slug: "shopix",
    title: "Shopix – Fashion E-Commerce Storefront",
    subtitle: "Modern, high-conversion apparel storefront designed for fluid browsing and speed.",
    category: "E-Commerce",
    description:
      "Developed a modern, responsive e-commerce storefront using React, TypeScript, and Vite, featuring dynamic cart management and reusable component-based architecture.",
    overview:
      "Shopix redefines online fashion shopping through editorial typography, rapid search, and smooth micro-animations. Developed with React, TypeScript, and Vite, the platform emphasizes lightning-fast page transitions, quick-view modals, and frictionless mobile navigation.",
    role: "Frontend Engineer",
    timeline: "3 Weeks",
    image: "/images/project-shopix.png",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide Icons"],
    features: [
      {
        title: "Editorial Lookbook UI",
        description: "High-fashion grid layouts with hover zoom and quick product preview modals.",
      },
      {
        title: "Instant Live Search",
        description: "Debounced real-time search with instant category recommendations and auto-suggest.",
      },
      {
        title: "Interactive Cart Drawer",
        description: "Slide-out cart drawer with live subtotal calculation, free shipping thresholds, and fast upsells.",
      },
      {
        title: "Mobile-First Touch Gestures",
        description: "Swipeable product galleries and sticky mobile buy buttons for peak conversion.",
      },
    ],
    challenges: [
      "Optimizing high-density photography without causing layout shifts or bandwidth hogging.",
      "Crafting a slide-out drawer that remains butter-smooth on mobile devices.",
    ],
    solutions: [
      "Implemented aspect-ratio CSS placeholders and progressive JPEG/WebP pipelines.",
      "Employed CSS transform translations and hardware-accelerated transitions.",
    ],
    metrics: [
      { label: "Time to Interactive", value: "0.8s" },
      { label: "Mobile Score", value: "99" },
      { label: "Cumulative Layout Shift", value: "0.00" },
    ],
    liveUrl: "https://shopix-iota.vercel.app/",
    githubUrl: "https://github.com/ramadan-alaa",
  },
  {
    id: 6,
    slug: "velta",
    title: "Velta – Modern Web Application & SaaS Platform",
    subtitle: "Enterprise-grade web application featuring Redux Toolkit, React Query, and modular UI.",
    category: "SaaS Platform",
    description:
      "Developed a modern and fully responsive web application with a clean UI/UX, interactive components, smooth animations, and optimized performance.",
    overview:
      "Velta represents a modern enterprise frontend architecture featuring comprehensive asynchronous data synchronization, state management with Redux Toolkit, and React Query caching. Engineered for scale, it handles real-time data visualisations, complex forms, and multi-tenant workflows with zero compromise on usability.",
    role: "Lead Frontend Developer",
    timeline: "4 Weeks",
    image: "/images/project-velta.png",
    tech: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "React Query"],
    features: [
      {
        title: "Server State Sync & Caching",
        description: "React Query background refetching, query invalidation, and optimistic mutations.",
      },
      {
        title: "Centralized Global Store",
        description: "Redux Toolkit architecture with typed slice selectors and middleware logging.",
      },
      {
        title: "Interactive Data Visualizations",
        description: "Responsive chart widgets and trend monitors depicting operational KPIs.",
      },
      {
        title: "Type-Safe Form Engine",
        description: "Dynamic validated forms with granular schema verification and immediate field feedback.",
      },
    ],
    challenges: [
      "Synchronizing complex server responses with client cache without redundant re-fetching.",
      "Maintaining modular codebase consistency across dozens of interconnected screens.",
    ],
    solutions: [
      "Structured unified API hooks with React Query caching layers and RTK global state.",
      "Implemented atomic design components with strict TypeScript interface enforcement.",
    ],
    metrics: [
      { label: "Network Optimization", value: "65%" },
      { label: "Type Coverage", value: "100%" },
      { label: "Lighthouse Performance", value: "97" },
    ],
    liveUrl: "https://velta-gray.vercel.app/",
    githubUrl: "https://github.com/ramadan-alaa",
  },
];
