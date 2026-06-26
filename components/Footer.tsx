import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Test Prep", href: "/test-prep" },
  { label: "Professional Development", href: "/courses" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

const testPrep = [
  { label: "BJC", href: "/test-prep/bjc" },
  { label: "BGCSE", href: "/test-prep/bgcse" },
  { label: "SAT", href: "/test-prep/sat" },
  { label: "ACT", href: "/test-prep/act" },
];

const resources = [
  { label: "Student Dashboard", href: "/dashboard" },
  { label: "AI Learning Coach", href: "/ai-learning" },
  { label: "Certificates", href: "/certificates" },
  { label: "Help Center", href: "/support" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#021631] text-white">
      {/* Background Glow */}
      <div className="absolute left-[-150px] top-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[140px]" />
      <div className="absolute right-[-150px] bottom-0 h-80 w-80 rounded-full bg-[#FDBF2D]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-8xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Logo */}
          <div>
            <Image
              src="/images/logodark.png"
              alt="QuantIQ Academy"
              width={260}
              height={90}
              className="h-16 w-auto"
            />

            <p className="mt-6 max-w-md leading-8 text-white/70">
              QuantIQ Academy empowers students and professionals through
              intelligent learning, AI-powered tutoring, evidence-based
              instruction, and career-ready education.
            </p>

            {/* <div className="mt-8 flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-cyan-400 hover:text-[#021631]">
                  <Icon size={18} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-black">Quick Links</h3>

            <div className="space-y-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-white/70 transition hover:text-cyan-400">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Test Prep */}
          <div>
            <h3 className="mb-6 text-lg font-black">Test Prep</h3>

            <div className="space-y-4">
              {testPrep.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-white/70 transition hover:text-cyan-400">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-black">Contact</h3>

            <div className="space-y-5 text-white/70">
              <div className="flex gap-3">
                <Mail className="mt-1 text-cyan-400" size={18} />
                <span>info@quantiqacademy.com</span>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-1 text-cyan-400" size={18} />
                <span>(242) 000-0000</span>
              </div>

              <div className="flex gap-3">
                <MapPin className="mt-1 text-cyan-400" size={18} />
                <span>Nassau, Bahamas</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-cyan-400 px-6 py-3 font-bold text-[#021631] transition hover:bg-cyan-300">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 text-sm text-white/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} QuantIQ Academy. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="hover:text-cyan-400">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-cyan-400">
              Terms of Service
            </Link>

            <Link href="/cookies" className="hover:text-cyan-400">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
