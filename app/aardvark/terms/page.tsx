import { Metadata } from "next";
import fs from "fs";
import path from "path";
import { renderMarkdown } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Terms of Service - Aardvark",
  description: "Terms of Service for Aardvark, a dictation-first productivity application by Just Because Labs.",
};

export default function TermsPage() {
  const filePath = path.join(process.cwd(), "content/aardvark/terms.md");
  const content = fs.readFileSync(filePath, "utf-8");
  const htmlContent = renderMarkdown(content);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <article
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
}
