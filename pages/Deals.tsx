import React from 'react';
import GlassCard from '../components/ui/GlassCard';
import { DealsData } from '../data';
import { Search, Filter, MoreHorizontal } from 'lucide-react';

const Deals: React.FC = () => {
  return (
    <div className="space-y-6">
       <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">Deals</h1>
          <p className="text-slate-500 dark:text-slate-400">Manage your sales pipeline and track opportunities.</p>
        </div>
        <div className="flex gap-3">
            <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input type="text" placeholder="Search deals..." className="pl-10 pr-4 py-2 bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500/50 transition-colors w-64" />
            </div>
            <button className="p-2 bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 border border-white/20 dark:border-white/10 rounded-xl text-slate-600 dark:text-slate-300 transition-colors">
                <Filter className="w-5 h-5" />
            </button>
        </div>
      </div>

      <GlassCard className="overflow-hidden p-0">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="border-b border-white/10 bg-white/40 dark:bg-white/5 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <th className="p-6 font-semibold">Deal Name</th>
                    <th className="p-6 font-semibold">Value</th>
                    <th className="p-6 font-semibold">Stage</th>
                    <th className="p-6 font-semibold">Owner</th>
                    <th className="p-6 font-semibold">Last Activity</th>
                    <th className="p-6 font-semibold text-right">Actions</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
                {DealsData.map((deal) => (
                    <tr key={deal.id} className="hover:bg-white/40 dark:hover:bg-white/5 transition-colors group">
                        <td className="p-6">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold border border-white/20 dark:border-white/10">
                                    {deal.client.charAt(0)}
                                </div>
                                <span className="font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{deal.client}</span>
                            </div>
                        </td>
                        <td className="p-6 text-slate-700 dark:text-slate-300 font-medium">
                            ${deal.value.toLocaleString()}
                        </td>
                        <td className="p-6">
                            <span className={`
                                px-3 py-1 rounded-full text-xs font-medium border
                                ${deal.stage === 'Won' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' : 
                                  deal.stage === 'Proposal' ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' :
                                  deal.stage === 'Qualified' ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20' :
                                  'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20'}
                            `}>
                                {deal.stage}
                            </span>
                        </td>
                        <td className="p-6">
                            <div className="flex items-center gap-2">
                                <img src={deal.avatar} alt={deal.owner} className="w-6 h-6 rounded-full" />
                                <span className="text-sm text-slate-600 dark:text-slate-300">{deal.owner}</span>
                            </div>
                        </td>
                        <td className="p-6 text-sm text-slate-500 dark:text-slate-400">{deal.date}</td>
                        <td className="p-6 text-right">
                            <button className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                                <MoreHorizontal className="w-5 h-5" />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </GlassCard>
    </div>
  );
};

export default Deals;