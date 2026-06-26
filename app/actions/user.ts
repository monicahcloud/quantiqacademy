// src/app/actions/user.ts
"use server";

import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function syncUser() {
  const user = await currentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const email = user.emailAddresses[0]?.emailAddress;

  if (!email) {
    throw new Error("No email found");
  }

  const dbUser = await prisma.user.upsert({
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

  return dbUser;
}
