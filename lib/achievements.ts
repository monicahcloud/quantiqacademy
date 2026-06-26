import { prisma } from "@/lib/prisma";

export async function awardAchievement(userId: string, key: string) {
  const achievement = await prisma.achievement.findUnique({
    where: { key },
  });

  if (!achievement) return null;

  const existing = await prisma.userAchievement.findUnique({
    where: {
      userId_achievementId: {
        userId,
        achievementId: achievement.id,
      },
    },
  });

  if (existing) return existing;

  const userAchievement = await prisma.userAchievement.create({
    data: {
      userId,
      achievementId: achievement.id,
    },
  });

  if (achievement.xpReward > 0) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (user) {
      const newXp = user.xp + achievement.xpReward;
      const newLevel = Math.floor(newXp / 100) + 1;

      await prisma.user.update({
        where: { id: userId },
        data: {
          xp: newXp,
          level: newLevel,
        },
      });
    }
  }

  return userAchievement;
}
