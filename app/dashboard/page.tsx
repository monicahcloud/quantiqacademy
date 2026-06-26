// src/app/dashboard/page.tsx
import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <main className="min-h-screen bg-[#f7fafc] px-6 py-32 text-[#041f3d]">
      <div className="mx-auto max-w-8xl">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-600">
          Student Dashboard
        </p>

        <h1 className="mt-4 text-5xl font-black">
          Welcome{user?.firstName ? `, ${user.firstName}` : ""}.
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Your QuantIQ Academy learning dashboard is being built.
        </p>
      </div>
    </main>
  );
}
