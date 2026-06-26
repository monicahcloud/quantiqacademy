import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Brain,
  BriefcaseBusiness,
  Code2,
  Database,
  LineChart,
  Sparkles,
} from "lucide-react";

const professionalCourses = [
  {
    title: "Data Analytics",
    description: "Clean, analyze, and communicate data with confidence.",
    icon: BarChart3,
  },
  {
    title: "Power BI",
    description: "Build dashboards that turn raw data into decisions.",
    icon: LineChart,
  },
  {
    title: "SQL & Databases",
    description: "Query, organize, and manage data for real work.",
    icon: Database,
  },
  {
    title: "AI Literacy",
    description: "Use AI tools, prompts, automation, and ethics wisely.",
    icon: Brain,
  },
  {
    title: "Python Basics",
    description: "Learn Python for automation, analytics, and problem-solving.",
    icon: Code2,
  },
  {
    title: "Business Skills",
    description:
      "Strengthen leadership, communication, and workplace readiness.",
    icon: BriefcaseBusiness,
  },
];

export default function ProfessionalDevelopmentSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7fafc] px-6 py-28 px-20 text-[#041f3d]">
      <div className="absolute left-[-160px] top-16 h-96 w-96 rounded-full bg-cyan-400/20 blur-[140px]" />
      <div className="absolute bottom-0 right-[-180px] h-96 w-96 rounded-full bg-[#FDBF2D]/20 blur-[140px]" />

      <div className="relative mx-auto max-w-8xl">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-600 shadow-sm">
              <Sparkles size={16} />
              Coming Next
            </div>

            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-600">
              Professional Development
            </p>

            <h2 className="mt-4 max-w-2xl text-5xl font-black leading-[1.05] tracking-tight md:text-6xl">
              Build the skills the future demands.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              QuantIQ Academy will expand beyond test prep into practical,
              career-focused learning for students, professionals, teams, and
              organizations.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/courses"
                className="inline-flex items-center gap-3 rounded-full bg-[#041f3d] px-7 py-4 font-bold text-white shadow-xl shadow-[#041f3d]/20 transition hover:-translate-y-1 hover:bg-[#082b57]">
                Explore Courses
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-7 py-4 font-bold text-[#041f3d] transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-600">
                Corporate Training
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-[2rem] bg-cyan-400/20 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-[2rem] bg-[#FDBF2D]/20 blur-2xl" />

            <div className="relative rounded-[2.5rem] border border-white/70 bg-white/80 p-5 shadow-2xl backdrop-blur-xl">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {professionalCourses.map((course) => {
                  const Icon = course.icon;

                  return (
                    <div
                      key={course.title}
                      className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-xl">
                      <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-[#041f3d] text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-[#041f3d]">
                        <Icon size={26} />
                      </div>

                      <h3 className="text-xl font-black">{course.title}</h3>

                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {course.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="absolute -right-4 top-10 hidden rounded-2xl bg-[#FDBF2D] px-5 py-3 text-sm font-black text-[#041f3d] shadow-xl lg:block">
              Workforce Ready
            </div>

            <div className="absolute -left-10 bottom-5 hidden rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-black text-[#041f3d] shadow-xl lg:block">
              AI-Powered Learning
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
