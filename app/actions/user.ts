"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function syncUser() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const client = await clerkClient();
  const user = await client.users.getUser(userId);

  const email = user.emailAddresses[0]?.emailAddress;

  if (!email) {
    throw new Error("No email found");
  }

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
