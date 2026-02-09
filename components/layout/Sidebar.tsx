import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Briefcase, Users, BarChart3, Radio, Settings, Hexagon } from 'lucide-react';

const Sidebar: React.FC = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/' },
    { icon: Briefcase, label: 'Deals', path: '/deals' },
    { icon: Users, label: 'Customers', path: '/customers' },
    { icon: BarChart3, label: 'Reports', path: '/reports' },
    { icon: Radio, label: 'Integrations', path: '/integrations' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="fixed left-4 top-4 bottom-4 w-64 glass-panel rounded-2xl flex flex-col z-50 hidden md:flex border-white/20 dark:border-white/10 bg-white/50 dark:bg-white/5">
      <div className="p-8 flex items-center gap-3">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-xl shadow-lg shadow-blue-500/20">
          <Hexagon className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-white/70">
          FlowMetrics
        </span>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group
              ${isActive 
                ? 'bg-white/60 dark:bg-white/10 text-slate-900 dark:text-white shadow-lg shadow-black/5 border border-white/40 dark:border-white/5' 
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/5'}
            `}
          >
            <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-6">
        <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-xl p-4 border border-indigo-200/30 dark:border-white/5">
          <h4 className="text-sm font-semibold text-slate-800 dark:text-white mb-1">Pro Plan</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Your team is on fire! 🔥</p>
          <button className="w-full py-2 bg-white/50 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 rounded-lg text-xs font-medium text-slate-700 dark:text-white transition-colors border border-white/20 dark:border-white/5 shadow-sm">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;