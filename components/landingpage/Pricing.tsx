import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free Preview",
    price: "$0",
    period: "Start learning",
    description: "Explore QuantIQ Academy before subscribing.",
    features: [
      "Access free preview lessons",
      "Browse test prep programs",
      "View course outlines",
      "Create a student account",
    ],
    cta: "Start Free",
    href: "/signup",
    featured: false,
  },
  {
    name: "Student Premium",
    price: "$29",
    period: "per month",
    description: "Full access for students preparing for exams.",
    features: [
      "Full test prep course access",
      "Quizzes and assessments",
      "Mock exams",
      "AI learning coach",
      "Voice tutor access",
      "Progress tracking",
      "Certificate of participation",
    ],
    cta: "Start Premium",
    href: "/pricing",
    featured: true,
  },
  {
    name: "School / Team",
    price: "Custom",
    period: "group access",
    description: "For schools, tutors, and organizations.",
    features: [
      "Student group accounts",
      "Teacher/admin dashboard",
      "Progress reports",
      "Course assignments",
      "Bulk enrollment",
      "Custom training options",
    ],
    cta: "Contact Us",
    href: "/contact",
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-[#041f3d] px-6 py-28 text-white">
      <div className="absolute left-[-160px] top-20 h-96 w-96 rounded-full bg-cyan-400/15 blur-[140px]" />
      <div className="absolute bottom-0 right-[-160px] h-96 w-96 rounded-full bg-[#FDBF2D]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
            Pricing
          </p>

          <h2 className="mt-4 text-5xl font-black leading-tight md:text-6xl">
            Start free. Unlock when ready.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            Students can preview selected lessons for free, then subscribe to
            complete full modules, access assessments, use the AI tutor, and
            earn certificates.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[2rem] border p-8 shadow-xl ${
                plan.featured
                  ? "border-cyan-400 bg-white text-[#041f3d]"
                  : "border-white/10 bg-white/5 text-white backdrop-blur"
              }`}>
              {plan.featured && (
                <div className="absolute -top-5 left-8 inline-flex items-center gap-2 rounded-full bg-[#FDBF2D] px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#041f3d]">
                  <Sparkles size={15} />
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-black">{plan.name}</h3>

              <p
                className={`mt-3 leading-7 ${
                  plan.featured ? "text-slate-600" : "text-white/65"
                }`}>
                {plan.description}
              </p>

              <div className="mt-8 flex items-end gap-2">
                <span className="text-5xl font-black">{plan.price}</span>
                <span
                  className={`pb-2 text-sm font-bold ${
                    plan.featured ? "text-slate-500" : "text-white/50"
                  }`}>
                  {plan.period}
                </span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className={
                        plan.featured
                          ? "mt-0.5 shrink-0 text-cyan-500"
                          : "mt-0.5 shrink-0 text-cyan-400"
                      }
                    />
                    <span
                      className={`leading-7 ${
                        plan.featured ? "text-slate-700" : "text-white/75"
                      }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-black transition hover:-translate-y-1 ${
                  plan.featured
                    ? "bg-[#041f3d] text-white"
                    : "bg-cyan-400 text-[#041f3d]"
                }`}>
                {plan.cta}
                <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
