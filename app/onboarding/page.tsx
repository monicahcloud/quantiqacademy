import { syncUser } from "@/app/actions/user";
import OnboardingForm from "@/components/onboarding/OnboardingForm";

export default async function OnboardingPage() {
  await syncUser();

  return <OnboardingForm />;
}
