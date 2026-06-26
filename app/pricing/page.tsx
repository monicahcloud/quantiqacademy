import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Users,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "preview access",
    description: "Perfect for exploring QuantIQ Academy.",
    icon: Sparkles,
    cta: "Start Free",
    href: "/signup",
    featured: false,
    features: [
      "Introductory lessons",
      "Sample quizzes",
      "Course previews",
      "AI tutor demo",
      "Browse test prep programs",
    ],
  },
  {
    name: "Student Premium",
    price: "$29",
    period: "per month",
    description: "Best for BJC, BGCSE, SAT, and ACT preparation.",
    icon: GraduationCap,
    cta: "Start Learning",
    href: "/signup",
    featured: true,
    features: [
      "Full test prep access",
      "Unlimited AI tutor",
      "Practice questions",
      "Mock exams",
      "Progress tracking",
      "Study plans",
      "Certificates of participation",
    ],
  },
  {
    name: "Professional",
    price: "$39",
    period: "per month",
    description: "For career-focused learning and professional growth.",
    icon: Users,
    cta: "Advance My Career",
    href: "/signup",
    featured: false,
    features: [
      "Everything in Student Premium",
      "Data analytics courses",
      "Power BI, SQL, Python",
      "AI literacy",
      "Business skills",
      "Professional certificates",
    ],
  },
  {
    name: "Schools & Organizations",
    price: "Custom",
    period: "group access",
    description: "For schools, teams, ministries, NGOs, and companies.",
    icon: Building2,
    cta: "Request Demo",
    href: "/contact",
    featured: false,
    features: [
      "Bulk student licenses",
      "Admin dashboard",
      "Progress reports",
      "Custom learning paths",
      "Team analytics",
      "Custom training options",
    ],
  },
];

const comparison = [
  ["Intro lessons", true, true, true, true],
  ["Full courses", false, true, true, true],
  ["AI tutor", "Demo", "Unlimited", "Unlimited", "Unlimited"],
  ["Practice questions", "Limited", "Unlimited", "Unlimited", "Unlimited"],
  ["Mock exams", false, true, true, true],
  ["Certificates", false, true, true, true],
  ["Professional courses", false, false, true, "Custom"],
  ["Admin dashboard", false, false, false, true],
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#f7fafc] text-[#041f3d]">
      <section className="relative overflow-hidden bg-[#041f3d] px-6 pb-20 pt-36 text-white">
        <div className="absolute left-[-180px] top-0 h-96 w-96 rounded-full bg-cyan-400/15 blur-[140px]" />
        <div className="absolute right-[-180px] bottom-0 h-96 w-96 rounded-full bg-[#FDBF2D]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
            QuantIQ Academy Pricing
          </p>

          <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
            Simple pricing.
            <span className="block text-cyan-400">Powerful learning.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">
            Start free, then unlock full courses, AI tutoring, mock exams,
            progress tracking, and certificates when you are ready.
          </p>
        </div>
      </section>

      <section className="relative px-6 py-20">
        <div className="mx-auto grid max-w-8xl gap-7 lg:grid-cols-4">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <div
                key={plan.name}
                className={`relative rounded-[2rem] border p-7 shadow-xl ${
                  plan.featured
                    ? "scale-[1.02] border-cyan-400 bg-white"
                    : "border-slate-200 bg-white"
                }`}>
                {plan.featured && (
                  <div className="absolute -top-5 left-7 rounded-full bg-[#FDBF2D] px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#041f3d]">
                    Most Popular
                  </div>
                )}

                <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-600">
                  <Icon size={28} />
                </div>

                <h2 className="text-2xl font-black">{plan.name}</h2>

                <p className="mt-3 min-h-[56px] leading-7 text-slate-600">
                  {plan.description}
                </p>

                <div className="mt-8 flex items-end gap-2">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="pb-2 text-sm font-bold text-slate-500">
                    {plan.period}
                  </span>
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2
                        size={20}
                        className="mt-1 shrink-0 text-cyan-500"
                      />
                      <span className="leading-7 text-slate-700">
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
            );
          })}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
          <div className="border-b border-slate-200 p-8">
            <h2 className="text-3xl font-black">Compare Plans</h2>
            <p className="mt-2 text-slate-600">
              See what is included in each QuantIQ Academy plan.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-5 font-black">Feature</th>
                  <th className="p-5 font-black">Starter</th>
                  <th className="p-5 font-black">Student</th>
                  <th className="p-5 font-black">Professional</th>
                  <th className="p-5 font-black">Schools</th>
                </tr>
              </thead>

              <tbody>
                {comparison.map((row) => (
                  <tr
                    key={row[0] as string}
                    className="border-t border-slate-100">
                    {row.map((cell, index) => (
                      <td key={index} className="p-5 text-slate-700">
                        {typeof cell === "boolean" ? (
                          cell ? (
                            <CheckCircle2 className="text-cyan-500" size={22} />
                          ) : (
                            <span className="text-slate-300">—</span>
                          )
                        ) : (
                          <span
                            className={
                              index === 0
                                ? "font-bold text-[#041f3d]"
                                : "font-medium"
                            }>
                            {cell}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#041f3d] px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            Start learning today.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Join QuantIQ Academy and unlock AI-powered education built for test
            prep, professional growth, and long-term success.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/signup"
              className="rounded-full bg-[#FDBF2D] px-8 py-4 font-black text-[#041f3d]">
              Start Free
            </Link>

            <Link
              href="/test-prep"
              className="rounded-full border border-white/20 px-8 py-4 font-black text-white">
              View Test Prep
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
