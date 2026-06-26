import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  Brain,
  FileText,
  MessageCircle,
  PlayCircle,
} from "lucide-react";
import { prisma } from "@/lib/prisma";
import CompleteLessonButton from "@/components/learn/CompleteLessonButton";
import CurriculumAccordion from "@/components/learn/CurriculumAccordion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github-dark.css";
import LessonVideoPlayer from "@/components/learn/LessonVideoPlayer";
import LessonQuiz from "@/components/learn/LessonQuiz";

export default async function LessonPlayerPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = await params;
  const { userId } = await auth();

  if (!userId) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
  });

  if (!user) redirect("/onboarding");

  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    include: {
      quizzes: {
        include: {
          questions: {
            orderBy: { order: "asc" },
            include: {
              answers: true,
            },
          },
        },
      },
      module: {
        include: {
          course: {
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
          },
        },
      },
    },
  });

  if (!lesson) redirect("/dashboard");

  const course = lesson.module.course;
  const isEnrolled = course.enrollments.length > 0;
  const isLocked = !lesson.isPreview && !isEnrolled;

  if (isLocked) {
    redirect(
      `/test-prep/${course.exam.toLowerCase()}/${course.subject.toLowerCase()}`,
    );
  }
  const completedLesson = isEnrolled
    ? await prisma.lessonProgress.findUnique({
        where: {
          enrollmentId_lessonId: {
            enrollmentId: course.enrollments[0].id,
            lessonId: lesson.id,
          },
        },
      })
    : null;

  const enrollment = course.enrollments[0];

  const totalLessons = course.modules.reduce(
    (total, module) => total + module.lessons.length,
    0,
  );

  const completedLessons = enrollment
    ? await prisma.lessonProgress.count({
        where: {
          enrollmentId: enrollment.id,
          completed: true,
        },
      })
    : 0;

  const progressPercent =
    totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  const completedLessonIds = enrollment
    ? new Set(
        (
          await prisma.lessonProgress.findMany({
            where: {
              enrollmentId: enrollment.id,
              completed: true,
            },
            select: {
              lessonId: true,
            },
          })
        ).map((progress) => progress.lessonId),
      )
    : new Set<string>();

  const flatLessons = course.modules.flatMap((module) =>
    module.lessons.map((moduleLesson) => ({
      ...moduleLesson,
      moduleTitle: module.title,
    })),
  );

  const currentLessonIndex = flatLessons.findIndex(
    (moduleLesson) => moduleLesson.id === lesson.id,
  );
  const previousLessonIsCompleted =
    currentLessonIndex <= 0
      ? true
      : completedLessonIds.has(flatLessons[currentLessonIndex - 1].id);

  const isGuidedLocked =
    !lesson.isPreview && isEnrolled && !previousLessonIsCompleted;

  const requiredPreviousLesson =
    currentLessonIndex > 0 ? flatLessons[currentLessonIndex - 1] : null;

  const previousLesson =
    currentLessonIndex > 0 ? flatLessons[currentLessonIndex - 1] : null;

  const nextLesson =
    currentLessonIndex >= 0 && currentLessonIndex < flatLessons.length - 1
      ? flatLessons[currentLessonIndex + 1]
      : null;

  return (
    <main className="min-h-screen bg-[#f7fafc] text-[#041f3d]">
      <section className="border-b border-slate-200 bg-white px-6 pb-6 pt-28">
        <div className="mx-auto flex max-w-8xl flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <Link
              href={`/test-prep/${course.exam.toLowerCase()}/${course.subject.toLowerCase()}`}
              className="inline-flex items-center gap-2 font-black text-cyan-600">
              <ArrowLeft size={18} />
              Back to Course
            </Link>

            <h1 className="mt-3 text-3xl font-black md:text-4xl">
              {lesson.title}
            </h1>

            <p className="mt-2 font-bold text-slate-500">
              {course.title} · {lesson.module.title}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-black text-[#041f3d]">
              {lesson.isPreview ? "Free Preview" : "Enrolled Lesson"}
            </div>

            {lesson.duration && (
              <div className="rounded-full bg-white px-5 py-2 text-sm font-black text-slate-600">
                {lesson.duration} min
              </div>
            )}

            <div className="rounded-full bg-[#FDBF2D] px-5 py-2 text-sm font-black text-[#041f3d]">
              +{lesson.xpReward} XP
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-8xl gap-8 px-6 py-10 lg:grid-cols-[300px_1fr_320px]">
        <CurriculumAccordion
          modules={course.modules}
          activeLessonId={lesson.id}
          isEnrolled={isEnrolled}
          completedLessonIds={[...completedLessonIds]}
        />

        <section className="space-y-8">
          {isGuidedLocked ? (
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-sm">
              <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-slate-100 text-5xl">
                🔒
              </div>

              <h2 className="mt-6 text-4xl font-black">Lesson Locked</h2>

              <p className="mx-auto mt-4 max-w-xl leading-8 text-slate-600">
                Complete the previous lesson before unlocking this lesson.
              </p>

              {requiredPreviousLesson && (
                <Link
                  href={`/learn/lesson/${requiredPreviousLesson.id}`}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-black text-[#041f3d]">
                  Continue Previous Lesson
                  <ArrowRight size={18} />
                </Link>
              )}
            </div>
          ) : (
            <>
              <LessonVideoPlayer
                videoUrl={lesson.videoUrl}
                title={lesson.title}
              />

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-600">
                  <FileText size={28} />
                </div>

                <h2 className="text-3xl font-black">Lesson Notes</h2>

                <div className="mt-4 space-y-6 leading-8 text-slate-600">
                  {lesson.summary && (
                    <p className="rounded-2xl bg-cyan-50 p-5 font-bold text-[#041f3d]">
                      {lesson.summary}
                    </p>
                  )}

                  <div className="prose prose-lg max-w-none prose-headings:text-[#041f3d] prose-p:text-slate-700 prose-strong:text-[#041f3d]">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeHighlight]}>
                      {lesson.content || "# Lesson Coming Soon"}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <LessonQuiz quiz={lesson.quizzes[0] ?? null} />

                <CompleteLessonButton
                  lessonId={lesson.id}
                  completed={Boolean(completedLesson?.completed)}
                  nextLessonId={nextLesson?.id}
                />
              </div>
              <div className="flex flex-col justify-between gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:flex-row">
                {previousLesson ? (
                  <Link
                    href={`/learn/lesson/${previousLesson.id}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-3 font-black text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600">
                    <ArrowLeft size={18} />
                    Previous Lesson
                  </Link>
                ) : (
                  <div />
                )}

                {nextLesson ? (
                  <Link
                    href={`/learn/lesson/${nextLesson.id}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#041f3d] px-6 py-3 font-black text-white transition hover:bg-[#082b57]">
                    Next Lesson
                    <ArrowRight size={18} />
                  </Link>
                ) : (
                  <Link
                    href="/dashboard"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FDBF2D] px-6 py-3 font-black text-[#041f3d]">
                    Finish Course
                    <ArrowRight size={18} />
                  </Link>
                )}
              </div>
            </>
          )}
        </section>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-600">
              <Brain size={28} />
            </div>

            <h2 className="text-2xl font-black">AI Tutor</h2>

            <p className="mt-3 leading-7 text-slate-600">
              Ask questions about this lesson. Vapi voice tutoring will be added
              here later.
            </p>

            <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-black text-[#041f3d]">
              <MessageCircle size={18} />
              Ask AI Tutor
            </button>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">Progress</h2>

            <p className="mt-3 text-sm font-bold text-slate-500">
              {completedLessons} of {totalLessons} lessons completed
            </p>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-cyan-400"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <p className="mt-3 text-3xl font-black text-[#041f3d]">
              {progressPercent}%
            </p>
          </div>

          <Link
            href="/dashboard"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#041f3d] px-5 py-4 font-black text-white">
            Dashboard
            <ArrowRight size={18} />
          </Link>
        </aside>
      </section>
    </main>
  );
}
