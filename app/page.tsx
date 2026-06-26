// src/app/page.tsx

import Link from "next/link";
import { ArrowRight, BookOpenCheck, Brain, BarChart3 } from "lucide-react";
import { testPrepPrograms } from "@/app/data/site";
import Hero from "@/components/hero/Hero";
import TestPrepPrograms from "@/components/landingpage/TestPrepPrograms";
import ProfessionalDevelopmentSection from "@/components/landingpage/ProfessionalDevelopmentSection";
import AiLearningSection from "@/components/landingpage/AILearningSection";
import StudentSuccessSection from "@/components/landingpage/StudentSuccessSection";
import Pricing from "@/components/landingpage/Pricing";
import ContactSection from "@/components/layout/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TestPrepPrograms />
      <ProfessionalDevelopmentSection />
      <AiLearningSection />
      <StudentSuccessSection />
      <Pricing />
      <ContactSection />
    </>
  );
}
