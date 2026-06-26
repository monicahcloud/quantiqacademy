"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Lock, PlayCircle } from "lucide-react";

type LessonItem = {
  id: string;
  title: string;
  isPreview: boolean;
};

type ModuleItem = {
  id: string;
  title: string;
  lessons: LessonItem[];
};

export default function CurriculumAccordion({
  modules,
  activeLessonId,
  isEnrolled,
  completedLessonIds,
}: {
  modules: ModuleItem[];
  activeLessonId: string;
  isEnrolled: boolean;
  completedLessonIds: string[];
}) {
  const activeModule = modules.find((module) =>
    module.lessons.some((lesson) => lesson.id === activeLessonId),
  );

  const [openModules, setOpenModules] = useState<string[]>(
    activeModule ? [activeModule.id] : [modules[0]?.id],
  );
  const completedSet = new Set(completedLessonIds);

  const flatLessons = modules.flatMap((module) => module.lessons);

  function toggleModule(moduleId: string) {
    setOpenModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId],
    );
  }

  return (
    <div className="mt-6 space-y-3">
      {modules.map((module) => {
        const isOpen = openModules.includes(module.id);

        return (
          <div
            key={module.id}
            className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
            <button
              type="button"
              onClick={() => toggleModule(module.id)}
              className="flex w-full items-center justify-between gap-4 p-4 text-left">
              <div>
                <h2 className="text-sm font-black uppercase tracking-wide text-slate-600">
                  {module.title}
                </h2>

                <p className="mt-1 text-xs font-bold text-slate-400">
                  {module.lessons.length} lessons
                </p>
              </div>

              <ChevronDown
                size={20}
                className={`shrink-0 transition ${
                  isOpen ? "rotate-180 text-cyan-600" : "text-slate-400"
                }`}
              />
            </button>

            {isOpen && (
              <div className="space-y-2 border-t border-slate-100 bg-white p-3">
                {module.lessons.map((item) => {
                  const lessonIndex = flatLessons.findIndex(
                    (lesson) => lesson.id === item.id,
                  );

                  const previousLesson =
                    lessonIndex > 0 ? flatLessons[lessonIndex - 1] : null;

                  const previousCompleted = previousLesson
                    ? completedSet.has(previousLesson.id)
                    : true;

                  const guidedLocked =
                    !item.isPreview && isEnrolled && !previousCompleted;

                  const locked =
                    (!item.isPreview && !isEnrolled) || guidedLocked;
                  const active = item.id === activeLessonId;

                  if (locked) {
                    return (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 text-slate-400">
                        <Lock size={17} />
                        <span className="text-sm font-bold">{item.title}</span>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.id}
                      href={`/learn/lesson/${item.id}`}
                      className={`flex items-center gap-3 rounded-2xl p-3 text-sm font-bold transition ${
                        active
                          ? "bg-cyan-400 text-[#041f3d]"
                          : "bg-slate-50 text-slate-700 hover:bg-cyan-50"
                      }`}>
                      <PlayCircle size={17} />
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
