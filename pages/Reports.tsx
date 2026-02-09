import React from 'react';
import GlassCard from '../components/ui/GlassCard';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 600 },
  { name: 'Thu', value: 200 },
  { name: 'Fri', value: 900 },
  { name: 'Sat', value: 500 },
  { name: 'Sun', value: 700 },
];

const pieData = [
    { name: 'SaaS', value: 400 },
    { name: 'Services', value: 300 },
    { name: 'Consulting', value: 300 },
    { name: 'Other', value: 200 },
];

const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-panel glass-refract p-3 rounded-xl border border-white/20 shadow-xl bg-white/60 dark:bg-slate-900/60">
          <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">{label || payload[0].name}</p>
          <p className="text-xs text-blue-600 dark:text-blue-400">
            Value: <span className="font-medium">{payload[0].value}</span>
          </p>
        </div>
      );
    }
    return null;
  };

const Reports: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Analytics Reports</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Weekly Engagement</h2>
             <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.1} vertical={false} />
                        <XAxis dataKey="name" stroke="currentColor" strokeOpacity={0.4} fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="currentColor" strokeOpacity={0.4} fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip cursor={{fill: 'currentColor', opacity: 0.05}} content={<CustomTooltip />} />
                        <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={30} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </GlassCard>

        <GlassCard>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Revenue Sources</h2>
            <div className="h-[300px] w-full flex items-center justify-center">
                 <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="rgba(0,0,0,0)" />
                            ))}
                        </Pie>
                         <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                 </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6">
                {pieData.map((entry, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                        <span className="text-sm text-slate-600 dark:text-slate-400">{entry.name}</span>
                    </div>
                ))}
            </div>
        </GlassCard>

        <GlassCard className="lg:col-span-2">
             <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Growth Trajectory</h2>
             <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.1} vertical={false} />
                        <XAxis dataKey="name" stroke="currentColor" strokeOpacity={0.4} fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="currentColor" strokeOpacity={0.4} fontSize={12} tickLine={false} axisLine={false} />
                         <Tooltip content={<CustomTooltip />} />
                        <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: '#0f172a', strokeWidth: 2 }} activeDot={{ r: 6 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Reports;