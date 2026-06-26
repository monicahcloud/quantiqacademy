"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

type SubmitQuizInput = {
  quizId: string;
  answers: {
    questionId: string;
    selectedAnswerId: string;
  }[];
};

export async function submitQuiz(input: SubmitQuizInput) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const quiz = await prisma.quiz.findUnique({
    where: { id: input.quizId },
    include: {
      lesson: {
        include: {
          module: {
            include: {
              course: true,
            },
          },
        },
      },
      questions: {
        include: {
          answers: true,
        },
      },
    },
  });

  if (!quiz) {
    throw new Error("Quiz not found");
  }

  const enrollment = await prisma.enrollment.findUnique({
    where: {
      userId_courseId: {
        userId: user.id,
        courseId: quiz.lesson.module.course.id,
      },
    },
  });

  if (!enrollment) {
    throw new Error("Enrollment required");
  }

  let score = 0;
  let totalPoints = 0;

  const questionAttempts = quiz.questions.map((question) => {
    const submitted = input.answers.find(
      (answer) => answer.questionId === question.id,
    );

    const selectedAnswer = question.answers.find(
      (answer) => answer.id === submitted?.selectedAnswerId,
    );

    const pointsEarned = selectedAnswer?.isCorrect ? question.points : 0;

    score += pointsEarned;
    totalPoints += question.points;

    return {
      questionId: question.id,
      selectedAnswerId: selectedAnswer?.id ?? null,
      isCorrect: Boolean(selectedAnswer?.isCorrect),
      pointsEarned,
    };
  });

  const percentage =
    totalPoints > 0 ? Math.round((score / totalPoints) * 100) : 0;

  const passed = percentage >= quiz.passingScore;

  const attempt = await prisma.quizAttempt.create({
    data: {
      userId: user.id,
      quizId: quiz.id,
      enrollmentId: enrollment.id,
      score,
      totalPoints,
      percentage,
      passed,
      questionAttempts: {
        create: questionAttempts,
      },
    },
  });

  if (passed) {
    const alreadyCompleted = await prisma.lessonProgress.findUnique({
      where: {
        enrollmentId_lessonId: {
          enrollmentId: enrollment.id,
          lessonId: quiz.lesson.id,
        },
      },
    });
    await prisma.lessonProgress.upsert({
      where: {
        enrollmentId_lessonId: {
          enrollmentId: enrollment.id,
          lessonId: quiz.lesson.id,
        },
      },
      update: {
        completed: true,
        completedAt: new Date(),
      },
      create: {
        enrollmentId: enrollment.id,
        lessonId: quiz.lesson.id,
        completed: true,
        completedAt: new Date(),
      },
    });
    if (!alreadyCompleted?.completed) {
      const newXp = user.xp + quiz.lesson.xpReward;
      const newLevel = Math.floor(newXp / 100) + 1;

      await prisma.user.update({
        where: { id: user.id },
        data: {
          xp: newXp,
          level: newLevel,
        },
      });
    }
  }

  revalidatePath(`/learn/lesson/${quiz.lesson.id}`);
  revalidatePath("/dashboard");

  return {
    attemptId: attempt.id,
    score,
    totalPoints,
    percentage,
    passed,
  };
}
