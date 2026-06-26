"use client";

import { useState } from "react";
import { completeOnboarding } from "@/app/actions/user";
import {
  ArrowRight,
  ArrowLeft,
  GraduationCap,
  Users,
  BriefcaseBusiness,
  School,
  CheckCircle2,
} from "lucide-react";

const studentTypes = [
  { label: "Student", value: "student", icon: GraduationCap },
  { label: "Parent", value: "parent", icon: Users },
  { label: "Teacher", value: "teacher", icon: School },
  { label: "Professional", value: "professional", icon: BriefcaseBusiness },
];

const programs = ["BJC", "BGCSE", "SAT", "ACT", "Professional Development"];

const learningGoals = [
  "Improve grades",
  "Prepare for an exam",
  "Build confidence",
  "Learn with AI tutor",
  "Earn certificates",
  "Learn career skills",
];

const gradeLevels = [
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12",
  "College",
  "Professional",
];

export default function OnboardingForm() {
  const [step, setStep] = useState(1);
  const [studentType, setStudentType] = useState("");
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const [gradeLevel, setGradeLevel] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const totalSteps = 5;

  function toggleValue(
    value: string,
    list: string[],
    setter: (v: string[]) => void,
  ) {
    setter(
      list.includes(value)
        ? list.filter((item) => item !== value)
        : [...list, value],
    );
  }

  return (
    <main className="min-h-screen bg-[#021631] px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0b3a67_0%,#041f3d_45%,#021631_100%)]" />

      <form
        action={completeOnboarding}
        className="relative mx-auto max-w-4xl rounded-[2.5rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl md:p-12">
        <div className="mb-10">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
            QuantIQ Academy
          </p>

          <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-cyan-400 transition-all"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>

          <p className="mt-3 text-sm text-white/60">
            Step {step} of {totalSteps}
          </p>
        </div>

        {step === 1 && (
          <StepWrapper
            title="What best describes you?"
            subtitle="This helps us personalize your learning experience.">
            <div className="grid gap-4 sm:grid-cols-2">
              {studentTypes.map((type) => {
                const Icon = type.icon;
                const active = studentType === type.value;

                return (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setStudentType(type.value)}
                    className={`rounded-3xl border p-6 text-left transition ${
                      active
                        ? "border-cyan-400 bg-cyan-400 text-[#041f3d]"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}>
                    <Icon size={32} />
                    <p className="mt-4 text-xl font-black">{type.label}</p>
                  </button>
                );
              })}
            </div>

            <input type="hidden" name="studentType" value={studentType} />
          </StepWrapper>
        )}

        {step === 2 && (
          <StepWrapper
            title="What are you interested in?"
            subtitle="Choose one or more programs.">
            <div className="grid gap-4 sm:grid-cols-2">
              {programs.map((program) => {
                const active = selectedPrograms.includes(program);

                return (
                  <button
                    key={program}
                    type="button"
                    onClick={() =>
                      toggleValue(
                        program,
                        selectedPrograms,
                        setSelectedPrograms,
                      )
                    }
                    className={`flex items-center justify-between rounded-3xl border p-5 text-left font-black transition ${
                      active
                        ? "border-cyan-400 bg-cyan-400 text-[#041f3d]"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}>
                    {program}
                    {active && <CheckCircle2 size={22} />}
                  </button>
                );
              })}
            </div>

            {selectedPrograms.map((program) => (
              <input
                key={program}
                type="hidden"
                name="examGoals"
                value={program}
              />
            ))}
          </StepWrapper>
        )}

        {step === 3 && (
          <StepWrapper
            title="What level are you currently at?"
            subtitle="Choose the option that fits you best.">
            <div className="grid gap-4 sm:grid-cols-3">
              {gradeLevels.map((level) => {
                const active = gradeLevel === level;

                return (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setGradeLevel(level)}
                    className={`rounded-2xl border p-4 font-bold transition ${
                      active
                        ? "border-cyan-400 bg-cyan-400 text-[#041f3d]"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}>
                    {level}
                  </button>
                );
              })}
            </div>

            <input type="hidden" name="gradeLevel" value={gradeLevel} />
          </StepWrapper>
        )}

        {step === 4 && (
          <StepWrapper
            title="What is your school or organization?"
            subtitle="This is optional. You can skip it.">
            <input
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              placeholder="School or organization name"
              className="h-16 w-full rounded-2xl border border-white/10 bg-white/10 px-5 text-white outline-none placeholder:text-white/40 focus:border-cyan-400"
            />

            <input type="hidden" name="schoolName" value={schoolName} />
          </StepWrapper>
        )}

        {step === 5 && (
          <StepWrapper
            title="What do you want to achieve?"
            subtitle="Choose your learning goals.">
            <div className="grid gap-4 sm:grid-cols-2">
              {learningGoals.map((goal) => {
                const active = selectedGoals.includes(goal);

                return (
                  <button
                    key={goal}
                    type="button"
                    onClick={() =>
                      toggleValue(goal, selectedGoals, setSelectedGoals)
                    }
                    className={`flex items-center justify-between rounded-3xl border p-5 text-left font-black transition ${
                      active
                        ? "border-cyan-400 bg-cyan-400 text-[#041f3d]"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}>
                    {goal}
                    {active && <CheckCircle2 size={22} />}
                  </button>
                );
              })}
            </div>

            {selectedGoals.map((goal) => (
              <input
                key={goal}
                type="hidden"
                name="learningGoals"
                value={goal}
              />
            ))}
          </StepWrapper>
        )}

        <div className="mt-10 flex justify-between gap-4">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep((prev) => prev - 1)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-4 font-black text-white">
              <ArrowLeft size={18} />
              Back
            </button>
          ) : (
            <div />
          )}

          {step < totalSteps ? (
            <button
              type="button"
              onClick={() => setStep((prev) => prev + 1)}
              className="inline-flex items-center gap-2 rounded-full bg-[#FDBF2D] px-7 py-4 font-black text-[#041f3d]">
              Continue
              <ArrowRight size={18} />
            </button>
          ) : (
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-[#FDBF2D] px-7 py-4 font-black text-[#041f3d]">
              Continue to Dashboard
              <ArrowRight size={18} />
            </button>
          )}
        </div>
      </form>
    </main>
  );
}

function StepWrapper({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1 className="text-4xl font-black md:text-5xl">{title}</h1>
      <p className="mt-4 text-lg text-white/65">{subtitle}</p>
      <div className="mt-8">{children}</div>
    </section>
  );
}
