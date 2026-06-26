"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

type Answer = {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string | null;
};

type Question = {
  id: string;
  prompt: string;
  answers: Answer[];
};

type Quiz = {
  id: string;
  title: string;
  questions: Question[];
};

export default function LessonQuiz({ quiz }: { quiz: Quiz | null }) {
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string>
  >({});
  const [submitted, setSubmitted] = useState(false);

  if (!quiz || quiz.questions.length === 0) {
    return (
      <p className="mt-4 leading-8 text-slate-600">
        Quiz questions will be added soon.
      </p>
    );
  }

  const score = quiz.questions.reduce((total, question) => {
    const selectedId = selectedAnswers[question.id];
    const selected = question.answers.find(
      (answer) => answer.id === selectedId,
    );
    return selected?.isCorrect ? total + 1 : total;
  }, 0);

  return (
    <div className="mt-6 space-y-6">
      <h3 className="text-2xl font-black">{quiz.title}</h3>

      {quiz.questions.map((question, index) => {
        const selectedId = selectedAnswers[question.id];
        const selected = question.answers.find(
          (answer) => answer.id === selectedId,
        );

        return (
          <div key={question.id} className="rounded-2xl bg-slate-50 p-5">
            <p className="font-black">
              {index + 1}. {question.prompt}
            </p>

            <div className="mt-4 space-y-3">
              {question.answers.map((answer) => {
                const isSelected = selectedId === answer.id;
                const showCorrect = submitted && answer.isCorrect;
                const showWrong = submitted && isSelected && !answer.isCorrect;

                return (
                  <button
                    key={answer.id}
                    type="button"
                    disabled={submitted}
                    onClick={() =>
                      setSelectedAnswers((prev) => ({
                        ...prev,
                        [question.id]: answer.id,
                      }))
                    }
                    className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left font-bold transition ${
                      showCorrect
                        ? "border-green-300 bg-green-50 text-green-700"
                        : showWrong
                          ? "border-red-300 bg-red-50 text-red-700"
                          : isSelected
                            ? "border-cyan-400 bg-cyan-50 text-[#041f3d]"
                            : "border-slate-200 bg-white text-slate-700 hover:border-cyan-300"
                    }`}>
                    {answer.text}

                    {showCorrect && <CheckCircle2 size={18} />}
                    {showWrong && <XCircle size={18} />}
                  </button>
                );
              })}
            </div>

            {submitted && selected?.explanation && (
              <p className="mt-4 rounded-xl bg-white p-4 text-sm leading-6 text-slate-600">
                {selected.explanation}
              </p>
            )}
          </div>
        );
      })}

      {!submitted ? (
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          className="rounded-full bg-[#041f3d] px-6 py-3 font-black text-white">
          Submit Quiz
        </button>
      ) : (
        <div className="rounded-2xl bg-cyan-50 p-5">
          <p className="text-xl font-black">
            Score: {score} / {quiz.questions.length}
          </p>
        </div>
      )}
    </div>
  );
}
