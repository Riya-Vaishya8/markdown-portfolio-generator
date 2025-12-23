"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

/* ---------- TEMPLATES ---------- */
const templates = {
  resume: `# Riya

## About Me
Passionate computer science student focused on building real-world web applications.

## Skills
- JavaScript
- React
- Next.js
- Git & GitHub

## Education
B.Tech in Computer Science

## Contact
Email: your-email@example.com  
GitHub: https://github.com/your-username
`,

  portfolio: `# Riya's Portfolio

## 👩‍💻 About
I love creating clean, functional, and user-friendly web apps.

## 🚀 Projects
### Developer Portfolio Generator
Markdown-based portfolio website.

### Habit Tracker
Progress tracking with analytics.

## 🛠 Tech Stack
React, Next.js, Tailwind CSS

## 🔗 Links
GitHub: https://github.com/your-username
`,

  blog: `# My Tech Blog

## Why I Love Web Development
Web development allows me to turn ideas into reality.

## Learning Next.js
Next.js simplifies routing, performance, and deployment.

## Final Thoughts
Consistency beats motivation.
`
};

export default function MarkdownEditor() {
  const [template, setTemplate] =
    useState<keyof typeof templates>("resume");
  const [markdown, setMarkdown] =
    useState<string>(templates.resume);

  /* ---------- TEMPLATE CHANGE ---------- */
  const handleTemplateChange = (
    value: keyof typeof templates
  ) => {
    setTemplate(value);
    setMarkdown(templates[value]);
  };

  /* ---------- EXPORT HTML ---------- */
  const exportHTML = () => {
    const preview = document.getElementById("preview");
    if (!preview) return;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Exported Portfolio</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      max-width: 800px;
      margin: auto;
      line-height: 1.6;
    }
  </style>
</head>
<body>
${preview.innerHTML}
</body>
</html>
    `;

    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "portfolio.html";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">
          Markdown Portfolio Generator
        </h1>

        <button
          onClick={exportHTML}
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Export HTML
        </button>
      </div>

      {/* TEMPLATE SELECTOR */}
      <div>
        <label className="block mb-2 font-semibold">
          Select Template
        </label>
        <select
          className="border rounded-lg p-2"
          value={template}
          onChange={(e) =>
            handleTemplateChange(
              e.target.value as keyof typeof templates
            )
          }
        >
          <option value="resume">Resume</option>
          <option value="portfolio">Portfolio</option>
          <option value="blog">Blog</option>
        </select>
      </div>

      {/* EDITOR + PREVIEW */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* INPUT */}
        <div>
          <h2 className="font-semibold mb-2">
            Markdown Input
          </h2>
          <textarea
            className="w-full h-[400px] p-4 rounded-lg border resize-none"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
        </div>

        {/* PREVIEW */}
        <div>
          <h2 className="font-semibold mb-2">
            Live Preview
          </h2>
          <div
            id="preview"
            className="h-[400px] p-4 rounded-lg border overflow-y-auto bg-white text-black"
          >
            <ReactMarkdown>
              {markdown}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}



