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
    githubUrl: "#",
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
    githubUrl: "#",
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
    githubUrl: "#",
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
    githubUrl: "#",
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
    githubUrl: "#",
  },
];
