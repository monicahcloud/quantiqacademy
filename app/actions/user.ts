"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function syncUser() {
  const { userId } = await auth();

  if (!userId) throw new Error("Unauthorized");

  const client = await clerkClient();
  const user = await client.users.getUser(userId);

  const email = user.emailAddresses[0]?.emailAddress;

  if (!email) throw new Error("No email found");

  return await prisma.user.upsert({
    where: { clerkId: user.id },
    update: {
      email,
      firstName: user.firstName,
      lastName: user.lastName,
    },
    create: {
      clerkId: user.id,
      email,
      firstName: user.firstName,
      lastName: user.lastName,
    },
  });
}

export async function completeOnboarding(formData: FormData) {
  const { userId } = await auth();

  if (!userId) throw new Error("Unauthorized");

  await prisma.user.update({
    where: { clerkId: userId },
    data: {
      studentType: String(formData.get("studentType") || ""),
      gradeLevel: String(formData.get("gradeLevel") || ""),
      schoolName: String(formData.get("schoolName") || ""),
      examGoals: formData.getAll("examGoals").map(String),
      learningGoals: formData.getAll("learningGoals").map(String),
      onboardingComplete: true,
    },
  });

  redirect("/dashboard");
}
