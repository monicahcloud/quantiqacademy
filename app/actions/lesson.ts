"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function completeLesson(lessonId: string) {
  const { userId } = await auth();

  if (!userId) return;

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
  });

  if (!user) return;

  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    include: {
      module: {
        include: {
          course: {
            include: {
              modules: {
                include: {
                  lessons: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!lesson) return;

  const enrollment = await prisma.enrollment.findUnique({
    where: {
      userId_courseId: {
        userId: user.id,
        courseId: lesson.module.course.id,
      },
    },
  });

  if (!enrollment) return;

  await prisma.lessonProgress.upsert({
    where: {
      enrollmentId_lessonId: {
        enrollmentId: enrollment.id,
        lessonId,
      },
    },
    update: {
      completed: true,
      completedAt: new Date(),
    },
    create: {
      enrollmentId: enrollment.id,
      lessonId,
      completed: true,
      completedAt: new Date(),
    },
  });

  const totalLessons = lesson.module.course.modules.reduce(
    (total, module) => total + module.lessons.length,
    0,
  );

  const completedLessons = await prisma.lessonProgress.count({
    where: {
      enrollmentId: enrollment.id,
      completed: true,
    },
  });

  const progress =
    totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  await prisma.enrollment.update({
    where: { id: enrollment.id },
    data: { progress },
  });

  revalidatePath(`/learn/lesson/${lessonId}`);
  revalidatePath("/dashboard");
}
