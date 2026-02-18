import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function CodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M9 6L3.5 12 9 18M15 6l5.5 6-5.5 6"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M12 4l8 4-8 4-8-4 8-4z"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M4 12l8 4 8-4M4 16l8 4 8-4"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DatabaseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <ellipse cx="12" cy="6" rx="7" ry="3" strokeWidth="1.6" />
      <path
        d="M5 6v8c0 1.7 3.1 3 7 3s7-1.3 7-3V6"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="8" strokeWidth="1.6" />
      <path
        d="M4 12h16M12 4c3 3 3 13 0 16M12 4c-3 3-3 13 0 16"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="6" y="10" width="12" height="9" rx="2" strokeWidth="1.6" />
      <path d="M9 10V7a3 3 0 016 0v3" strokeWidth="1.6" />
    </svg>
  );
}

export function BeakerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M9 4h6M10 4v5l-4 7a2 2 0 001.7 3h8.6a2 2 0 001.7-3l-4-7V4"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 14h6" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function CloudIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M7 18h10a4 4 0 000-8 5 5 0 00-9.7 1.5A3.5 3.5 0 007 18z"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="8" cy="9" r="3" strokeWidth="1.6" />
      <circle cx="16" cy="10" r="2.5" strokeWidth="1.6" />
      <path
        d="M3.5 18a4.5 4.5 0 019 0M13.5 18a4 4 0 016.5 0"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="4" y="6" width="16" height="12" rx="2" strokeWidth="1.6" />
      <path
        d="M4 8l8 5 8-5"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6 9H3v12h3V9zM4.5 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM21 21h-3v-6.3c0-1.6-.6-2.6-2-2.6-1 0-1.6.7-1.9 1.4-.1.3-.1.7-.1 1.1V21h-3V9h3v1.6C14.7 9.6 15.7 9 17.2 9c2.3 0 3.8 1.5 3.8 4.7V21z" />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.5 2 2 6.6 2 12.3c0 4.5 2.9 8.4 6.9 9.8.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1-1.4-1-1.4-.8-.6.1-.6.1-.6.9.1 1.4 1 1.4 1 .8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.2-2.2-.3-4.5-1.1-4.5-5.1 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.7 1 .8-.2 1.7-.3 2.6-.3.9 0 1.8.1 2.6.3 1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.6 1 2.7 0 4-2.3 4.8-4.5 5.1.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4-1.4 6.9-5.3 6.9-9.8C22 6.6 17.5 2 12 2z" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M8 3h8a2 2 0 012 2v14a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2z"
        strokeWidth="1.6"
      />
      <path d="M11 17h2" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
