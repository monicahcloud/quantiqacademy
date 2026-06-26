// app/dashboard/page.tsx

import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpenCheck,
  Brain,
  Clock,
  GraduationCap,
  Target,
} from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    include: {
      enrollments: {
        include: {
          course: true,
        },
      },
    },
  });

  if (!user) {
    redirect("/onboarding");
  }

  if (!user.onboardingComplete) {
    redirect("/onboarding");
  }

  const firstName = user.firstName || "Learner";
  const courseCount = user.enrollments.length;

  const averageProgress =
    courseCount > 0
      ? Math.round(
          user.enrollments.reduce(
            (total, enrollment) => total + enrollment.progress,
            0,
          ) / courseCount,
        )
      : 0;

  return (
    <main className="min-h-screen bg-[#f7fafc] px-6 py-32 text-[#041f3d]">
      <div className="mx-auto max-w-8xl">
        <section className="relative overflow-hidden rounded-[2.5rem] bg-[#041f3d] p-8 text-white shadow-2xl md:p-12">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-[120px]" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#FDBF2D]/15 blur-[120px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_360px] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
                Student Dashboard
              </p>

              <h1 className="mt-4 text-4xl font-black md:text-6xl">
                Welcome back, {firstName}.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                Your learning dashboard will track your courses, goals, AI tutor
                activity, progress, quizzes, and certificates.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {user.examGoals.map((goal) => (
                  <span
                    key={goal}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">
                    {goal}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
              <p className="text-sm font-bold text-white/60">Profile Type</p>
              <h2 className="mt-2 text-3xl font-black capitalize">
                {user.studentType || "Student"}
              </h2>

              <div className="mt-6 space-y-4 text-sm">
                <DashboardMiniRow
                  label="Level"
                  value={user.gradeLevel || "Not set"}
                />
                <DashboardMiniRow
                  label="School"
                  value={user.schoolName || "Not set"}
                />
                <DashboardMiniRow
                  label="Goals"
                  value={`${user.learningGoals.length} selected`}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Courses"
            value={String(courseCount)}
            icon={BookOpenCheck}
          />

          <StatCard
            title="Progress"
            value={`${averageProgress}%`}
            icon={BarChart3}
          />

          <StatCard title="Study Time" value="0 hrs" icon={Clock} />

          <StatCard title="Certificates" value="0" icon={Award} />
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-600">
                  Continue Learning
                </p>
                <h2 className="mt-2 text-3xl font-black">My Courses</h2>
              </div>

              <Link
                href="/test-prep"
                className="hidden items-center gap-2 rounded-full bg-[#041f3d] px-5 py-3 text-sm font-black text-white md:inline-flex">
                Browse Courses
                <ArrowRight size={16} />
              </Link>
            </div>

            {user.enrollments.length === 0 ? (
              <div className="mt-8 rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                <GraduationCap className="mx-auto text-cyan-500" size={48} />

                <h3 className="mt-4 text-2xl font-black">No courses yet.</h3>

                <p className="mx-auto mt-3 max-w-md leading-7 text-slate-600">
                  Start by exploring BJC, BGCSE, SAT, ACT, or professional
                  development courses.
                </p>

                <Link
                  href="/test-prep"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-black text-[#041f3d]">
                  Explore Test Prep
                  <ArrowRight size={17} />
                </Link>
              </div>
            ) : (
              <div className="mt-8 space-y-4">
                {user.enrollments.map((enrollment) => (
                  <div
                    key={enrollment.id}
                    className="rounded-2xl border border-slate-200 p-5">
                    <h3 className="text-xl font-black">
                      {enrollment.course.title}
                    </h3>
                    <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-cyan-400"
                        style={{ width: `${enrollment.progress}%` }}
                      />
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <p className="text-sm font-bold text-slate-500">
                        {enrollment.progress}% complete
                      </p>

                      <Link
                        href={`/learn/${enrollment.course.slug}`}
                        className="inline-flex items-center gap-2 rounded-full bg-[#041f3d] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#082b57]">
                        Continue
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="grid gap-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-600">
                <Brain size={28} />
              </div>

              <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-600">
                AI Learning Coach
              </p>

              <h2 className="mt-3 text-3xl font-black">Your coach is ready.</h2>

              <p className="mt-4 leading-7 text-slate-600">
                Once courses are active, your AI coach will recommend lessons,
                quizzes, and practice based on your progress.
              </p>

              <Link
                href="/ai-learning"
                className="mt-6 inline-flex items-center gap-2 font-black text-cyan-600">
                Open AI Tutor
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-[#FDBF2D]/20 text-[#041f3d]">
                <Target size={28} />
              </div>

              <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-600">
                Learning Goals
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {user.learningGoals.length > 0 ? (
                  user.learningGoals.map((goal) => (
                    <span
                      key={goal}
                      className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">
                      {goal}
                    </span>
                  ))
                ) : (
                  <p className="text-slate-600">No learning goals selected.</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function StatCard({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
}) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-600">
        <Icon size={28} />
      </div>
      <p className="text-4xl font-black">{value}</p>
      <p className="mt-2 font-bold text-slate-500">{title}</p>
    </div>
  );
}

function DashboardMiniRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-3 last:border-b-0">
      <span className="text-white/55">{label}</span>
      <span className="font-bold text-white">{value}</span>
    </div>
  );
}
