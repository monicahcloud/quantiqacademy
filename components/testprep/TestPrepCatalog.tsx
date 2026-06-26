import {
  Search,
  SlidersHorizontal,
  Star,
  Clock,
  BookOpenCheck,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const filters = {
  exams: ["BJC", "BGCSE", "SAT", "ACT"],
  subjects: ["Mathematics", "English", "Science", "Social Studies", "Writing"],
  levels: ["Beginner", "Intermediate", "Advanced", "Exam Ready"],
};

const courses = [
  {
    title: "BJC Mathematics Prep",
    exam: "BJC",
    subject: "Mathematics",
    image: "/images/bjc.png",
    lessons: 42,
    duration: "8 weeks",
    rating: "4.9",
    href: "/test-prep/bjc/mathematics",
  },
  {
    title: "BJC English Language Prep",
    exam: "BJC",
    subject: "English",
    image: "/images/bjc.png",
    lessons: 36,
    duration: "6 weeks",
    rating: "4.8",
    href: "/test-prep/bjc/english",
  },
  {
    title: "BGCSE Mathematics Prep",
    exam: "BGCSE",
    subject: "Mathematics",
    image: "/images/bgcse.png",
    lessons: 58,
    duration: "10 weeks",
    rating: "4.9",
    href: "/test-prep/bgcse/mathematics",
  },
  {
    title: "BGCSE English Language Prep",
    exam: "BGCSE",
    subject: "English",
    image: "/images/bgcse.png",
    lessons: 44,
    duration: "8 weeks",
    rating: "4.8",
    href: "/test-prep/bgcse/english",
  },
  {
    title: "SAT Reading & Writing",
    exam: "SAT",
    subject: "Reading",
    image: "/images/sat.png",
    lessons: 40,
    duration: "7 weeks",
    rating: "4.9",
    href: "/test-prep/sat/reading-writing",
  },
  {
    title: "ACT Complete Prep",
    exam: "ACT",
    subject: "Complete Exam",
    image: "/images/act.png",
    lessons: 62,
    duration: "10 weeks",
    rating: "4.9",
    href: "/test-prep/act/complete",
  },
];

export default function TestPrepCatalog() {
  return (
    <main className="min-h-screen bg-[#f4f6f8] text-[#041f3d]">
      <section className="border-b border-slate-200 bg-white px-6 pt-32">
        <div className="mx-auto max-w-[1500px] pb-10">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-500">
            QuantIQ Academy
          </p>

          <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h1 className="text-5xl font-black tracking-tight md:text-6xl">
                Test Prep Catalog
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Browse exam prep courses for BJC, BGCSE, SAT, and ACT. Choose a
                subject, follow a guided path, practice, and track your
                progress.
              </p>
            </div>

            <div className="flex rounded-full bg-[#041f3d] p-1 text-sm font-bold text-white">
              <button className="rounded-full bg-cyan-400 px-5 py-2 text-[#041f3d]">
                All Courses
              </button>
              <button className="px-5 py-2 text-white/70">In Progress</button>
              <button className="px-5 py-2 text-white/70">Completed</button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-32 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <SlidersHorizontal size={20} className="text-cyan-500" />
                <h2 className="text-lg font-black">Filter by</h2>
              </div>

              <FilterGroup title="Exam" items={filters.exams} />
              <FilterGroup title="Subject" items={filters.subjects} />
              <FilterGroup title="Level" items={filters.levels} />
            </div>
          </aside>

          <div>
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="relative w-full md:max-w-xl">
                <Search
                  size={20}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  placeholder="Search courses"
                  className="h-14 w-full rounded-full border border-slate-200 bg-white pl-14 pr-5 text-slate-700 shadow-sm outline-none focus:border-cyan-400"
                />
              </div>

              <p className="text-sm font-bold text-slate-500">
                {courses.length} courses available
              </p>
            </div>

            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {courses.map((course) => (
                <Link
                  key={course.title}
                  href={course.href}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-cyan-400 px-3 py-1 text-xs font-black text-[#041f3d]">
                      {course.exam}
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-sm font-bold uppercase tracking-wide text-cyan-600">
                      {course.subject}
                    </p>

                    <h3 className="mt-2 text-2xl font-black leading-tight">
                      {course.title}
                    </h3>

                    <div className="mt-4 flex items-center gap-4 text-sm text-slate-600">
                      <span className="flex items-center gap-1">
                        <Star
                          size={16}
                          className="fill-[#FDBF2D] text-[#FDBF2D]"
                        />
                        {course.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpenCheck size={16} />
                        {course.lessons} lessons
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {course.duration}
                      </span>
                    </div>

                    <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-[18%] rounded-full bg-cyan-400" />
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="font-bold text-cyan-600">
                        View Course
                      </span>
                      <GraduationCap size={22} className="text-[#041f3d]" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FilterGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border-t border-slate-100 py-5 first:border-t-0 first:pt-0">
      <h3 className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-slate-500">
        {title}
      </h3>

      <div className="space-y-2">
        {items.map((item) => (
          <button
            key={item}
            className="block w-full rounded-xl bg-slate-100 px-4 py-3 text-left text-sm font-semibold text-slate-600 transition hover:bg-cyan-400 hover:text-[#041f3d]">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
