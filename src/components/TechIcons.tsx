import type { SVGProps } from "react";

export const NextJsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 180 180" fill="none" {...props}>
    <mask
      id="next-mask"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="180"
      height="180"
      style={{ maskType: "alpha" }}
    >
      <circle cx="90" cy="90" r="90" fill="black" />
    </mask>
    <g mask="url(#next-mask)">
      <circle cx="90" cy="90" r="90" fill="#000" stroke="#333" strokeWidth="6" />
      <path
        d="M149.508 157.438L69.147 54H54V125.979H66.974V69.8987L139.99 164.845C143.385 162.641 146.568 160.158 149.508 157.438Z"
        fill="url(#next-grad)"
      />
      <rect x="115" y="54" width="13" height="72" fill="url(#next-grad2)" />
    </g>
    <defs>
      <linearGradient
        id="next-grad"
        x1="109"
        y1="116.5"
        x2="144.5"
        y2="160.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="next-grad2"
        x1="121"
        y1="54"
        x2="120.799"
        y2="106.875"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export const ReactIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" {...props}>
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const TypeScriptIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 128 128" fill="none" {...props}>
    <rect width="128" height="128" rx="22" fill="#3178C6" />
    <path
      fill="#FFF"
      d="M37.8 77.8h13.2V115h14.8V77.8H79V65.4H37.8v12.4zm44.9 25.1c3.9 4 9.1 6.3 15.3 6.3 5.4 0 9.7-1.5 12.8-4.4 3.1-2.9 4.6-6.6 4.6-11.2 0-3.6-1-6.6-3.1-8.9-2.1-2.3-5.5-4.4-10.2-6.2l-4.5-1.7c-4-1.5-6.9-3.1-8.6-4.8-1.7-1.7-2.6-3.8-2.6-6.4 0-3.1 1.2-5.7 3.5-7.7 2.4-2 5.6-3 9.7-3 3.8 0 7.2.9 10.2 2.8 3 1.9 5.2 4.6 6.5 8.2l-12.2 5.1c-.8-2-1.9-3.5-3.3-4.4s-3.2-1.4-5.2-1.4c-2.4 0-4.3.6-5.8 1.8s-2.2 2.7-2.2 4.6c0 1.7.7 3.1 2.2 4.2 1.5 1.1 3.9 2.1 7.2 3.3l4.6 1.7c6.2 2.3 10.6 5.1 13.3 8.3 2.6 3.2 4 7.2 4 11.9 0 5.8-2.1 10.6-6.2 14.3-4.1 3.7-9.8 5.6-17.1 5.6-6.5 0-12.1-1.6-16.7-4.8-4.7-3.2-7.8-7.7-9.3-13.4l12.4-4.8c.7 2.6 2 4.7 3.8 6.4z"
    />
  </svg>
);

export const JavaScriptIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 128 128" fill="none" {...props}>
    <rect width="128" height="128" rx="22" fill="#F7DF1E" />
    <path
      fill="#000"
      d="M38.4 99.8c1.8 3.1 4.4 5.4 8.7 5.4 4.5 0 7.3-2.3 7.3-8.2V58.7h13.9v38.5c0 13.4-7.8 19.5-20.1 19.5-9.8 0-16.1-5.1-19.1-11.8l9.3-5.1zm46.5 14.4c6.3 3.6 14.3 5.9 22.3 5.9 12.6 0 20.6-6.4 20.6-16.3 0-9.6-6.9-14-16.6-18.1l-4.2-1.8c-6.1-2.6-9.6-4.9-9.6-9.2 0-3.8 3.3-6.6 8.5-6.6 4.9 0 8.7 1.7 11.2 4.1l6.7-9.5c-4.4-4-10.7-6.2-17.7-6.2-11.8 0-19.5 6.9-19.5 16.5 0 9.2 6.2 13.8 15.6 17.7l4.3 1.8c6.6 2.8 10.7 5.4 10.7 10.2 0 4.6-4.1 7.4-10.2 7.4-6.3 0-11.3-2.5-14.8-5.7l-7.2 9.9z"
    />
  </svg>
);

export const TailwindIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="#06B6D4" {...props}>
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
  </svg>
);

export const ReduxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#764ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16.5 9.4 7.55 4.24a3 3 0 0 0-4.1 1.1 3 3 0 0 0 1.1 4.1L6 10.3" />
    <path d="M7.5 14.6l8.95 5.16a3 3 0 0 0 4.1-1.1 3 3 0 0 0-1.1-4.1L18 13.7" />
    <circle cx="12" cy="12" r="3" fill="#764ABC" />
  </svg>
);

export const Html5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="#E34F26" {...props}>
    <path d="M2.5 1.5h19l-1.7 19.3-7.8 2.2-7.8-2.2L2.5 1.5zm15.4 4.5H6.1l.4 3.7h10.9l-.4 4.3-4.5 1.2-4.5-1.2-.3-2.6H4.2l.5 5.5 7.3 2 7.3-2 1-10.9z" />
  </svg>
);

export const Css3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="#1572B6" {...props}>
    <path d="M2.5 1.5h19l-1.7 19.3-7.8 2.2-7.8-2.2L2.5 1.5zm15.4 4.5H6.1l.4 3.7h10.9l-.4 4.3-4.5 1.2-4.5-1.2-.3-2.6H4.2l.5 5.5 7.3 2 7.3-2 1-10.9z" />
  </svg>
);

export const GitIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="#F05032" {...props}>
    <path d="M21.6 10.9l-8.5-8.5a1.8 1.8 0 0 0-2.5 0L8.7 4.3l3.2 3.2a2.1 2.1 0 0 1 2.6 2.6l3 3a2.1 2.1 0 1 1-1.3 1.3l-2.8-2.8v4.5a2.1 2.1 0 1 1-1.8 0V11a2.1 2.1 0 0 1-1.1-2.7L7.3 5.1 2.4 10a1.8 1.8 0 0 0 0 2.5l8.5 8.5a1.8 1.8 0 0 0 2.5 0l8.2-8.2a1.8 1.8 0 0 0 0-2.5z" />
  </svg>
);

export const ApiIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
    <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />
    <path d="M14 6h4" />
    <path d="M14 18h4" />
  </svg>
);

export const ResponsiveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#8751FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="16" height="10" x="2" y="3" rx="2" />
    <rect width="8" height="12" x="14" y="9" rx="2" />
  </svg>
);

export const ViteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M21.8 3.5L12.7 19.8a.9.9 0 0 1-1.6 0L2.2 3.5a.9.9 0 0 1 .9-1.3l9 1.5 8.8-1.5a.9.9 0 0 1 .9 1.3z"
      fill="url(#vite-grad)"
    />
    <path d="M14.5 2.2L6.8 3.6 11.5 13l2.8-8.5.2-2.3z" fill="#FFD62E" />
    <defs>
      <linearGradient id="vite-grad" x1="2" y1="2" x2="22" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#41D1FF" />
        <stop offset="1" stopColor="#BD34FE" />
      </linearGradient>
    </defs>
  </svg>
);
