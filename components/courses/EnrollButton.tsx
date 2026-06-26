"use client";

import { useTransition } from "react";
import { enrollInCourse } from "@/app/actions/enrollment";

export default function EnrollButton({ courseId }: { courseId: string }) {
  const [pending, startTransition] = useTransition();

  return (
    <button
      disabled={pending}
      onClick={() =>
        startTransition(async () => {
          await enrollInCourse(courseId);
        })
      }
      className="mt-6 w-full rounded-full bg-[#FDBF2D] py-4 font-black text-[#041f3d] transition hover:scale-[1.02] disabled:opacity-50">
      {pending ? "Enrolling..." : "Enroll Now"}
    </button>
  );
}
