"use client";

import { useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(false);

  return (
    <header className={`flex justify-between items-center px-6 py-4 ${dark ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <h1 className="text-xl font-bold">Developer Portfolio Generator</h1>

      <button
        onClick={() => setDark(!dark)}
        className="px-4 py-2 rounded bg-black text-white"
      >
        Toggle Theme
      </button>
    </header>
  );
}
