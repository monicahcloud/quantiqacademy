import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import {
  featuredResources,
  popularDownloads,
  resourceCategories,
} from "@/app/data/resources";
import ResourceCard from "./ResourcesCard";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#f7fafc] text-[#041f3d]">
      <section className="relative overflow-hidden bg-[#041f3d] px-6 pb-24 pt-36 text-white">
        <div className="absolute left-[-180px] top-0 h-96 w-96 rounded-full bg-cyan-400/15 blur-[140px]" />
        <div className="absolute right-[-180px] bottom-0 h-96 w-96 rounded-full bg-[#FDBF2D]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
            Resource Center
          </p>

          <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
            Free tools to help you
            <span className="block text-cyan-400">learn smarter.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">
            Study guides, worksheets, exam tips, videos, parent resources, and
            AI learning tools for students and professionals.
          </p>

          <div className="relative mx-auto mt-10 max-w-2xl">
            <Search
              size={22}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40"
            />
            <input
              placeholder="Search resources..."
              className="h-16 w-full rounded-full border border-white/10 bg-white/10 pl-14 pr-6 text-white outline-none backdrop-blur placeholder:text-white/45 focus:border-cyan-400"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-8xl">
          <div className="mb-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-600">
              Browse by Category
            </p>
            <h2 className="mt-3 text-4xl font-black">Find what you need.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {resourceCategories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.title}
                  href={category.href}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                  <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-600">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-2xl font-black">{category.title}</h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {category.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 font-bold text-cyan-600">
                    Explore
                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-8xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-600">
                Featured Resources
              </p>
              <h2 className="mt-3 text-4xl font-black">Start with these.</h2>
            </div>

            <Link
              href="/resources/study-guides"
              className="inline-flex items-center gap-2 font-bold text-cyan-600">
              View All Resources <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredResources.map((resource) => (
              <ResourceCard
                key={resource.title}
                title={resource.title}
                description={resource.description}
                href={resource.href}
                type={resource.type}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-8xl rounded-[2.5rem] bg-[#041f3d] p-8 text-white md:p-12">
          <div className="mb-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
              Popular Downloads
            </p>
            <h2 className="mt-3 text-4xl font-black">
              Printable tools for better studying.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {popularDownloads.map((download) => {
              const Icon = download.icon;

              return (
                <Link
                  key={download.title}
                  href={download.href}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
                  <Icon className="mb-5 text-cyan-400" size={30} />
                  <h3 className="text-xl font-black">{download.title}</h3>
                  <p className="mt-3 text-sm text-white/60">
                    Free PDF Download
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
