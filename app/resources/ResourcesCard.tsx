import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ResourceCardProps = {
  title: string;
  description: string;
  href: string;
  type?: string;
};

export default function ResourceCard({
  title,
  description,
  href,
  type,
}: ResourceCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
      {type && (
        <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-cyan-600">
          {type}
        </p>
      )}

      <h3 className="text-2xl font-black text-[#041f3d]">{title}</h3>

      <p className="mt-4 leading-7 text-slate-600">{description}</p>

      <span className="mt-6 inline-flex items-center gap-2 font-bold text-cyan-600">
        View Resource
        <ArrowRight
          size={17}
          className="transition group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
