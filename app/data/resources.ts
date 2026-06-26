import {
  BookOpenCheck,
  Brain,
  BriefcaseBusiness,
  Download,
  FileText,
  GraduationCap,
  Lightbulb,
  Users,
  Video,
} from "lucide-react";

export const resourceCategories = [
  {
    title: "Study Guides",
    description: "Exam-focused guides for BJC, BGCSE, SAT, and ACT.",
    href: "/resources/study-guides",
    icon: BookOpenCheck,
  },
  {
    title: "Practice Resources",
    description: "Worksheets, flashcards, formula sheets, and PDFs.",
    href: "/resources/practice",
    icon: FileText,
  },
  {
    title: "Exam Tips",
    description: "Strategies for studying, focus, memory, and confidence.",
    href: "/resources/exam-tips",
    icon: Lightbulb,
  },
  {
    title: "Video Library",
    description: "Free lessons, quick tips, webinars, and tutorials.",
    href: "/resources/videos",
    icon: Video,
  },
  {
    title: "AI Learning Center",
    description: "Learn how to study smarter with AI tools and tutors.",
    href: "/resources/ai-learning",
    icon: Brain,
  },
  {
    title: "Parent Center",
    description: "Resources to help parents support student success.",
    href: "/resources/parents",
    icon: Users,
  },
  {
    title: "Teacher Center",
    description: "Classroom tools, assessments, and teaching resources.",
    href: "/resources/teachers",
    icon: GraduationCap,
  },
  {
    title: "Career & University",
    description: "Scholarships, career planning, resumes, and readiness.",
    href: "/resources/career",
    icon: BriefcaseBusiness,
  },
];

export const featuredResources = [
  {
    title: "BJC Mathematics Study Guide",
    type: "Study Guide",
    href: "/resources/study-guides/bjc-mathematics",
    description:
      "A beginner-friendly guide to help students prepare for BJC Math.",
  },
  {
    title: "BGCSE English Essay Checklist",
    type: "Download",
    href: "/resources/practice/bgcse-essay-checklist",
    description: "A simple checklist to improve essay structure and clarity.",
  },
  {
    title: "SAT 8-Week Study Plan",
    type: "Study Plan",
    href: "/resources/study-guides/sat-study-plan",
    description: "A structured weekly study plan for SAT preparation.",
  },
];

export const popularDownloads = [
  {
    title: "Weekly Study Planner",
    href: "/downloads/weekly-study-planner.pdf",
    icon: Download,
  },
  {
    title: "Math Formula Sheet",
    href: "/downloads/math-formula-sheet.pdf",
    icon: Download,
  },
  {
    title: "Essay Writing Checklist",
    href: "/downloads/essay-checklist.pdf",
    icon: Download,
  },
  {
    title: "Exam Day Checklist",
    href: "/downloads/exam-day-checklist.pdf",
    icon: Download,
  },
];
