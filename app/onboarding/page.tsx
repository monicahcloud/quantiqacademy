// src/app/onboarding/page.tsx
import { redirect } from "next/navigation";
import { syncUser } from "@/app/actions/user";

export default async function OnboardingPage() {
  await syncUser();

  redirect("/dashboard");
}
