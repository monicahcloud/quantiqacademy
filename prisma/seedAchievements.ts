import "dotenv/config";
import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  }),
});

const achievements = [
  {
    key: "FIRST_LESSON",
    title: "First Lesson",
    description: "Complete your first lesson.",
    icon: "🎓",
    xpReward: 10,
  },
  {
    key: "FIRST_QUIZ",
    title: "Quiz Beginner",
    description: "Pass your first quiz.",
    icon: "📝",
    xpReward: 25,
  },
  {
    key: "MODULE_MASTER",
    title: "Module Master",
    description: "Complete an entire module.",
    icon: "📚",
    xpReward: 50,
  },
  {
    key: "COURSE_COMPLETE",
    title: "Course Champion",
    description: "Complete an entire course.",
    icon: "🏆",
    xpReward: 100,
  },
  {
    key: "XP_100",
    title: "100 XP",
    description: "Earn your first 100 XP.",
    icon: "⭐",
    xpReward: 0,
  },
  {
    key: "STREAK_7",
    title: "7 Day Streak",
    description: "Study for seven consecutive days.",
    icon: "🔥",
    xpReward: 50,
  },
];

async function main() {
  for (const achievement of achievements) {
    await prisma.achievement.upsert({
      where: {
        key: achievement.key,
      },
      update: achievement,
      create: achievement,
    });
  }

  console.log("✅ Achievements seeded.");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
