// src/app/data/site.ts

import { BookOpen, Building2, GraduationCap, TrendingUp } from "lucide-react";
export const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Test Prep",
    href: "/test-prep",
    subLinks: [
      {
        label: "BJC",
        href: "/test-prep/bjc",
      },
      {
        label: "BGCSE",
        href: "/test-prep/bgcse",
      },
      {
        label: "SAT",
        href: "/test-prep/sat",
      },
      {
        label: "ACT",
        href: "/test-prep/act",
      },
    ],
  },
  {
    label: "Professional Development",
    href: "/professional-development",
    subLinks: [
      {
        label: "Data Analytics",
        href: "/courses/data-analytics",
      },
      {
        label: "Power BI",
        href: "/courses/power-bi",
      },
      {
        label: "SQL",
        href: "/courses/sql",
      },
      {
        label: "Python",
        href: "/courses/python",
      },
      {
        label: "AI Literacy",
        href: "/courses/ai-literacy",
      },
      {
        label: "Business Skills",
        href: "/courses/business-skills",
      },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "About",
    href: "/about",
  },
];

export const testPrepPrograms = [
  {
    title: "BJC Prep",
    description: "Structured preparation for Bahamas Junior Certificate exams.",
    href: "/test-prep/bjc",
    image: "/images/bjc.png",
    icon: Building2,
    accent: "teal",
  },
  {
    title: "BGCSE Prep",
    description: "Subject-focused preparation for BGCSE success.",
    href: "/test-prep/bgcse",
    image: "/images/bgcse.png",
    icon: BookOpen,
    accent: "gold",
  },
  {
    title: "SAT Prep",
    description: "Personalized SAT preparation with practice and analytics.",
    href: "/test-prep/sat",
    image: "/images/sat.png",
    icon: GraduationCap,
    accent: "blue",
  },
  {
    title: "ACT Prep",
    description: "ACT readiness support with lessons, quizzes, and mock exams.",
    href: "/test-prep/act",
    image: "/images/act.png",
    icon: TrendingUp,
    accent: "purple",
  },
];
