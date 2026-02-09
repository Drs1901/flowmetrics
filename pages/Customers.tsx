import React from 'react';
import GlassCard from '../components/ui/GlassCard';
import { CustomersData } from '../data';
import { Mail, Phone, MoreVertical } from 'lucide-react';

const Customers: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">Customers</h1>
            <p className="text-slate-500 dark:text-slate-400">View and manage your active client base.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CustomersData.map((customer) => (
            <GlassCard key={customer.id} hoverEffect className="group">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-4">
                        <img src={customer.avatar} alt={customer.name} className="w-12 h-12 rounded-xl object-cover ring-2 ring-transparent group-hover:ring-blue-500/50 transition-all" />
                        <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white text-lg">{customer.name}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{customer.company}</p>
                        </div>
                    </div>
                    <button className="text-slate-500 hover:text-slate-900 dark:hover:text-white">
                        <MoreVertical className="w-5 h-5" />
                    </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/5">
                        <p className="text-xs text-slate-500 dark:text-slate-500 uppercase mb-1">Status</p>
                        <span className={`text-sm font-medium ${
                            customer.status === 'Active' ? 'text-emerald-600 dark:text-emerald-400' :
                            customer.status === 'Pending' ? 'text-amber-600 dark:text-amber-400' : 'text-red-600 dark:text-red-400'
                        }`}>
                            {customer.status}
                        </span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/5">
                        <p className="text-xs text-slate-500 dark:text-slate-500 uppercase mb-1">MRR</p>
                        <span className="text-sm font-medium text-slate-900 dark:text-white">${customer.mrr}</span>
                    </div>
                </div>

                <div className="flex gap-2">
                    <button className="flex-1 py-2 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 text-blue-600 dark:text-blue-400 text-sm font-medium transition-colors flex items-center justify-center gap-2">
                        <Mail className="w-4 h-4" /> Email
                    </button>
                     <button className="flex-1 py-2 rounded-lg bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 text-sm font-medium transition-colors flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4" /> Call
                    </button>
                </div>
            </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default Customers;