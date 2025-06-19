'use client';

import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Fish,
  Package,
  Users,
  LineChart,
  Lightbulb,
  Trophy,
} from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

interface SidebarItem {
  label: string;
  icon: React.ReactNode;
}

const categories: SidebarItem[] = [
  { label: 'Hook', icon: <Fish size={16} /> },
  { label: 'Framework', icon: <Package size={16} /> },
  { label: 'Social Proof', icon: <Users size={16} /> },
  { label: 'Growth Programs', icon: <LineChart size={16} /> },
  { label: 'Thinking Trails', icon: <Lightbulb size={16} /> },
  { label: 'Leaderboard', icon: <Trophy size={16} /> },
];

const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (label: string) => {
    setExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside className="w-64 border-r h-screen bg-white px-4 py-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <BookOpen className="text-blue-600" />
          <span className="font-semibold text-sm text-gray-800">Documentation</span>
        </div>
        <ChevronDown className="text-gray-400" size={16} />
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search documentation..."
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Categories */}
      <div className="uppercase text-xs font-semibold text-gray-500 mb-2 px-1">Main Categories</div>
      <ul className="space-y-2">
        {categories.map(({ label, icon }) => (
          <li key={label}>
            <button
              onClick={() => toggleExpand(label)}
              className="w-full flex items-center justify-between px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <div className="flex items-center space-x-2">
                {icon}
                <span>{label}</span>
              </div>
              {expanded[label] ? (
                <ChevronUp size={16} className="text-gray-400" />
              ) : (
                <ChevronDown size={16} className="text-gray-400" />
              )}
            </button>
            {/* Expandable submenu placeholder */}
            {expanded[label] && (
              <div className="pl-7 pt-1 text-xs text-gray-600">
                <p className="py-1">Subitem 1</p>
                <p className="py-1">Subitem 2</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
