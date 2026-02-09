import React from 'react';
import GlassCard from '../components/ui/GlassCard';
import { KPIData, RevenueChartData, DealsData, ActivityData } from '../data';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, MoreHorizontal, DollarSign } from 'lucide-react';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-panel glass-refract p-3 rounded-xl border border-white/20 shadow-xl bg-white/60 dark:bg-slate-900/60">
        <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">{label}</p>
        <p className="text-xs text-blue-600 dark:text-blue-400">
          Revenue: <span className="font-medium">${payload[0].value}</span>
        </p>
        <p className="text-xs text-purple-600 dark:text-purple-400">
          Expenses: <span className="font-medium">${payload[1].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">Dashboard</h1>
          <p className="text-slate-500 dark:text-slate-400">Welcome back, Alex. Here's what's happening today.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 text-slate-700 dark:text-white rounded-xl text-sm font-medium transition-colors border border-white/20 dark:border-white/10 shadow-sm">
            Export Report
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-medium transition-colors shadow-lg shadow-blue-500/20">
            + New Deal
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPIData.map((kpi, index) => (
          <GlassCard key={index} hoverEffect>
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-white/50 dark:bg-white/5 rounded-lg text-slate-600 dark:text-slate-300">
                <DollarSign className="w-5 h-5" />
              </div>
              <span className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${kpi.trend >= 0 ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-red-500/10 text-red-600 dark:text-red-400'}`}>
                {kpi.trend >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {Math.abs(kpi.trend)}%
              </span>
            </div>
            <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">{kpi.label}</h3>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">{kpi.value}</p>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2">
          <GlassCard className="h-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Revenue Analytics</h2>
              <select className="bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 text-slate-700 dark:text-slate-300 text-sm rounded-lg px-3 py-1 outline-none cursor-pointer hover:bg-white/60 dark:hover:bg-white/10 transition-colors">
                <option>This Year</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={RevenueChartData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.1} vertical={false} />
                  <XAxis dataKey="name" stroke="currentColor" strokeOpacity={0.4} fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="currentColor" strokeOpacity={0.4} fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                  <Area type="monotone" dataKey="expenses" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorExpenses)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>
        </div>

        {/* Activity Feed */}
        <div className="lg:col-span-1">
          <GlassCard className="h-full flex flex-col">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Recent Activity</h2>
            <div className="space-y-6 flex-1 overflow-y-auto pr-2">
              {ActivityData.map((activity) => (
                <div key={activity.id} className="flex gap-3 group">
                  <div className="relative">
                    <img src={activity.avatar} alt={activity.user} className="w-10 h-10 rounded-full border border-white/20 dark:border-white/10 shadow-sm" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center border border-white/20 dark:border-white/10">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-500 dark:text-slate-300">
                      <span className="font-semibold text-slate-800 dark:text-white">{activity.user}</span> {activity.action} <span className="text-blue-500 dark:text-blue-400">{activity.target}</span>
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors border-t border-white/20 dark:border-white/5">
              View All Activity
            </button>
          </GlassCard>
        </div>
      </div>

      {/* Deals Pipeline Quick View */}
      <div>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Pipeline Snapshot</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           {['Lead', 'Qualified', 'Proposal', 'Won'].map((stage) => (
             <GlassCard key={stage} className="bg-opacity-40 dark:bg-opacity-50 min-h-[160px]">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stage}</span>
                  <span className="text-xs bg-white/40 dark:bg-white/10 px-2 py-0.5 rounded text-slate-600 dark:text-slate-300">
                    {DealsData.filter(d => d.stage === stage).length}
                  </span>
                </div>
                <div className="space-y-3">
                  {DealsData.filter(d => d.stage === stage).map(deal => (
                    <div key={deal.id} className="p-3 bg-white/40 dark:bg-white/5 rounded-xl border border-white/20 dark:border-white/5 hover:bg-white/60 dark:hover:bg-white/10 transition-colors cursor-pointer group shadow-sm">
                      <p className="text-sm font-medium text-slate-800 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{deal.client}</p>
                      <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
                        <span>${deal.value.toLocaleString()}</span>
                        <img src={deal.avatar} className="w-5 h-5 rounded-full" />
                      </div>
                    </div>
                  ))}
                  {DealsData.filter(d => d.stage === stage).length === 0 && (
                    <div className="h-full flex items-center justify-center text-xs text-slate-400 dark:text-slate-600 italic py-4">
                      No deals in this stage
                    </div>
                  )}
                </div>
             </GlassCard>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;