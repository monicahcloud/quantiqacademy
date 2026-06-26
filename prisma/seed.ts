import { CourseLevel, PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

const courses = [
  {
    title: "BJC Mathematics Prep",
    slug: "bjc-mathematics-prep",
    description:
      "Master the complete BJC Mathematics curriculum through interactive lessons, practice questions, mock exams, and AI tutoring.",
    exam: "BJC",
    subject: "Mathematics",
    level: CourseLevel.EXAM_READY,
    duration: "8 Weeks",
    image: "/images/bjc.png",
    rating: 5,
    lessonCount: 42,
    featured: true,

    modules: [
      {
        title: "Course Orientation & Diagnostic",
        assessmentTitle: "Diagnostic Assessment",
        lessons: [
          "Welcome to BJC Mathematics",
          "Understanding the BJC Examination",
          "Diagnostic Assessment",
        ],
      },
      {
        title: "Number & Operations",
        assessmentTitle: "Number Skills Checkpoint",
        lessons: [
          "Whole Numbers",
          "Factors & Multiples",
          "Fractions",
          "Decimals",
          "Percentages",
          "Integers",
        ],
      },
      {
        title: "Algebra Foundations",
        assessmentTitle: "Algebra Assessment",
        lessons: [
          "Patterns",
          "Expressions",
          "Substitution",
          "Linear Equations",
          "Word Problems",
        ],
      },
      {
        title: "Geometry & Spatial Sense",
        assessmentTitle: "Geometry Assessment",
        lessons: [
          "Lines & Angles",
          "Triangles",
          "Quadrilaterals",
          "Transformations",
          "3D Shapes",
        ],
      },
      {
        title: "Measurement",
        assessmentTitle: "Measurement Assessment",
        lessons: [
          "Metric Units",
          "Area",
          "Perimeter",
          "Volume",
          "Scale Drawings",
        ],
      },
      {
        title: "Statistics & Probability",
        assessmentTitle: "Statistics Assessment",
        lessons: [
          "Collecting Data",
          "Graphs",
          "Mean Median Mode",
          "Probability",
        ],
      },
      {
        title: "Paper 1 Practice",
        assessmentTitle: "Paper 1 Mock Exam",
        lessons: ["Short Answer Techniques", "Timed Practice"],
      },
      {
        title: "Paper 2 Practice",
        assessmentTitle: "Paper 2 Mock Exam",
        lessons: ["Structured Questions", "Full Timed Mock"],
      },
      {
        title: "Final Review",
        assessmentTitle: "Final Readiness Assessment",
        lessons: ["Mixed Review", "Exam Strategy", "Final Mock"],
      },
    ],
  },

  {
    title: "BGCSE Mathematics Prep",
    slug: "bgcse-mathematics-prep",
    description: "Coming Soon",
    exam: "BGCSE",
    subject: "Mathematics",
    level: CourseLevel.EXAM_READY,
    duration: "10 Weeks",
    image: "/images/bgcse.png",
    rating: 5,
    lessonCount: 0,
    featured: false,
    modules: [],
  },

  {
    title: "SAT Complete Prep",
    slug: "sat-complete-prep",
    description: "Coming Soon",
    exam: "SAT",
    subject: "Complete",
    level: CourseLevel.EXAM_READY,
    duration: "12 Weeks",
    image: "/images/sat.png",
    rating: 5,
    lessonCount: 0,
    featured: false,
    modules: [],
  },

  {
    title: "ACT Complete Prep",
    slug: "act-complete-prep",
    description: "Coming Soon",
    exam: "ACT",
    subject: "Complete",
    level: CourseLevel.EXAM_READY,
    duration: "12 Weeks",
    image: "/images/act.png",
    rating: 5,
    lessonCount: 0,
    featured: false,
    modules: [],
  },
];

async function main() {
  for (const course of courses) {
    await prisma.course.upsert({
      where: {
        slug: course.slug,
      },

      update: {
        title: course.title,
        description: course.description,
        exam: course.exam,
        subject: course.subject,
        level: course.level,
        duration: course.duration,
        image: course.image,
        rating: course.rating,
        lessonCount: course.lessonCount,
        featured: course.featured,
        isPublished: true,
      },

      create: {
        title: course.title,
        slug: course.slug,
        description: course.description,
        exam: course.exam,
        subject: course.subject,
        level: course.level,
        duration: course.duration,
        image: course.image,
        rating: course.rating,
        lessonCount: course.lessonCount,
        featured: course.featured,
        isPublished: true,

        modules: {
          create: course.modules.map((module, moduleIndex) => ({
            title: module.title,
            order: moduleIndex + 1,
            assessmentTitle: module.assessmentTitle,

            lessons: {
              create: module.lessons.map((lesson, lessonIndex) => ({
                title: lesson,
                order: lessonIndex + 1,
                isPublished: true,
                isPreview: moduleIndex === 0 && lessonIndex < 2,
              })),
            },
          })),
        },
      },
    });
  }

  console.log("✅ Database seeded.");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
