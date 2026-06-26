import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f7fafc] px-6 py-28 text-[#041f3d]">
      <div className="absolute left-[-160px] top-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-[140px]" />
      <div className="absolute bottom-0 right-[-160px] h-96 w-96 rounded-full bg-[#FDBF2D]/20 blur-[140px]" />

      <div className="relative mx-auto grid max-w-8xl px-20 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-600">
            Contact QuantIQ Academy
          </p>

          <h2 className="mt-4 text-5xl font-black leading-tight md:text-6xl">
            Have questions about learning with us?
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Whether you are a student, parent, school, or organization, we would
            love to help you find the right learning path.
          </p>

          <div className="mt-8 grid gap-4">
            <ContactItem
              icon={Mail}
              label="Email"
              value="info@quantiqacademy.com"
            />
            <ContactItem icon={Phone} label="Phone" value="(242) 000-0000" />
            <ContactItem
              icon={MapPin}
              label="Location"
              value="Nassau, Bahamas"
            />
          </div>
        </div>

        <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-2xl md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-600">
              <MessageCircle size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-black">Send a Message</h3>
              <p className="text-sm text-slate-500">
                We will respond as soon as possible.
              </p>
            </div>
          </div>

          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="h-14 rounded-2xl border border-slate-200 bg-slate-50 px-5 outline-none transition focus:border-cyan-400 focus:bg-white"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="h-14 rounded-2xl border border-slate-200 bg-slate-50 px-5 outline-none transition focus:border-cyan-400 focus:bg-white"
            />

            <select className="h-14 rounded-2xl border border-slate-200 bg-slate-50 px-5 outline-none transition focus:border-cyan-400 focus:bg-white">
              <option>What are you interested in?</option>
              <option>Test Prep</option>
              <option>Professional Development</option>
              <option>School Partnership</option>
              <option>Corporate Training</option>
              <option>General Question</option>
            </select>

            <textarea
              placeholder="Message"
              rows={5}
              className="resize-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-cyan-400 focus:bg-white"
            />

            <button
              type="submit"
              className="mt-2 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#041f3d] px-6 font-black text-white transition hover:-translate-y-1 hover:bg-[#082b57]">
              Send Message
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-slate-500">
            Prefer email?{" "}
            <Link
              href="mailto:info@quantiqacademy.com"
              className="font-bold text-cyan-600">
              info@quantiqacademy.com
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex size-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-600">
        <Icon size={22} />
      </div>
      <div>
        <p className="text-sm font-bold uppercase tracking-wide text-slate-400">
          {label}
        </p>
        <p className="font-black">{value}</p>
      </div>
    </div>
  );
}
