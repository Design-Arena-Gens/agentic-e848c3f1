"use client";

import {
  Inbox,
  CheckSquare,
  Archive,
  Users,
  Settings,
  Plus,
  ChevronLeft,
  ChevronRight,
  Search,
  Calendar,
  Zap,
  BarChart3
} from "lucide-react";
import clsx from "clsx";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  activeView: string;
  onViewChange: (view: string) => void;
}

const menuItems = [
  { id: "inbox", icon: Inbox, label: "Inbox", count: 12 },
  { id: "today", icon: Calendar, label: "Hoje", count: 5 },
  { id: "upcoming", icon: Zap, label: "Em breve", count: 8 },
  { id: "completed", icon: CheckSquare, label: "Concluídos" },
  { id: "archive", icon: Archive, label: "Arquivados" },
];

const teams = [
  { id: "engineering", name: "Engineering", color: "#5e6ad2" },
  { id: "design", name: "Design", color: "#26b5ce" },
  { id: "marketing", name: "Marketing", color: "#f2c94c" },
];

export default function Sidebar({ collapsed, onToggle, activeView, onViewChange }: SidebarProps) {
  return (
    <aside
      className={clsx(
        "relative flex flex-col bg-[var(--sidebar-bg)] border-r border-[var(--border-color)] transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[var(--border-color)]">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent)] to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="font-semibold text-sm">Linear</span>
          </div>
        )}
        <button
          onClick={onToggle}
          className="p-1.5 rounded-md hover:bg-[var(--hover-bg)] transition-colors"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Search */}
      {!collapsed && (
        <div className="p-3">
          <div className="flex items-center gap-2 px-3 py-2 bg-[var(--hover-bg)] rounded-md border border-[var(--border-color)]">
            <Search size={16} className="text-gray-500" />
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-transparent border-none outline-none text-sm w-full placeholder-gray-500"
            />
            <kbd className="text-xs text-gray-500">⌘K</kbd>
          </div>
        </div>
      )}

      {/* Main Menu */}
      <nav className="flex-1 overflow-y-auto py-2">
        <div className="px-2 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={clsx(
                "w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm",
                activeView === item.id
                  ? "bg-[var(--hover-bg)] text-white"
                  : "text-gray-400 hover:bg-[var(--hover-bg)] hover:text-white"
              )}
            >
              <item.icon size={18} />
              {!collapsed && (
                <>
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.count && (
                    <span className="text-xs text-gray-500">{item.count}</span>
                  )}
                </>
              )}
            </button>
          ))}
        </div>

        {/* Teams */}
        {!collapsed && (
          <div className="mt-6 px-2">
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Times
              </span>
              <button className="p-0.5 rounded hover:bg-[var(--hover-bg)]">
                <Plus size={14} className="text-gray-500" />
              </button>
            </div>
            <div className="space-y-1 mt-2">
              {teams.map((team) => (
                <button
                  key={team.id}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-gray-400 hover:bg-[var(--hover-bg)] hover:text-white transition-colors text-sm"
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: team.color }}
                  />
                  <span className="flex-1 text-left">{team.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Bottom Actions */}
      <div className="border-t border-[var(--border-color)] p-2">
        <button
          className={clsx(
            "w-full flex items-center gap-3 px-3 py-2 rounded-md text-gray-400 hover:bg-[var(--hover-bg)] hover:text-white transition-colors text-sm",
            collapsed && "justify-center"
          )}
        >
          <BarChart3 size={18} />
          {!collapsed && <span>Insights</span>}
        </button>
        <button
          className={clsx(
            "w-full flex items-center gap-3 px-3 py-2 rounded-md text-gray-400 hover:bg-[var(--hover-bg)] hover:text-white transition-colors text-sm",
            collapsed && "justify-center"
          )}
        >
          <Settings size={18} />
          {!collapsed && <span>Configurações</span>}
        </button>
      </div>

      {/* User Profile */}
      {!collapsed && (
        <div className="border-t border-[var(--border-color)] p-3">
          <div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-[var(--hover-bg)] cursor-pointer transition-colors">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-medium text-sm">U</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">Usuário</div>
              <div className="text-xs text-gray-500 truncate">usuario@email.com</div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
