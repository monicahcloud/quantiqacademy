import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  BookOpenCheck,
  CheckCircle2,
  Lock,
  PlayCircle,
} from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function LearnCoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { userId } = await auth();

  if (!userId) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
  });

  if (!user) redirect("/onboarding");

  const course = await prisma.course.findUnique({
    where: { slug },
    include: {
      modules: {
        orderBy: { order: "asc" },
        include: {
          lessons: {
            orderBy: { order: "asc" },
          },
        },
      },
      enrollments: {
        where: { userId: user.id },
      },
    },
  });

  if (!course) redirect("/dashboard");

  const isEnrolled = course.enrollments.length > 0;

  if (!isEnrolled) redirect("/test-prep");

  const firstLesson = course.modules[0]?.lessons[0];

  return (
    <main className="min-h-screen bg-[#f7fafc] px-6 py-32 text-[#041f3d]">
      <div className="mx-auto max-w-8xl">
        <Link
          href="/dashboard"
          className="mb-8 inline-flex items-center gap-2 font-black text-cyan-600">
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        <section className="grid gap-8 lg:grid-cols-[360px_1fr]">
          <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-600">
              Course
            </p>

            <h1 className="mt-3 text-3xl font-black">{course.title}</h1>

            <p className="mt-3 leading-7 text-slate-600">
              {course.description}
            </p>

            <div className="mt-8 space-y-6">
              {course.modules.map((module) => (
                <div key={module.id}>
                  <h2 className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-slate-500">
                    {module.title}
                  </h2>

                  <div className="space-y-2">
                    {module.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                        {lesson.isPreview ? (
                          <PlayCircle
                            size={20}
                            className="shrink-0 text-cyan-600"
                          />
                        ) : (
                          <Lock size={20} className="shrink-0 text-slate-400" />
                        )}

                        <div className="min-w-0">
                          <p className="truncate font-bold">{lesson.title}</p>
                          <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                            {lesson.isPreview ? "Preview" : "Premium"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <section className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="rounded-[2rem] bg-[#041f3d] p-8 text-white">
              <div className="flex size-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                <BookOpenCheck size={32} />
              </div>

              <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-400">
                Current Lesson
              </p>

              <h2 className="mt-3 text-4xl font-black">
                {firstLesson?.title || "Course Overview"}
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-white/70">
                This is your lesson workspace. Next we will add the video
                player, lesson notes, AI tutor, quizzes, and progress tracking.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {["Video Lesson", "AI Tutor", "Quick Quiz"].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-slate-200 p-6">
                  <CheckCircle2 className="text-cyan-500" size={28} />
                  <h3 className="mt-4 text-xl font-black">{item}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Coming next in the course player.
                  </p>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
