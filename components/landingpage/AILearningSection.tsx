import {
  Brain,
  Bot,
  MessageCircle,
  Mic,
  Sparkles,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Voice Tutor",
    description:
      "Talk naturally with your AI tutor anytime using voice conversations powered by Vapi.",
    icon: Mic,
  },
  {
    title: "Ask Anything",
    description:
      "Confused about a lesson? Ask unlimited questions and receive personalized explanations.",
    icon: MessageCircle,
  },
  {
    title: "Adaptive Learning",
    description:
      "Lessons automatically adjust to your strengths, weaknesses, and learning pace.",
    icon: TrendingUp,
  },
  {
    title: "24/7 AI Coach",
    description:
      "Your personal study coach keeps you motivated with reminders, study plans, and feedback.",
    icon: Bot,
  },
];

export default function AiLearningSection() {
  return (
    <section className="relative overflow-hidden bg-[#041f3d] px-6 py-28 text-white">
      {/* Background */}
      <div className="absolute left-[-180px] top-10 h-[420px] w-[420px] rounded-full bg-cyan-400/15 blur-[160px]" />

      <div className="absolute right-[-180px] bottom-0 h-[420px] w-[420px] rounded-full bg-[#FDBF2D]/10 blur-[160px]" />

      <div className="relative mx-auto grid max-w-8xl items-center gap-20 lg:grid-cols-2">
        {/* LEFT */}

        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-400">
            <Sparkles size={16} />
            AI Learning Coach
          </div>

          <h2 className="mt-6 text-5xl font-black leading-tight md:text-6xl">
            Learn with an AI tutor that never sleeps.
          </h2>

          <p className="mt-7 max-w-xl text-xl leading-9 text-white/75">
            QuantIQ Academy combines intelligent learning, real-time voice
            tutoring, adaptive assessments, and personalized coaching into one
            interactive learning experience.
          </p>

          <Link
            href="/ai-learning"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-8 py-4 font-black text-[#041f3d] transition hover:-translate-y-1">
            Meet Your AI Tutor
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* RIGHT */}

        {/* RIGHT */}
        <div className="relative min-h-[720px] sm:min-h-[760px] lg:min-h-[620px]">
          {/* Floating Brain + Rings */}
          <div className="relative mx-auto flex h-[300px] w-full items-center justify-center sm:h-[360px]">
            <div className="absolute h-[260px] w-[260px] rounded-full border border-cyan-400/20 sm:h-[320px] sm:w-[320px]" />
            <div className="absolute h-[340px] w-[340px] rounded-full border border-cyan-400/10 sm:h-[430px] sm:w-[430px]" />

            <div className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-[0_0_70px_rgba(34,211,238,.45)] sm:h-44 sm:w-44">
              <Brain size={78} className="sm:size-[90px]" />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="relative z-20 grid gap-5 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:bg-white/10">
                  <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-black">{feature.title}</h3>

                  <p className="mt-3 leading-7 text-white/70">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
