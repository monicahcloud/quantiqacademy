// src/components/professional/ProfessionalDevelopmentCatalog.tsx

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Brain,
  BriefcaseBusiness,
  Clock,
  Code2,
  Database,
  LineChart,
  Search,
  Star,
} from "lucide-react";

const courses = [
  {
    title: "Data Analytics Foundations",
    category: "Data",
    image: "/images/courses/data-analytics.png",
    lessons: 32,
    duration: "6 weeks",
    rating: "4.9",
    href: "/courses/data-analytics",
    icon: BarChart3,
  },
  {
    title: "Power BI Dashboard Design",
    category: "Business Intelligence",
    image: "/images/courses/power-bi.png",
    lessons: 28,
    duration: "5 weeks",
    rating: "4.8",
    href: "/courses/power-bi",
    icon: LineChart,
  },
  {
    title: "SQL & Databases",
    category: "Data",
    image: "/images/courses/sql.png",
    lessons: 30,
    duration: "6 weeks",
    rating: "4.8",
    href: "/courses/sql",
    icon: Database,
  },
  {
    title: "AI Literacy for Professionals",
    category: "AI",
    image: "/images/courses/ai-literacy.png",
    lessons: 24,
    duration: "4 weeks",
    rating: "4.9",
    href: "/courses/ai-literacy",
    icon: Brain,
  },
  {
    title: "Python Basics",
    category: "Technology",
    image: "/images/courses/python.png",
    lessons: 36,
    duration: "8 weeks",
    rating: "4.8",
    href: "/courses/python",
    icon: Code2,
  },
  {
    title: "Business Skills",
    category: "Workplace",
    image: "/images/courses/business-skills.png",
    lessons: 20,
    duration: "4 weeks",
    rating: "4.7",
    href: "/courses/business-skills",
    icon: BriefcaseBusiness,
  },
];

export default function ProfessionalDevelopmentCatalog() {
  return (
    <main className="min-h-screen bg-[#f4f6f8] text-[#041f3d]">
      <section className="bg-[#041f3d] px-6 pb-20 pt-36 text-white">
        <div className="mx-auto max-w-8xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
            QuantIQ Academy
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Professional Development
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
            Career-focused learning for students, professionals, teams, and
            organizations. Build practical skills in data, AI, technology,
            business intelligence, and workplace growth.
          </p>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-8xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-xl">
              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                placeholder="Search professional courses"
                className="h-14 w-full rounded-full border border-slate-200 bg-white pl-14 pr-5 text-slate-700 shadow-sm outline-none focus:border-cyan-400"
              />
            </div>

            <p className="text-sm font-bold text-slate-500">
              {courses.length} courses coming soon
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {courses.map((course) => {
              const Icon = course.icon;

              return (
                <Link
                  key={course.title}
                  href={course.href}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden bg-[#041f3d]">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover opacity-90 transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-cyan-400 px-3 py-1 text-xs font-black text-[#041f3d]">
                      {course.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-600">
                      <Icon size={28} />
                    </div>

                    <h3 className="text-2xl font-black leading-tight">
                      {course.title}
                    </h3>

                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600">
                      <span className="flex items-center gap-1">
                        <Star
                          size={16}
                          className="fill-[#FDBF2D] text-[#FDBF2D]"
                        />
                        {course.rating}
                      </span>
                      <span>{course.lessons} lessons</span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {course.duration}
                      </span>
                    </div>

                    <span className="mt-6 inline-flex items-center gap-2 font-bold text-cyan-600">
                      View Course <ArrowRight size={17} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
