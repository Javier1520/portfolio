// Project Types
export interface Project {
  title: string;
  description: string;
  techStack: string[];
  achievement?: string;
  image: string;
  links: {
    github?: string;
    frontend?: string;
    backend?: string;
    deployed?: string;
  };
  featured: boolean;
}

// Skill Types
export interface Skill {
  name: string;
  icon: React.ReactNode | null;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

// Contact Types
export interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  link: string;
}

// Animation Variants
// This interface extends framer-motion's Variants type
export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    height?: number | string;
  };
  visible: {
    opacity: number;
    y?: number;
    height?: number | string;
    transition?: {
      duration?: number;
      staggerChildren?: number;
    };
  };
  [key: string]: any; // Add index signature for compatibility with framer-motion's Variants
}

// Component Props Types
export interface LayoutProps {
  children: React.ReactNode;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
}
