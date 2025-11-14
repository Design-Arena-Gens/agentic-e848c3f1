"use client";

import { Plus, MoreHorizontal, Circle, Clock, User } from "lucide-react";
import clsx from "clsx";

interface MainContentProps {
  activeView: string;
}

type Priority = "high" | "medium" | "low";

const tasks = [
  {
    id: 1,
    title: "Implementar autenticação de usuários",
    description: "Criar sistema de login e registro com OAuth",
    status: "in-progress",
    priority: "high" as Priority,
    assignee: "João Silva",
    team: "Engineering",
    teamColor: "#5e6ad2",
    date: "Hoje"
  },
  {
    id: 2,
    title: "Redesign da página principal",
    description: "Atualizar o design conforme o novo brand guideline",
    status: "todo",
    priority: "medium" as Priority,
    assignee: "Maria Santos",
    team: "Design",
    teamColor: "#26b5ce",
    date: "Amanhã"
  },
  {
    id: 3,
    title: "Otimizar performance do banco de dados",
    description: "Adicionar índices e otimizar queries lentas",
    status: "in-progress",
    priority: "high" as Priority,
    assignee: "Pedro Costa",
    team: "Engineering",
    teamColor: "#5e6ad2",
    date: "Esta semana"
  },
  {
    id: 4,
    title: "Criar campanha de email marketing",
    description: "Desenvolver template e conteúdo para newsletter",
    status: "todo",
    priority: "low" as Priority,
    assignee: "Ana Oliveira",
    team: "Marketing",
    teamColor: "#f2c94c",
    date: "Próxima semana"
  },
  {
    id: 5,
    title: "Implementar testes E2E",
    description: "Configurar Playwright e criar suite de testes",
    status: "todo",
    priority: "medium" as Priority,
    assignee: "Carlos Lima",
    team: "Engineering",
    teamColor: "#5e6ad2",
    date: "Esta semana"
  },
];

const priorityColors: Record<Priority, string> = {
  high: "text-red-400",
  medium: "text-yellow-400",
  low: "text-gray-400",
};

export default function MainContent({ activeView }: MainContentProps) {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-5xl mx-auto p-6">
        {/* Quick Actions */}
        <div className="mb-6">
          <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors text-sm font-medium">
            <Plus size={16} />
            Nova tarefa
          </button>
        </div>

        {/* Tasks List */}
        <div className="space-y-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="group bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-lg p-4 hover:border-gray-600 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-3">
                {/* Status Icon */}
                <button className="mt-1 p-1 rounded hover:bg-[var(--hover-bg)]">
                  <Circle
                    size={16}
                    className={clsx(
                      task.status === "in-progress" && "text-[var(--accent)] fill-[var(--accent)]",
                      task.status === "todo" && "text-gray-500"
                    )}
                  />
                </button>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-white mb-1">
                        {task.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-3">
                        {task.description}
                      </p>

                      {/* Metadata */}
                      <div className="flex items-center gap-4 text-xs">
                        <div className="flex items-center gap-1.5">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: task.teamColor }}
                          />
                          <span className="text-gray-400">{task.team}</span>
                        </div>

                        <div className="flex items-center gap-1.5 text-gray-400">
                          <User size={12} />
                          <span>{task.assignee}</span>
                        </div>

                        <div className="flex items-center gap-1.5 text-gray-400">
                          <Clock size={12} />
                          <span>{task.date}</span>
                        </div>

                        <div className={clsx("flex items-center gap-1.5", priorityColors[task.priority])}>
                          <Circle size={6} className="fill-current" />
                          <span className="capitalize">{task.priority}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <button className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-[var(--hover-bg)] transition-opacity">
                      <MoreHorizontal size={16} className="text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State for other views */}
        {activeView !== "inbox" && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-[var(--hover-bg)] flex items-center justify-center mb-4">
              <Circle size={24} className="text-gray-500" />
            </div>
            <h3 className="text-lg font-medium mb-2">Nenhuma tarefa</h3>
            <p className="text-sm text-gray-400 mb-4">
              Você não tem tarefas nesta seção ainda.
            </p>
            <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors text-sm font-medium">
              <Plus size={16} />
              Criar tarefa
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
