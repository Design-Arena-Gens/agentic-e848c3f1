"use client";

import { Bell, Command } from "lucide-react";

export default function Header() {
  return (
    <header className="h-14 border-b border-[var(--border-color)] flex items-center justify-between px-6 bg-[var(--background)]">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold">Inbox</h1>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 text-xs rounded-md bg-[var(--hover-bg)] hover:bg-[#252525] transition-colors border border-[var(--border-color)]">
            Todos
          </button>
          <button className="px-3 py-1.5 text-xs rounded-md hover:bg-[var(--hover-bg)] transition-colors text-gray-400">
            Pendentes
          </button>
          <button className="px-3 py-1.5 text-xs rounded-md hover:bg-[var(--hover-bg)] transition-colors text-gray-400">
            Concluídos
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 rounded-md hover:bg-[var(--hover-bg)] transition-colors relative">
          <Bell size={18} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--accent)] rounded-full"></span>
        </button>
        <button className="p-2 rounded-md hover:bg-[var(--hover-bg)] transition-colors">
          <Command size={18} />
        </button>
      </div>
    </header>
  );
}
