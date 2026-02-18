import type { ComponentType, SVGProps } from "react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  tags?: string[];
  liveUrl?: string;
  codeUrl: string;
  logo?: string;
  image?: string;
  imageAlt: string;
};

export type SkillGroup = {
  title: string;
  icon: IconComponent;
  items: string[];
};

export type ContactLink = {
  label: string;
  href: string;
  Icon: IconComponent;
};

export type HeroData = {
  eyebrow: string;
  name: string;
  tagline: string;
  resumeUrl: string;
  image: {
    src: string;
    alt: string;
  };
};
