export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Taskify – Collaborative Task Management Platform",
    category: "Web Design",
    description:
      "Built a Kanban-style task management app using React and TypeScript.",
    image: "/images/project-taskify.png",
    tech: ["React", "Tailwind", "TypeScript"],
    liveUrl: "https://taskify-five-ecru.vercel.app/dashboard",
    githubUrl: "https://github.com/ramadan-alaa",
  },
  {
    id: 2,
    title: "Apple Web",
    category: "Web Design",
    description:
      "Developed a responsive web application using React.js and Tailwind CSS, with smooth and interactive animations powered by GSAP and 3JS.",
    image: "/images/project-apple-web.png",
    tech: ["React", "Tailwind", "GSAP", "3JS"],
    liveUrl: "https://ramadan-alaa.github.io/Apple-web/",
    githubUrl: "https://github.com/ramadan-alaa",
  },
  {
    id: 3,
    title: "Zenvy",
    category: "E-commerce",
    description:
      "Built a scalable e-commerce web application using React and TypeScript, featuring full customer workflows (product browsing, filtering, cart, checkout, and order tracking) alongside an admin dashboard for managingproducts, orders, and customers.",
    image: "/images/project-zenvy.png",
    tech: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://zenvy-omega.vercel.app/",
    githubUrl: "https://github.com/ramadan-alaa",
  },
  {
    id: 4,
    title: "Flow State – Productivity Dashboard",
    category: "Development",
    description:
      "Built a productivity dashboard combining task management, habit tracking, and Pomodoro timer.",
    image: "/images/project-flow-state.png",
    tech: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://flow-state-lemon.vercel.app/",
    githubUrl: "https://github.com/ramadan-alaa",
  },
  {
    id: 5,
    title: "Shopix – Fashion E-Commerce",
    category: "Development",
    description:
      "Developed a modern, responsive e-commerce storefront using React, TypeScript, and Vite, featuring dynamic cart management and reusable component-based architecture.",
    image: "/images/project-shopix.png",
    tech: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://shopix-iota.vercel.app/",
    githubUrl: "https://github.com/ramadan-alaa",
  },
  {
    id: 6,
    title: "Velta",
    category: "Development",
    description:
      "Developed a modern and fully responsive web application with a clean UI/UX, interactive components, smooth animations, and optimized performance. Focused on scalable frontend architecture, reusable components, and seamless user experience across all devices.",
    image: "/images/project-velta.png",
    tech: ["React", "TypeScript", "Tailwind", "Redux Toolkit", "React Query"],
    liveUrl: "https://velta-gray.vercel.app/",
    githubUrl: "https://github.com/ramadan-alaa",
  },
];
