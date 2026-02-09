import React from 'react';
import GlassCard from '../components/ui/GlassCard';
import { CheckCircle2, Circle, ExternalLink } from 'lucide-react';

const Integrations: React.FC = () => {
  const integrations = [
    { name: 'Stripe', category: 'Payment', status: 'connected', color: '#635bff' },
    { name: 'Slack', category: 'Communication', status: 'connected', color: '#e01e5a' },
    { name: 'HubSpot', category: 'CRM', status: 'disconnected', color: '#ff7a59' },
    { name: 'Google Analytics', category: 'Analytics', status: 'connected', color: '#fbbc04' },
    { name: 'Intercom', category: 'Support', status: 'disconnected', color: '#1f8ceb' },
    { name: 'Zapier', category: 'Automation', status: 'disconnected', color: '#ff4f00' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Integrations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((app) => (
            <GlassCard key={app.name} className="flex flex-col justify-between group">
                <div>
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold text-white shadow-lg" style={{ backgroundColor: app.color }}>
                            {app.name.charAt(0)}
                        </div>
                        <span className={`flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-full border ${
                            app.status === 'connected' 
                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' 
                            : 'bg-slate-500/10 text-slate-500 dark:text-slate-400 border-slate-500/20'
                        }`}>
                            {app.status === 'connected' ? <CheckCircle2 className="w-3 h-3" /> : <Circle className="w-3 h-3" />}
                            {app.status === 'connected' ? 'Active' : 'Inactive'}
                        </span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{app.name}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{app.category}</p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/20 dark:border-white/5 flex justify-between items-center">
                    <button className="text-sm text-slate-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1">
                        Configure <ExternalLink className="w-3 h-3" />
                    </button>
                    <div className="h-5 w-px bg-white/20 dark:bg-white/10"></div>
                     <button className={`text-sm font-medium transition-colors ${app.status === 'connected' ? 'text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300' : 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300'}`}>
                        {app.status === 'connected' ? 'Disconnect' : 'Connect'}
                    </button>
                </div>
            </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default Integrations;