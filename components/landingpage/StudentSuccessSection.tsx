import {
  Award,
  BarChart3,
  BookOpenCheck,
  Clock,
  Target,
  Trophy,
} from "lucide-react";

const successStats = [
  { label: "Course Progress", value: "82%", icon: BarChart3 },
  { label: "Lessons Completed", value: "48", icon: BookOpenCheck },
  { label: "Study Hours", value: "36", icon: Clock },
  { label: "Mock Exam Score", value: "91%", icon: Trophy },
];

export default function StudentSuccessSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7fafc] px-6 py-28 text-[#041f3d]">
      <div className="absolute left-[-140px] top-10 h-96 w-96 rounded-full bg-cyan-400/20 blur-[140px]" />
      <div className="absolute bottom-0 right-[-140px] h-96 w-96 rounded-full bg-[#FDBF2D]/20 blur-[140px]" />

      <div className="relative mx-auto grid max-w-8xl gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-600">
            Student Success
          </p>

          <h2 className="mt-4 text-5xl font-black leading-tight md:text-6xl">
            Track progress from first lesson to final certificate.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            QuantIQ Academy helps students stay focused with progress tracking,
            study goals, performance insights, mock exam readiness, and
            certificates of participation after course completion.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Personal learning dashboard",
              "Module completion tracking",
              "Quiz and assessment feedback",
              "Certificate of participation",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                <Target className="text-cyan-500" size={22} />
                <span className="font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2.5rem] bg-[#041f3d] p-6 text-white shadow-2xl">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/60">Student Dashboard</p>
                  <h3 className="mt-1 text-2xl font-black">
                    BGCSE Mathematics
                  </h3>
                </div>

                <div className="flex size-14 items-center justify-center rounded-2xl bg-[#FDBF2D] text-[#041f3d]">
                  <Award size={28} />
                </div>
              </div>

              <div className="mt-8">
                <div className="mb-3 flex justify-between text-sm font-bold">
                  <span>Overall Completion</span>
                  <span className="text-cyan-400">82%</span>
                </div>

                <div className="h-4 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[82%] rounded-full bg-cyan-400" />
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {successStats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <Icon className="mb-4 text-cyan-400" size={28} />
                      <p className="text-3xl font-black">{stat.value}</p>
                      <p className="mt-1 text-sm text-white/60">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 rounded-3xl bg-white p-6 text-[#041f3d]">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-600">
                  Next Recommendation
                </p>

                <h4 className="mt-3 text-xl font-black">
                  Review Algebra Module 4
                </h4>

                <p className="mt-2 leading-7 text-slate-600">
                  Your quiz results show this is the best next step to improve
                  exam readiness.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 -top-5 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-black text-[#041f3d] shadow-xl">
            Exam Ready
          </div>

          <div className="absolute -bottom-5 left-8 rounded-2xl bg-[#FDBF2D] px-5 py-3 text-sm font-black text-[#041f3d] shadow-xl">
            Certificate Eligible
          </div>
        </div>
      </div>
    </section>
  );
}
