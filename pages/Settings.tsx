import React from 'react';
import GlassCard from '../components/ui/GlassCard';
import { User, Bell, Lock, Globe, Save } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="max-w-4xl space-y-8">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Settings</h1>
      
      <GlassCard>
        <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400">
                <User className="w-6 h-6" />
            </div>
            <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Profile Information</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Update your photo and personal details.</p>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">First Name</label>
                <input type="text" defaultValue="Alex" className="w-full bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-lg px-4 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500/50 transition-colors" />
            </div>
            <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Last Name</label>
                <input type="text" defaultValue="Morgan" className="w-full bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-lg px-4 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500/50 transition-colors" />
            </div>
             <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Email Address</label>
                <input type="email" defaultValue="alex.morgan@flowmetrics.com" className="w-full bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-lg px-4 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500/50 transition-colors" />
            </div>
        </div>
        
        <div className="flex justify-end">
            <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20">
                <Save className="w-4 h-4" /> Save Changes
            </button>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard>
            <div className="flex items-center gap-3 mb-6">
                 <div className="p-2 rounded-lg bg-purple-500/20 text-purple-600 dark:text-purple-400">
                    <Bell className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Notifications</h3>
            </div>
            <div className="space-y-4">
                {['Email Alerts', 'Push Notifications', 'Weekly Digest'].map((item) => (
                    <div key={item} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/40 dark:hover:bg-white/5 transition-colors">
                        <span className="text-slate-700 dark:text-slate-300">{item}</span>
                        <div className="w-11 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                        </div>
                    </div>
                ))}
            </div>
          </GlassCard>

           <GlassCard>
            <div className="flex items-center gap-3 mb-6">
                 <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                    <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Security</h3>
            </div>
            <div className="space-y-4">
                 <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/40 dark:hover:bg-white/5 transition-colors">
                    <span className="text-slate-700 dark:text-slate-300">Two-Factor Auth</span>
                     <div className="w-11 h-6 bg-slate-300 dark:bg-slate-700 rounded-full relative cursor-pointer">
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white dark:bg-slate-400 rounded-full"></div>
                    </div>
                </div>
                 <button className="w-full py-2 bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 text-slate-700 dark:text-white rounded-lg text-sm transition-colors border border-white/20 dark:border-white/10">
                    Change Password
                </button>
            </div>
          </GlassCard>
      </div>
    </div>
  );
};

export default Settings;