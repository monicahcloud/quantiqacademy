// src/app/signup/[[...sign-up]]/page.tsx

import Image from "next/image";
import Link from "next/link";
import { SignUp } from "@clerk/nextjs";
import { ArrowRight, Brain, BookOpenCheck, Mic, Sparkles } from "lucide-react";

export default function SignUpPage() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#021631] mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0b3a67_0%,#041f3d_45%,#021631_100%)]" />
      <div className="absolute left-[-180px] top-10 h-[420px] w-[420px] rounded-full bg-cyan-400/15 blur-[150px]" />
      <div className="absolute right-[-180px] bottom-0 h-[420px] w-[420px] rounded-full bg-[#FDBF2D]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1700px]">
        <section className="hidden w-1/2 flex-col justify-center px-16 text-white lg:flex xl:px-24">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
            Start Your Learning Journey
          </p>

          <h1 className="mt-5 text-6xl font-black leading-[1.05]">
            Learn Smarter.
            <br />
            Prepare Better.
            <br />
            Achieve More.
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-white/75">
            Create your account to access free previews, personalized learning,
            AI tutoring, quizzes, mock exams, and certificates.
          </p>

          <div className="mt-14 grid max-w-xl gap-6">
            {[
              {
                title: "Free Preview Lessons",
                text: "Explore selected lessons before subscribing.",
                icon: BookOpenCheck,
              },
              {
                title: "AI Voice Tutor",
                text: "Practice and ask questions with interactive AI support.",
                icon: Mic,
              },
              {
                title: "Personalized Learning",
                text: "Follow a pathway built around your goals and progress.",
                icon: Brain,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
                    <Icon className="text-cyan-400" size={28} />
                  </div>

                  <div>
                    <h3 className="font-black">{item.title}</h3>
                    <p className="text-sm text-white/60">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Link
            href="/"
            className="mt-12 inline-flex items-center gap-3 font-bold text-cyan-400 hover:text-white">
            Back to Homepage
            <ArrowRight size={18} />
          </Link>
        </section>

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

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-400">
              <Sparkles size={14} />
              Create Account
            </div>

            <SignUp
              forceRedirectUrl="/onboarding"
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "bg-transparent shadow-none",
                  headerTitle: "text-white text-3xl font-black",
                  headerSubtitle: "text-white/70",
                  socialButtonsBlockButton:
                    "border-white/20 bg-white/5 hover:bg-white/10 text-white",
                  formFieldLabel: "text-white/80",
                  formFieldInput:
                    "bg-white/10 border-white/10 text-white placeholder:text-white/40",
                  formButtonPrimary:
                    "bg-[#FDBF2D] text-[#041f3d] hover:bg-[#f5b000] font-black",
                  footerActionText: "text-white/60",
                  footerActionLink: "text-cyan-400 hover:text-cyan-300",
                },
              }}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
