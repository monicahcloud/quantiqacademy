"use server";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function enrollInCourse(courseId: string) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });

  if (!user) {
    redirect("/onboarding");
  }

  await prisma.enrollment.upsert({
    where: {
      userId_courseId: {
        userId: user.id,
        courseId,
      },
    },
    update: {},
    create: {
      userId: user.id,
      courseId,
      progress: 0,
    },
  });

  redirect("/dashboard");
}
