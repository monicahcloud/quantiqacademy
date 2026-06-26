export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { CourseLevel } from "@/lib/generated/prisma/client";
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

function getCourseHref(course: {
  exam: string;
  subject: string;
  slug: string;
}) {
  const exam = course.exam.toLowerCase();
  const subject = course.subject.toLowerCase().replaceAll(" ", "-");

  return `/test-prep/${exam}/${subject}`;
}

function getValidLevel(level?: string): CourseLevel | undefined {
  if (!level) return undefined;

  return Object.values(CourseLevel).includes(level as CourseLevel)
    ? (level as CourseLevel)
    : undefined;
}

export default async function TestPrepPage({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
    exam?: string;
    subject?: string;
    level?: string;
  }>;
}) {
  const params = await searchParams;

  const q = params?.q?.trim() || "";
  const selectedExam = params?.exam?.toUpperCase() || "";
  const selectedSubject = params?.subject || "";
  const selectedLevel = getValidLevel(params?.level);

  const allCourseRecords = await prisma.course.findMany({
    where: { isPublished: true },
    include: {
      modules: {
        include: {
          lessons: true,
        },
      },
    },
    orderBy: { title: "asc" },
  });

  const courses = allCourseRecords.filter((course) => {
    const matchesExam = selectedExam
      ? course.exam.toUpperCase() === selectedExam
      : true;

    const matchesSubject = selectedSubject
      ? course.subject.toLowerCase() === selectedSubject.toLowerCase()
      : true;

    const matchesLevel = selectedLevel ? course.level === selectedLevel : true;

    const matchesSearch = q
      ? `${course.title} ${course.description ?? ""} ${course.exam} ${course.subject}`
          .toLowerCase()
          .includes(q.toLowerCase())
      : true;

    return matchesExam && matchesSubject && matchesLevel && matchesSearch;
  });

  const exams = [
    ...new Set(allCourseRecords.map((course) => course.exam.toUpperCase())),
  ];

  const subjects = [
    ...new Set(allCourseRecords.map((course) => course.subject)),
  ];

  const levels = [...new Set(allCourseRecords.map((course) => course.level))];

  const currentParams = {
    q,
    exam: selectedExam,
    subject: selectedSubject,
    level: selectedLevel,
  };

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
              <Link
                href="/test-prep"
                className="rounded-full bg-cyan-400 px-5 py-2 text-[#041f3d]">
                All Courses
              </Link>

              <span className="px-5 py-2 text-white/70">In Progress</span>
              <span className="px-5 py-2 text-white/70">Completed</span>
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

              <FilterGroup
                title="Course Type"
                paramName="exam"
                items={exams}
                currentParams={currentParams}
              />

              <FilterGroup
                title="Subject"
                paramName="subject"
                items={subjects}
                currentParams={currentParams}
              />

              <FilterGroup
                title="Level"
                paramName="level"
                items={levels}
                currentParams={currentParams}
              />

              <Link
                href="/test-prep"
                className="mt-4 block rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-black text-slate-600 transition hover:border-cyan-400 hover:text-cyan-600">
                Clear Filters
              </Link>
            </div>
          </aside>

          <div>
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <form className="relative w-full md:max-w-xl">
                <Search
                  size={20}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  name="q"
                  defaultValue={q}
                  placeholder="Search courses"
                  className="h-14 w-full rounded-full border border-slate-200 bg-white pl-14 pr-28 text-slate-700 shadow-sm outline-none focus:border-cyan-400"
                />

                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-cyan-400 px-5 py-2 text-sm font-black text-[#041f3d]">
                  Search
                </button>
              </form>

              <p className="text-sm font-bold text-slate-500">
                {courses.length} courses available
              </p>
            </div>

            {courses.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
                <h2 className="text-2xl font-black">No courses found</h2>
                <p className="mt-3 text-slate-600">
                  Try clearing your filters or searching another subject.
                </p>
              </div>
            ) : (
              <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                {courses.map((course) => {
                  const lessonCount =
                    course.lessonCount ||
                    course.modules.reduce(
                      (total, module) => total + module.lessons.length,
                      0,
                    );

                  return (
                    <Link
                      key={course.id}
                      href={getCourseHref(course)}
                      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                      <div className="relative h-48 overflow-hidden">
                        {course.image ? (
                          <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                            className="object-cover transition duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="h-full w-full bg-[#041f3d]" />
                        )}

                        <div className="absolute left-4 top-4 rounded-full bg-cyan-400 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#041f3d]">
                          {course.exam.toUpperCase()}
                        </div>
                      </div>

                      <div className="p-6">
                        <p className="text-sm font-bold uppercase tracking-wide text-cyan-600">
                          {course.subject}
                        </p>

                        <h3 className="mt-2 text-2xl font-black leading-tight">
                          {course.title}
                        </h3>

                        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600">
                          <span className="flex items-center gap-1">
                            <Star
                              size={16}
                              className="fill-[#FDBF2D] text-[#FDBF2D]"
                            />
                            {course.rating || "New"}
                          </span>

                          <span className="flex items-center gap-1">
                            <BookOpenCheck size={16} />
                            {lessonCount} lessons
                          </span>

                          <span className="flex items-center gap-1">
                            <Clock size={16} />
                            {course.duration || "Self-paced"}
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
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function FilterGroup({
  title,
  paramName,
  items,
  currentParams,
}: {
  title: string;
  paramName: string;
  items: string[];
  currentParams: {
    q?: string;
    exam?: string;
    subject?: string;
    level?: string;
  };
}) {
  function buildHref(value: string) {
    const params = new URLSearchParams();

    if (currentParams.q) params.set("q", currentParams.q);
    if (currentParams.exam) params.set("exam", currentParams.exam);
    if (currentParams.subject) params.set("subject", currentParams.subject);
    if (currentParams.level) params.set("level", currentParams.level);

    params.set(paramName, value);

    return `/test-prep?${params.toString()}`;
  }

  return (
    <div className="border-t border-slate-100 py-5 first:border-t-0 first:pt-0">
      <h3 className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-slate-500">
        {title}
      </h3>

      <div className="space-y-2">
        {items.map((item) => {
          const isActive =
            currentParams[paramName as keyof typeof currentParams] === item;

          return (
            <Link
              key={item}
              href={buildHref(item)}
              className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                isActive
                  ? "bg-cyan-400 text-[#041f3d]"
                  : "bg-slate-100 text-slate-600 hover:bg-cyan-400 hover:text-[#041f3d]"
              }`}>
              {formatFilterLabel(item)}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function formatFilterLabel(value: string) {
  switch (value.toUpperCase()) {
    case "BJC":
    case "BGCSE":
    case "SAT":
    case "ACT":
      return value.toUpperCase();

    default:
      return value.replaceAll("_", " ");
  }
}
