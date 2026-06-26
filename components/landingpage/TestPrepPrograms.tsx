import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { testPrepPrograms } from "@/app/data/site";

function getAccentClasses(accent: string) {
  switch (accent) {
    case "gold":
      return {
        icon: "bg-[#FDBF2D] text-white shadow-[#FDBF2D]/30",
        link: "text-[#FDBF2D]",
      };
    case "blue":
      return {
        icon: "bg-blue-500 text-white shadow-blue-500/30",
        link: "text-blue-500",
      };
    case "purple":
      return {
        icon: "bg-purple-600 text-white shadow-purple-600/30",
        link: "text-purple-600",
      };
    default:
      return {
        icon: "bg-cyan-500 text-white shadow-cyan-500/30",
        link: "text-cyan-500",
      };
  }
}

export default function TestPrepPrograms() {
  return (
    <section className="relative overflow-hidden bg-[#021631] px-6 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(32,196,199,0.18),transparent_38%)]" />
      <div className="absolute bottom-16 left-8 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[280px_1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
            Test Prep Programs
          </p>

          <h2 className="mt-4 text-5xl font-black leading-tight">
            Choose your
            <span className="block text-cyan-400">exam path</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/75">
            High-quality content, practice, and analytics for top exam success.
          </p>

          <Link
            href="/test-prep"
            className="mt-8 inline-flex items-center gap-3 text-lg font-bold text-cyan-400">
            View All Programs
            <span className="flex size-9 items-center justify-center rounded-full bg-cyan-400 text-[#021631]">
              <ArrowRight size={18} />
            </span>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {testPrepPrograms.map((program) => {
            const Icon = program.icon;
            const accent = getAccentClasses(program.accent);

            return (
              <Link
                key={program.title}
                href={program.href}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white text-[#041f3d] shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041f3d]/30 to-transparent" />
                </div>

                <div className="relative p-7">
                  <div
                    className={`-mt-16 mb-6 flex size-16 items-center justify-center rounded-2xl shadow-lg ${accent.icon}`}>
                    <Icon size={32} />
                  </div>

                  <h3 className="text-3xl font-black">{program.title}</h3>

                  <p className="mt-4 min-h-[84px] text-lg leading-7 text-slate-700">
                    {program.description}
                  </p>

                  <span
                    className={`mt-6 inline-flex items-center gap-3 font-bold ${accent.link}`}>
                    Learn More
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
