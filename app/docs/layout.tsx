import React from "react";
import { Toaster } from "@/components/ui/toaster";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import Logo from "../../assets/logo.svg";
import Image from "next/image";

export const metadata = {
  title: "Job Hopper - Documentation",
  description: "Documentation for the Job Hopper application",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-muted py-4 px-8 flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} alt="logo" className="h-8 w-auto" />
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/jobs" className="text-sm font-medium hover:text-primary">
            Back to App
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main>
        <Toaster />
        {children}
      </main>
    </div>
  );
}
