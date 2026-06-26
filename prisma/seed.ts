import "dotenv/config";
import { CourseLevel, PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

type SeedLesson =
  | string
  | {
      title: string;
      summary?: string;
      content?: string;
      duration?: number;
      xpReward?: number;
      quiz?: {
        title: string;
        passingScore?: number;
        questions: {
          prompt: string;
          answers: {
            text: string;
            correct: boolean;
            explanation?: string;
          }[];
        }[];
      };
    };

function normalizeLesson(lesson: SeedLesson) {
  if (typeof lesson === "string") {
    return {
      title: lesson,
      summary: `Introduction to ${lesson}.`,
      content: `
# ${lesson}

Welcome to this lesson.

## Learning Objectives

- Understand the key concepts
- Practice BJC-style questions
- Build confidence through examples

## Lesson Notes

Lesson content will be added here.

## Key Takeaways

Review your notes before moving to the next lesson.
`,
      duration: 15,
      xpReward: 10,
      quiz: null,
    };
  }

  return {
    title: lesson.title,
    summary: lesson.summary ?? `Introduction to ${lesson.title}.`,
    content:
      lesson.content ??
      `
# ${lesson.title}

Welcome to this lesson.

## Learning Objectives

- Understand the key concepts
- Practice BJC-style questions
- Build confidence through examples

## Lesson Notes

Lesson content will be added here.

## Key Takeaways

Review your notes before moving to the next lesson.
`,
    duration: lesson.duration ?? 15,
    xpReward: lesson.xpReward ?? 10,
    quiz: lesson.quiz ?? null,
  };
}

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
          {
            title: "Welcome to BJC Mathematics",
            summary:
              "Get familiar with the BJC Mathematics course structure, expectations, and how to use QuantIQ to study effectively.",
            duration: 12,
            xpReward: 15,
            content: `
# Welcome to BJC Mathematics

Welcome to QuantIQ Academy's BJC Mathematics Prep course.

This course is designed to help you build confidence, strengthen core skills, and prepare for exam-style questions.

## What You Will Learn

- How the BJC Mathematics course is organized
- How to study with modules, lessons, and quizzes
- How to track your progress
- How to use practice questions to prepare for exams

## How to Use This Course

Start with the orientation lessons, then move through each module in order.

You will complete:

- Guided lessons
- Quick checks
- Module checkpoints
- Paper 1 practice
- Paper 2 practice
- Final review

## Study Tip

Do not rush. Mathematics improves with practice, correction, and repetition.
`,
            quiz: {
              title: "Welcome Quiz",
              passingScore: 70,
              questions: [
                {
                  prompt:
                    "What is the best way to use this BJC Mathematics course?",
                  answers: [
                    {
                      text: "Skip straight to the final exam practice.",
                      correct: false,
                      explanation:
                        "Skipping the lessons can leave gaps in your understanding.",
                    },
                    {
                      text: "Move through the lessons in order and complete the practice activities.",
                      correct: true,
                      explanation:
                        "Following the course sequence helps build understanding step by step.",
                    },
                    {
                      text: "Only watch videos without practicing.",
                      correct: false,
                      explanation:
                        "Math requires practice, not just watching or reading.",
                    },
                    {
                      text: "Only study topics you already know.",
                      correct: false,
                      explanation:
                        "The goal is to strengthen both strong and weak areas.",
                    },
                  ],
                },
                {
                  prompt: "Why are quick checks useful?",
                  answers: [
                    {
                      text: "They help you test whether you understood the lesson.",
                      correct: true,
                      explanation:
                        "Quick checks help confirm understanding before moving on.",
                    },
                    {
                      text: "They replace all studying.",
                      correct: false,
                      explanation:
                        "Quick checks support studying, but they do not replace practice.",
                    },
                    {
                      text: "They are only for grading teachers.",
                      correct: false,
                      explanation:
                        "They are mainly for helping students identify strengths and weaknesses.",
                    },
                    {
                      text: "They should be ignored.",
                      correct: false,
                      explanation:
                        "Ignoring them removes an important feedback step.",
                    },
                  ],
                },
              ],
            },
          },
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
      where: { slug: course.slug },
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
              create: module.lessons.map((rawLesson, lessonIndex) => {
                const lesson = normalizeLesson(rawLesson);

                return {
                  title: lesson.title,
                  slug: `${course.slug}-${slugify(lesson.title)}`,
                  order: lessonIndex + 1,
                  summary: lesson.summary,
                  content: lesson.content,
                  duration: lesson.duration,
                  xpReward: lesson.xpReward,
                  isPublished: true,
                  isPreview: moduleIndex === 0 && lessonIndex < 2,
                  quizzes: lesson.quiz
                    ? {
                        create: {
                          title: lesson.quiz.title,
                          passingScore: lesson.quiz.passingScore ?? 70,
                          questions: {
                            create: lesson.quiz.questions.map(
                              (question, questionIndex) => ({
                                prompt: question.prompt,
                                order: questionIndex + 1,
                                answers: {
                                  create: question.answers.map((answer) => ({
                                    text: answer.text,
                                    isCorrect: answer.correct,
                                    explanation: answer.explanation,
                                  })),
                                },
                              }),
                            ),
                          },
                        },
                      }
                    : undefined,
                };
              }),
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
