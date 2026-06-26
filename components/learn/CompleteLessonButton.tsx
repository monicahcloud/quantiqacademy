"use client";

import Link from "next/link";
import { useTransition } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { completeLesson } from "@/app/actions/lesson";

export default function CompleteLessonButton({
  lessonId,
  completed,
  nextLessonId,
}: {
  lessonId: string;
  completed: boolean;
  nextLessonId?: string;
}) {
  const [isPending, startTransition] = useTransition();

  if (completed && nextLessonId) {
    return (
      <Link
        href={`/learn/lesson/${nextLessonId}`}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#041f3d] px-6 py-3 font-black text-white transition hover:bg-[#082b57]">
        Continue to Next Lesson
        <ArrowRight size={18} />
      </Link>
    );
  }

  if (completed) {
    return (
      <Link
        href="/dashboard"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FDBF2D] px-6 py-3 font-black text-[#041f3d]">
        Lesson Completed — Return to Dashboard
        <CheckCircle2 size={18} />
      </Link>
    );
  }

  return (
    <button
      onClick={() =>
        startTransition(async () => {
          await completeLesson(lessonId);
        })
      }
      disabled={isPending}
      className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-black text-[#041f3d] transition hover:bg-cyan-300 disabled:opacity-60">
      <CheckCircle2 size={18} />
      {isPending ? "Saving..." : "Mark Lesson Complete"}
    </button>
  );
}
