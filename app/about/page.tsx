import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Brain,
  GraduationCap,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const pillars = [
  {
    title: "Intelligent Learning",
    icon: Brain,
    description:
      "Every learner follows a personalized pathway powered by data, adaptive assessments, and AI guidance.",
  },
  {
    title: "Student Success",
    icon: GraduationCap,
    description:
      "We focus on confidence, mastery, and measurable academic and professional growth.",
  },
  {
    title: "Innovation",
    icon: Sparkles,
    description:
      "Voice AI, interactive learning, analytics, and real-time feedback create an engaging learning experience.",
  },
  {
    title: "Future Ready",
    icon: Target,
    description:
      "From test preparation to workforce development, we prepare learners for lifelong success.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-[#041f3d]">
      {/* HERO */}

      <section className="relative overflow-hidden bg-[#041f3d] px-6 pb-24 pt-36 text-white">
        <div className="absolute left-[-180px] top-0 h-96 w-96 rounded-full bg-cyan-400/15 blur-[140px]" />

        <div className="absolute right-[-180px] bottom-0 h-96 w-96 rounded-full bg-[#FDBF2D]/10 blur-[140px]" />

        <div className="relative mx-auto grid max-w-8xl items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
              About QuantIQ Academy
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
              Education built for
              <span className="block text-cyan-400">the next generation.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-white/75">
              QuantIQ Academy combines artificial intelligence, adaptive
              learning, interactive instruction, and real-world skills to help
              students and professionals learn more effectively than ever
              before.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/test-prep"
                className="rounded-full bg-[#FDBF2D] px-8 py-4 font-black text-[#041f3d] transition hover:-translate-y-1">
                Explore Programs
              </Link>

              <Link
                href="/pricing"
                className="rounded-full border border-white/20 px-8 py-4 font-black text-white transition hover:bg-white/10">
                View Pricing
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/about-student.png"
              alt="Student learning"
              width={700}
              height={700}
              className="mx-auto rounded-[2rem]"
            />
          </div>
        </div>
      </section>

      {/* STORY */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-600">
            Our Story
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Learning should be personal.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-600">
            Too many students struggle because education treats everyone the
            same. QuantIQ Academy was created to change that. By combining
            artificial intelligence, evidence-based learning strategies,
            adaptive assessments, and human-centered instruction, we create
            personalized learning experiences that help every learner succeed.
          </p>
        </div>
      </section>

      {/* MISSION */}

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto grid max-w-8xl gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#041f3d] p-10 text-white">
            <Users className="mb-6 text-cyan-400" size={48} />

            <h2 className="text-4xl font-black">Our Mission</h2>

            <p className="mt-6 text-lg leading-8 text-white/75">
              To empower learners through intelligent education that combines
              technology, data, and human potential to create measurable
              academic and professional success.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-10 shadow-xl">
            <Target className="mb-6 text-cyan-500" size={48} />

            <h2 className="text-4xl font-black">Our Vision</h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              To become the Caribbean&apos;s leading AI-powered learning
              platform, preparing students, professionals, schools, and
              organizations for success in a rapidly changing world.
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-8xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-[0.25em] text-cyan-600">
              Why QuantIQ Academy?
            </p>

            <h2 className="mt-5 text-5xl font-black">
              Designed around how people actually learn.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-500">
                    <Icon size={30} />
                  </div>

                  <h3 className="text-2xl font-black">{pillar.title}</h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUANTIQ */}

      <section className="bg-[#041f3d] px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
            Part of QuantIQ Global
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Powered by Data.
            <br />
            Driven by Intelligence.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/75">
            QuantIQ Academy is one of the four divisions of QuantIQ Global,
            bringing together education, analytics, artificial intelligence, and
            continuous learning to empower individuals, schools, organizations,
            and communities.
          </p>

          <Link
            href="/pricing"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-8 py-4 font-black text-[#041f3d] transition hover:-translate-y-1">
            Start Learning Today
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
