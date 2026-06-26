// src/app/login/[[...sign-in]]/page.tsx

import Image from "next/image";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";
import { ArrowRight, Brain, GraduationCap, Trophy } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#021631]">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0b3a67_0%,#041f3d_45%,#021631_100%)]" />

      <div className="absolute left-[-180px] top-10 h-[420px] w-[420px] rounded-full bg-cyan-400/15 blur-[150px]" />
      <div className="absolute right-[-180px] bottom-0 h-[420px] w-[420px] rounded-full bg-[#FDBF2D]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1700px]">
        {/* LEFT */}
        <section className="hidden w-1/2 flex-col justify-center px-16 text-white lg:flex xl:px-24">
          <Image
            src="/images/logodark.png"
            alt="QuantIQ Academy"
            width={260}
            height={90}
            className="mb-12 h-20 w-auto"
          />

          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
            Welcome Back
          </p>

          <h1 className="mt-5 text-6xl font-black leading-[1.05]">
            Continue
            <br />
            Learning.
            <br />
            Keep Growing.
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-white/75">
            Access your personalized learning dashboard, AI tutor, practice
            exams, quizzes, progress reports, and certificates all in one place.
          </p>

          <div className="mt-14 grid max-w-xl gap-6">
            <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
                <Brain className="text-cyan-400" size={28} />
              </div>

              <div>
                <h3 className="font-black">AI Learning Coach</h3>

                <p className="text-sm text-white/60">
                  Personalized tutoring powered by AI.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FDBF2D]/10">
                <GraduationCap className="text-[#FDBF2D]" size={28} />
              </div>

              <div>
                <h3 className="font-black">Interactive Courses</h3>

                <p className="text-sm text-white/60">
                  Learn through videos, quizzes and assessments.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
                <Trophy className="text-cyan-400" size={28} />
              </div>

              <div>
                <h3 className="font-black">Earn Certificates</h3>

                <p className="text-sm text-white/60">
                  Showcase your achievements as you complete courses.
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/"
            className="mt-12 inline-flex items-center gap-3 font-bold text-cyan-400 hover:text-white">
            Back to Homepage
            <ArrowRight size={18} />
          </Link>
        </section>

        {/* RIGHT */}
        <section className="flex w-full items-center justify-center px-6 py-20 lg:w-1/2">
          <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-[0_25px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl">
            <div className="mb-8 text-center lg:hidden">
              <Image
                src="/images/logodark.png"
                alt="QuantIQ Academy"
                width={220}
                height={70}
                className="mx-auto h-16 w-auto"
              />
            </div>

            <SignIn
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "bg-transparent shadow-none",
                  headerTitle: "text-white text-3xl font-black",
                  headerSubtitle: "text-white/70",
                  socialButtonsBlockButton:
                    "border-white/20 bg-white/5 hover:bg-white/10 text-white",
                  formFieldInput:
                    "bg-white/10 border-white/10 text-white placeholder:text-white/40",
                  formButtonPrimary:
                    "bg-[#FDBF2D] text-[#041f3d] hover:bg-[#f5b000] font-black",
                  footerActionLink: "text-cyan-400 hover:text-cyan-300",
                },
              }}
              fallbackRedirectUrl="/dashboard"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
