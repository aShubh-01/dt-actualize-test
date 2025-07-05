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
  Menu,
} from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

interface SidebarItem {
  label: string;
  icon: React.ReactNode;
}

const categories: SidebarItem[] = [
  { label: 'Hooks', icon: <Fish size={16} /> },
  { label: 'Frameworks', icon: <Package size={16} /> },
  { label: 'Social-Proof', icon: <Users size={16} /> },
  { label: 'Growth-Programs', icon: <LineChart size={16} /> },
  { label: 'Thinking-Trail', icon: <Lightbulb size={16} /> },
  { label: 'Leaderboard', icon: <Trophy size={16} /> },
];

const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [collapsed, setCollapsed] = useState(false);

  const toggleExpand = (label: string) => {
    setExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const getRoute = (label: string) =>
    `/round/2/${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <aside
      className={clsx(
        'h-screen border-r bg-white py-6 flex flex-col transition-all duration-300',
        collapsed ? 'w-16 px-2' : 'w-64 px-4'
      )}
    >
      {/* Collapse Toggle Button */}
      <button
        onClick={() => setCollapsed((prev) => !prev)}
        className="mb-4 self-start text-gray-500 hover:text-gray-800"
      >
        <Menu size={20} />
      </button>

      {!collapsed && (
        <>
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
                <Link href={getRoute(label)}>
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
                </Link>
                {expanded[label] && (
                  <div className="pl-7 pt-1 text-xs text-gray-600">
                    <p className="py-1">Subitem 1</p>
                    <p className="py-1">Subitem 2</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
