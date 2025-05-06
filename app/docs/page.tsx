"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Section } from "./types";
import { docContent } from "./content/docContent";
import { DocsContentRenderer } from "./content/DocsContentRenderer";

const sections: Section[] = [
  { id: "overview", title: "Overview" },
  { id: "architecture", title: "Architecture" },
  { id: "authentication", title: "Authentication" },
  { id: "database", title: "Database Schema" },
  { id: "frontend", title: "Frontend Components" },
  { id: "backend", title: "Backend Services" },
  { id: "api", title: "API Reference" },
  { id: "routing", title: "Routing Structure" },
  { id: "theming", title: "Theming System" },
  { id: "deployment", title: "Deployment" },
  { id: "development", title: "Development Guide" },
];

const DocsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("overview");

  const handleSectionClick = (id: string): void => {
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-1/4 space-y-2">
            <div className="sticky top-8">
              <h2 className="text-2xl font-bold mb-4">Documentation</h2>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleSectionClick(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeSection === section.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
              <div className="mt-8">
                <Link
                  href="/jobs"
                  className="flex items-center text-primary hover:underline"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Back to app
                </Link>
              </div>
            </div>
          </aside>
          <main className="md:w-3/4 bg-card rounded-lg p-6 shadow-sm">
            {activeSection && docContent[activeSection] && (
              <section>
                <h1 className="text-3xl font-bold mb-6">
                  {docContent[activeSection].title}
                </h1>
                <DocsContentRenderer
                  items={docContent[activeSection].content}
                />
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
