import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  Brain,
  CheckCircle2,
  Clock,
  Lock,
  PlayCircle,
  Star,
} from "lucide-react";
import { prisma } from "@/lib/prisma";
import EnrollButton from "@/components/courses/EnrollButton";

export default async function BJCMathematicsPage() {
  const { userId } = await auth();

  const user = userId
    ? await prisma.user.findUnique({
        where: { clerkId: userId },
      })
    : null;

  const course = await prisma.course.findUnique({
    where: { slug: "bjc-mathematics-prep" },
    include: {
      modules: {
        orderBy: { order: "asc" },
        include: {
          lessons: {
            orderBy: { order: "asc" },
          },
        },
      },
      enrollments: user
        ? {
            where: { userId: user.id },
          }
        : false,
    },
  });

  if (!course) {
    return (
      <main className="min-h-screen bg-[#f7fafc] px-6 py-32 text-[#041f3d]">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-10 text-center shadow-sm">
          <h1 className="text-4xl font-black">Course not found</h1>
          <p className="mt-4 text-slate-600">
            Seed your database first, then refresh this page.
          </p>
        </div>
      </main>
    );
  }

  const isEnrolled = Boolean(course.enrollments?.length);
  const lessonCount = course.modules.reduce(
    (total, module) => total + module.lessons.length,
    0,
  );

  return (
    <main className="min-h-screen bg-[#f7fafc] text-[#041f3d]">
      <section className="relative overflow-hidden bg-[#041f3d] px-6 pb-20 pt-36 text-white">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-cyan-400/20 blur-[140px]" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#FDBF2D]/15 blur-[140px]" />

        <div className="relative mx-auto grid max-w-8xl gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
              BJC Test Prep
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
              {course.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              {course.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm font-bold text-white/80">
              <span className="flex items-center gap-2">
                <Star className="fill-[#FDBF2D] text-[#FDBF2D]" size={18} />
                4.9 rating
              </span>
              <span className="flex items-center gap-2">
                <BookOpenCheck size={18} />
                {lessonCount} lessons
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} />
                Self-paced
              </span>
              <span className="flex items-center gap-2">
                <Award size={18} />
                Certificate included
              </span>
              <span className="flex items-center gap-2">
                <Brain size={18} />
                AI tutor support
              </span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-2xl backdrop-blur-xl">
            <h2 className="text-2xl font-black">Start this course</h2>
            <p className="mt-3 leading-7 text-white/70">
              Preview the first lessons free. Enroll to save this course to your
              dashboard.
            </p>

            {isEnrolled ? (
              <Link
                href={`/learn/lesson/${course.modules[0]?.lessons[0]?.id}`}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FDBF2D] px-6 py-4 font-black text-[#041f3d]">
                Continue Learning
                <ArrowRight size={18} />
              </Link>
            ) : (
              <EnrollButton courseId={course.id} />
            )}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-8xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-600">
              What You’ll Learn
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Build confidence in core BJC Mathematics.
            </h2>

            <div className="mt-8 grid gap-4">
              {[
                "Number operations and problem-solving",
                "Algebra foundations",
                "Geometry and measurement",
                "Statistics and data interpretation",
                "Exam strategies and practice",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl bg-white p-5 shadow-sm">
                  <CheckCircle2 className="text-cyan-500" size={22} />
                  <p className="font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-600">
              Course Curriculum
            </p>

            <h2 className="mt-3 text-3xl font-black">Modules & Lessons</h2>

            <div className="mt-8 space-y-6">
              {course.modules.map((module) => (
                <div key={module.id} className="rounded-3xl bg-slate-50 p-5">
                  <h3 className="text-xl font-black">{module.title}</h3>

                  <div className="mt-4 space-y-3">
                    {module.lessons.map((lesson) => {
                      const locked = !lesson.isPreview && !isEnrolled;

                      return locked ? (
                        <div
                          key={lesson.id}
                          className="flex items-center justify-between rounded-2xl bg-white p-4 opacity-70">
                          <div className="flex items-center gap-3">
                            <Lock className="text-slate-400" size={20} />
                            <div>
                              <p className="font-bold">{lesson.title}</p>
                              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                                Premium lesson
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={lesson.id}
                          href={`/learn/lesson/${lesson.id}`}
                          className="flex items-center justify-between rounded-2xl bg-white p-4 transition hover:bg-cyan-50">
                          <div className="flex items-center gap-3">
                            <PlayCircle className="text-cyan-600" size={20} />
                            <div>
                              <p className="font-bold">{lesson.title}</p>
                              <p className="text-xs font-bold uppercase tracking-wide text-cyan-600">
                                {lesson.isPreview ? "Free preview" : "Lesson"}
                              </p>
                            </div>
                          </div>

                          <ArrowRight size={18} className="text-slate-400" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
