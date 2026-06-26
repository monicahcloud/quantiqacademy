import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpenCheck,
  Calculator,
  CheckCircle2,
  FileText,
  FlaskConical,
  Globe2,
  GraduationCap,
  Star,
} from "lucide-react";

const bjcCourses = [
  {
    title: "BJC Mathematics",
    slug: "mathematics",
    description:
      "Master number operations, algebra, geometry, measurement, statistics, and exam-style problem solving.",
    image: "/images/bjc.png",
    icon: Calculator,
    lessons: 42,
    level: "Junior High",
  },
  {
    title: "BJC English Language",
    slug: "english",
    description:
      "Strengthen comprehension, grammar, writing, vocabulary, and structured exam responses.",
    image: "/images/bjc.png",
    icon: FileText,
    lessons: 36,
    level: "Junior High",
  },
  {
    title: "BJC General Science",
    slug: "science",
    description:
      "Build confidence in biology, chemistry, physics, scientific thinking, and practical applications.",
    image: "/images/bjc.png",
    icon: FlaskConical,
    lessons: 40,
    level: "Junior High",
  },
  {
    title: "BJC Social Studies",
    slug: "social-studies",
    description:
      "Explore history, geography, citizenship, culture, and current issues with exam-focused practice.",
    image: "/images/bjc.png",
    icon: Globe2,
    lessons: 34,
    level: "Junior High",
  },
];

const readinessAreas = [
  "Subject knowledge and skill-building",
  "Exam-style practice questions",
  "Reading and understanding instructions",
  "Time management strategies",
  "Confidence-building review",
  "Progress tracking and feedback",
  "AI-supported study help",
  "Independent revision routines",
];

export default function BJCPage() {
  return (
    <main className="min-h-screen bg-[#f7fafc] text-[#041f3d]">
      <section className="relative overflow-hidden bg-[#041f3d] px-6 pb-20 pt-36 text-white">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-cyan-400/20 blur-[140px]" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#FDBF2D]/15 blur-[140px]" />

        <div className="relative mx-auto grid max-w-8xl gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
              QuantIQ Academy Test Prep
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
              BJC Preparation
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Build confidence for the Bahamas Junior Certificate with guided
              lessons, practice questions, AI support, progress tracking, and
              exam-ready study paths.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm font-bold text-white/80">
              <span className="flex items-center gap-2">
                <Star className="fill-[#FDBF2D] text-[#FDBF2D]" size={18} />
                Exam-focused preparation
              </span>

              <span className="flex items-center gap-2">
                <BookOpenCheck size={18} />
                Guided lessons
              </span>

              <span className="flex items-center gap-2">
                <GraduationCap size={18} />
                Certificate pathway
              </span>
            </div>
          </div>

          <div className="relative h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl">
            <Image
              src="/images/bjc.png"
              alt="BJC Preparation"
              fill
              priority
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#041f3d]/80 via-[#041f3d]/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
                Start Here
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Choose your BJC subject.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-8xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-600">
                BJC Subjects
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Select your course path.
              </h2>
            </div>

            <Link
              href="/test-prep"
              className="inline-flex items-center gap-2 font-black text-cyan-600">
              View all test prep
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {bjcCourses.map((course) => {
              const Icon = course.icon;

              return (
                <Link
                  key={course.slug}
                  href={`/test-prep/bjc/${course.slug}`}
                  className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute left-4 top-4 rounded-full bg-cyan-400 px-3 py-1 text-xs font-black text-[#041f3d]">
                      {course.level}
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-600">
                      <Icon size={28} />
                    </div>

                    <h3 className="text-2xl font-black">{course.title}</h3>

                    <p className="mt-4 min-h-[112px] leading-7 text-slate-600">
                      {course.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                      <span className="text-sm font-bold text-slate-500">
                        {course.lessons} lessons
                      </span>

                      <span className="inline-flex items-center gap-2 font-black text-cyan-600">
                        View Course
                        <ArrowRight
                          size={17}
                          className="transition group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 rounded-[2rem] border border-cyan-100 bg-white p-8 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-600">
              BJC Exam Readiness
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Support for stronger preparation across BJC subjects.
            </h2>

            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              QuantIQ Academy provides independent supplemental support to help
              students strengthen subject knowledge, practice exam-style
              questions, build confidence, and develop consistent study habits.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {readinessAreas.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <CheckCircle2
                    className="mt-1 shrink-0 text-cyan-500"
                    size={20}
                  />

                  <p className="font-bold text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-6 text-slate-500">
              Note: QuantIQ Academy provides independent supplemental
              preparation and is not an official Ministry of Education
              examination body.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
