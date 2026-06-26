import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  Brain,
  PlayCircle,
  Target,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#021631] text-white pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0b3a67_0%,#041f3d_45%,#021631_100%)]" />
      {/* RIGHT IMAGE */}
      <div className="absolute inset-y-0 right-0 z-[20] hidden w-[54%] overflow-hidden rounded-bl-[220px] lg:block 2xl:w-[58%]">
        <Image
          src="/images/studyonline.png"
          alt="Student studying online"
          fill
          priority
          className=" object-cover
    object-bottom
    brightness-110
    contrast-110
    saturate-110
    drop-shadow-[0_25px_60px_rgba(0,0,0,.45)]"
        />

        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#041f3d]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(32,196,199,0.22),transparent_45%)]" />
      </div>

      {/* SOFT BACKGROUND GRAPHICS */}
      <div className="absolute right-[6%] top-[2%] z-10 hidden lg:block">
        <svg width="900" height="900" viewBox="0 0 900 900" fill="none">
          <circle cx="450" cy="450" r="340" fill="#0E5D86" opacity=".18" />

          <circle cx="450" cy="450" r="255" fill="#18B7D6" opacity=".22" />

          <path
            d="M450 160
A290 290 0 1 1 449 160"
            stroke="#22D3EE"
            strokeWidth="42"
            opacity=".75"
          />

          <path
            d="M450 245
A205 205 0 1 1 449 245"
            stroke="#0EA5C8"
            strokeWidth="48"
            opacity=".9"
          />
        </svg>
      </div>

      {/* <div className="absolute right-[18%] top-[12%] z-10 h-[520px] w-[520px] rounded-full bg-cyan-400/20 blur-[160px]" />
      <div className="absolute bottom-[8%] right-[2%] z-10 h-72 w-72 rounded-full bg-[#FDBF2D]/15 blur-[130px]" /> */}

      {/* GLOWS */}
      <div className="absolute inset-0 z-[3] bg-[radial-gradient(circle_at_18%_42%,rgba(32,196,199,0.16),transparent_34%)]" />
      <div className="absolute right-10 top-28 z-[3] h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-24 left-20 z-[3] h-80 w-80 rounded-full bg-[#FDBF2D]/10 blur-3xl" />

      {/* MAIN DARK FADE */}
      <div className="absolute inset-0 z-[4] bg-[linear-gradient(90deg,#041f3d_0%,#041f3d_42%,rgba(4,31,61,0.68)_58%,rgba(4,31,61,0)_78%)]" />

      {/* FLOATING CARDS */}

      <div className="absolute left-[55%] top-[22%] z-40 hidden rounded-3xl border border-white/10 bg-white/10 px-6 py-5 shadow-2xl backdrop-blur-xl xl:block">
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-[#FDBF2D]/15 text-[#FDBF2D]">
            🔥
          </div>
          <div>
            <p className="text-xs text-white/60">Study Streak</p>
            <p className="text-xl font-black">12 days</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[50%] right-[3%] z-40 hidden w-56 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl xl:block">
        <p className="text-sm font-bold text-white">Your Progress</p>

        <div className="mt-5 flex items-center justify-center">
          <div className="flex size-24 items-center justify-center rounded-full border-[10px] border-cyan-400/80 border-r-[#FDBF2D]">
            <div className="text-center">
              <p className="text-2xl font-black">72%</p>
              <p className="text-[10px] text-white/60">Overall</p>
            </div>
          </div>
        </div>

        <div className="mt-5 space-y-3 text-xs text-white/75">
          <div className="flex justify-between">
            <span>Lessons Completed</span>
            <span className="font-bold text-white">48/68</span>
          </div>
          <div className="flex justify-between">
            <span>Practice Questions</span>
            <span className="font-bold text-white">1240</span>
          </div>
          <div className="flex justify-between">
            <span>Mock Exams</span>
            <span className="font-bold text-white">8</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[20%] right-[8%] z-40 hidden w-52 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl xl:block">
        <p className="text-sm font-bold text-white">Predicted Score</p>
        <p className="mt-3 text-4xl font-black text-cyan-400">1450</p>
        <p className="text-xs text-white/60">SAT</p>

        <div className="mt-5 h-16 overflow-hidden rounded-xl bg-[#0d2346] p-2">
          <svg
            viewBox="0 0 220 60"
            className="h-full w-full"
            fill="none"
            preserveAspectRatio="none">
            {/* Area Fill */}
            <defs>
              <linearGradient
                id="scoreGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
              </linearGradient>
            </defs>

            <path
              d="M0 50
         C20 45 40 42 60 38
         C80 34 100 30 120 26
         C145 22 170 18 190 10
         C205 6 215 4 220 2"
              stroke="#22D3EE"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <path
              d="M0 50
         C20 45 40 42 60 38
         C80 34 100 30 120 26
         C145 22 170 18 190 10
         C205 6 215 4 220 2
         L220 60
         L0 60 Z"
              fill="url(#scoreGradient)"
            />

            {/* End Point */}
            <circle cx="220" cy="2" r="4" fill="#FDBF2D" />
          </svg>
        </div>
      </div>
      {/* CONTENT */}
      <div className="relative z-40 flex min-h-[760px] w-full items-center px-6 pb-28 pt-32 sm:px-10 lg:px-16 xl:min-h-[900px] xl:px-24 2xl:px-32">
        <div className="w-full max-w-[680px] xl:max-w-[920px]">
          <p className="mb-6 text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
            Welcome to QuantIQ Academy
          </p>

          <h1 className="text-6xl font-black leading-[0.95] tracking-tight text-white md:text-7xl lg:text-[88px]">
            Learn Smarter.
            <br />
            Prepare Better.
            <br />
            <span className="text-cyan-400">Achieve More.</span>
          </h1>

          <p className="mt-7 max-w-[590px] text-xl leading-relaxed text-white/85">
            Intelligent test preparation and future-ready skills designed to
            help students master content, build confidence, and reach their
            highest potential.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Button
              asChild
              className="h-16 rounded-2xl bg-[#FDBF2D] px-9 text-lg font-extrabold uppercase tracking-wide text-[#041f3d] shadow-xl shadow-[#FDBF2D]/30 hover:bg-[#FDBF2D]/90">
              <Link href="/test-prep">
                Explore Test Prep <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-16 rounded-2xl border-2 border-white/70 bg-transparent px-9 text-lg font-extrabold uppercase tracking-wide text-white hover:bg-white hover:text-[#041f3d]">
              <Link href="/how-it-works">
                How It Works <PlayCircle className="ml-2 size-5" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 w-full xl:w-[920px]">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
              {[
                {
                  title: "Personalized Learning",
                  label: "Smart Pathways",
                  icon: Brain,
                },
                {
                  title: "Practice That Works",
                  label: "Exam Readiness",
                  icon: BookOpenCheck,
                },
                {
                  title: "Real Progress Data",
                  label: "Performance Analytics",
                  icon: BarChart3,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex items-center gap-5  backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10 xl:bg-transparent xl:p-0 xl:pr-8 xl:hover:bg-transparent">
                    <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 ring-1 ring-cyan-400/20">
                      <Icon className="size-8 text-cyan-400" />
                    </div>

                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/50">
                        {item.label}
                      </p>

                      <h3 className="mt-2 text-base font-extrabold uppercase leading-snug text-white 2xl:text-lg">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CURVED WAVE */}
      <svg
        className="pointer-events-none absolute bottom-[-40px] left-0 z-20 h-[220px] w-full"
        viewBox="0 0 1600 220"
        preserveAspectRatio="none">
        <defs>
          <linearGradient
            id="academyNavyGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%">
            <stop offset="0%" stopColor="#021631" />
            <stop offset="45%" stopColor="#082b57" />
            <stop offset="100%" stopColor="#20c4c7" />
          </linearGradient>
        </defs>

        <path
          d="M0 80 C360 170 920 190 1600 20 L1600 220 L0 220 Z"
          fill="white"
        />

        <path
          d="M0 74 C360 158 930 175 1600 12 L1600 32 C930 192 360 176 0 92 Z"
          fill="url(#academyNavyGradient)"
        />

        <path
          d="M0 92 C360 176 930 192 1600 30 L1600 42 C930 205 360 188 0 104 Z"
          fill="#20c4c7"
        />
      </svg>
    </section>
  );
}
