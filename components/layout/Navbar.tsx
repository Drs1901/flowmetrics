import React, { useState } from 'react';
import { Search, Bell, Menu, X, User, Moon, Sun, Monitor } from 'lucide-react';
import Modal from '../ui/Modal';
import { useTheme } from '../../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <>
      <header className="h-20 px-8 flex items-center justify-between sticky top-0 z-40 bg-white/10 dark:bg-black/10 backdrop-blur-md border-b border-white/5">
        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-600 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-3 bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/5 px-4 py-2.5 rounded-xl w-96 focus-within:bg-white/60 dark:focus-within:bg-white/10 focus-within:border-white/30 dark:focus-within:border-white/10 transition-all shadow-sm">
          <Search className="w-4 h-4 text-slate-500 dark:text-slate-400" />
          <input 
            type="text" 
            placeholder="Search deals, customers, or reports..." 
            className="bg-transparent border-none outline-none text-sm text-slate-900 dark:text-white placeholder-slate-500 w-full"
          />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2.5 rounded-xl bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#0f172a]"></span>
          </button>
          
          <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-white/10">
            <div className="text-right hidden md:block">
              <p className="text-sm font-medium text-slate-900 dark:text-white">Alex Morgan</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Sales Director</p>
            </div>
            <button 
              onClick={() => setIsProfileOpen(true)}
              className="relative group"
            >
              <img 
                src="https://picsum.photos/40/40?random=100" 
                alt="Profile" 
                className="w-10 h-10 rounded-xl border border-white/20 ring-2 ring-transparent group-hover:ring-blue-500/30 transition-all cursor-pointer object-cover shadow-md"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Profile & Settings Modal */}
      <Modal 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)} 
        title="User Settings"
      >
        <div className="space-y-6">
          
          <div className="flex flex-col items-center gap-3 mb-6">
            <div className="relative">
              <img 
                src="https://picsum.photos/80/80?random=100" 
                alt="Profile Large" 
                className="w-20 h-20 rounded-2xl object-cover border-4 border-white dark:border-white/10 shadow-lg"
              />
              <button className="absolute bottom-[-5px] right-[-5px] p-1.5 bg-blue-600 text-white rounded-full shadow-lg border-2 border-white dark:border-slate-900">
                <User className="w-3 h-3" />
              </button>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-bold">Alex Morgan</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">alex.morgan@flowmetrics.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block">Display Name</label>
              <input 
                type="text" 
                defaultValue="Alex Morgan"
                className="w-full bg-white/50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500/50 transition-colors" 
              />
            </div>
            
            <div>
              <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block">Theme Preference</label>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => setTheme('light')}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border transition-all ${theme === 'light' ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-white/20 dark:border-white/30 dark:text-white' : 'bg-white/30 dark:bg-white/5 border-transparent text-slate-600 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-white/10'}`}
                >
                  <Sun className="w-4 h-4" />
                  <span className="text-sm font-medium">Light</span>
                </button>
                <button 
                   onClick={() => setTheme('dark')}
                   className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border transition-all ${theme === 'dark' ? 'bg-indigo-50 dark:bg-indigo-500/20 border-indigo-200 dark:border-indigo-400/30 text-indigo-700 dark:text-indigo-300' : 'bg-white/30 dark:bg-white/5 border-transparent text-slate-600 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-white/10'}`}
                >
                  <Moon className="w-4 h-4" />
                  <span className="text-sm font-medium">Dark</span>
                </button>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex justify-end">
            <button 
              onClick={() => setIsProfileOpen(false)}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl text-sm font-medium shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-0.5"
            >
              Save Changes
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;