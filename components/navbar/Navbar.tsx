"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, Search, Bell } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SearchDialog from "../layout/SearchDialog";

const testPrep = [
  {
    label: "BJC",
    href: "/test-prep/bjc",
  },
  {
    label: "BGCSE",
    href: "/test-prep/bgcse",
  },
  {
    label: "SAT",
    href: "/test-prep/sat",
  },
  {
    label: "ACT",
    href: "/test-prep/act",
  },
];

const courses = [
  {
    label: "Data Analytics",
    href: "/courses/data-analytics",
  },
  {
    label: "Power BI",
    href: "/courses/power-bi",
  },
  {
    label: "Python",
    href: "/courses/python",
  },
  {
    label: "Artificial Intelligence",
    href: "/courses/ai",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#04142f]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-8">
        {/* Logo */}

        <Link href="/" className="flex items-center">
          <Image
            src="/images/logodark.png"
            alt="QuantIQ Academy"
            width={240}
            height={90}
            priority
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop */}

        <nav className="hidden items-center gap-10 lg:flex">
          <Link
            href="/"
            className="border-b-2 border-cyan-400 pb-2 text-sm font-bold uppercase tracking-[0.18em] text-white">
            Home
          </Link>

          {/* Test Prep */}

          <div className="group relative py-6">
            <div className="flex items-center gap-1">
              <Link
                href="/test-prep"
                className="text-sm font-bold uppercase tracking-[0.18em] text-white/80 transition hover:text-cyan-400">
                Test Prep
              </Link>

              <ChevronDown
                size={16}
                className="text-white/80 transition-transform duration-200 group-hover:rotate-180 group-hover:text-cyan-400"
              />
            </div>

            <div className="invisible absolute left-0 top-full z-50 w-72 rounded-3xl border border-white/10 bg-[#071a3c] p-4 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                Exam Preparation
              </p>

              {testPrep.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Courses */}

          <div className="group relative py-6">
            <div className="flex items-center gap-1">
              <Link
                href="/courses"
                className="text-sm font-bold uppercase tracking-[0.18em] text-white/80 transition hover:text-cyan-400">
                Courses
              </Link>

              <ChevronDown
                size={16}
                className="text-white/80 transition-transform duration-200 group-hover:rotate-180 group-hover:text-cyan-400"
              />
            </div>

            <div className="invisible absolute left-0 top-full z-50 w-80 rounded-3xl border border-white/10 bg-[#071a3c] p-4 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                Professional Learning
              </p>

              {courses.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/pricing"
            className="text-sm font-bold uppercase tracking-[0.18em] text-white/80 transition hover:text-cyan-400">
            Pricing
          </Link>

          <Link
            href="/about"
            className="text-sm font-bold uppercase tracking-[0.18em] text-white/80 transition hover:text-cyan-400">
            About
          </Link>
        </nav>

        {/* Right */}

        <div className="hidden items-center gap-4 lg:flex">
          <SearchDialog />

          <Link
            href="/login"
            className="rounded-full border border-white/10 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-full bg-[#FDBF2D] px-8 py-3 text-sm font-bold text-[#04142f] transition hover:scale-105">
            Get Started
          </Link>
        </div>

        {/* Mobile */}

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="rounded-full border border-white/10 bg-white/10 p-3 text-white shadow-lg backdrop-blur transition hover:bg-white/15 lg:hidden"
              aria-label="Open menu">
              <Menu size={22} />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[90vw] overflow-y-auto border-l border-white/10 bg-[#04142f] p-0 text-white sm:max-w-md">
            <div className="relative min-h-full overflow-hidden">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-[110px]" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#FDBF2D]/15 blur-[110px]" />

              <div className="relative px-6 pb-8 pt-8">
                <div className="mb-8 flex items-center justify-between">
                  <Link href="/" onClick={() => setOpen(false)}>
                    <Image
                      src="/images/logodark.png"
                      alt="QuantIQ Academy"
                      width={220}
                      height={80}
                      className="h-14 w-auto object-contain"
                      priority
                    />
                  </Link>
                </div>

                <div className="mb-8 rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-400">
                    QuantIQ Academy
                  </p>
                  <h3 className="mt-3 text-2xl font-black leading-tight">
                    Learn smarter. Prepare better.
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    Test prep, AI tutoring, professional learning, and progress
                    tracking.
                  </p>
                </div>

                <nav className="space-y-3">
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-black uppercase tracking-[0.16em] transition hover:bg-white/10 hover:text-cyan-400">
                    Home
                  </Link>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <Link
                      href="/test-prep"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-black uppercase tracking-[0.16em] text-white hover:text-cyan-400">
                      Test Prep
                      <span className="text-xs text-cyan-400">View All</span>
                    </Link>

                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {testPrep.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="rounded-xl bg-[#071a3c] px-4 py-3 text-center text-xs font-black uppercase tracking-[0.12em] text-cyan-400 transition hover:bg-cyan-400 hover:text-[#04142f]">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <Link
                      href="/courses"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-black uppercase tracking-[0.16em] text-white hover:text-cyan-400">
                      Courses
                      <span className="text-xs text-cyan-400">Explore</span>
                    </Link>

                    <div className="mt-2 space-y-2">
                      {courses.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-xl bg-[#071a3c] px-4 py-3 text-sm font-bold text-white/75 transition hover:bg-white/10 hover:text-cyan-400">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {[
                    { label: "Pricing", href: "/pricing" },
                    { label: "About", href: "/about" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-black uppercase tracking-[0.16em] transition hover:bg-white/10 hover:text-cyan-400">
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 grid gap-3">
                  <Link
                    href="/signup"
                    onClick={() => setOpen(false)}
                    className="rounded-full bg-[#FDBF2D] px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-[#04142f] shadow-lg shadow-[#FDBF2D]/20">
                    Get Started
                  </Link>

                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="rounded-full border border-white/10 bg-white/5 px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/10">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
