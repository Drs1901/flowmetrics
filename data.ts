import { KPI, Deal, Customer, Activity, RevenueData } from './types';

export const KPIData: KPI[] = [
  { label: 'Monthly Revenue', value: '$124,500', trend: 12.5, trendLabel: 'vs last month' },
  { label: 'Active Customers', value: '1,240', trend: 5.2, trendLabel: 'vs last month' },
  { label: 'Conversion Rate', value: '3.2%', trend: -0.8, trendLabel: 'vs last month' },
  { label: 'Avg Deal Size', value: '$4,200', trend: 8.4, trendLabel: 'vs last month' },
];

export const RevenueChartData: RevenueData[] = [
  { name: 'Jan', revenue: 4000, expenses: 2400 },
  { name: 'Feb', revenue: 3000, expenses: 1398 },
  { name: 'Mar', revenue: 2000, expenses: 9800 },
  { name: 'Apr', revenue: 2780, expenses: 3908 },
  { name: 'May', revenue: 1890, expenses: 4800 },
  { name: 'Jun', revenue: 2390, expenses: 3800 },
  { name: 'Jul', revenue: 3490, expenses: 4300 },
  { name: 'Aug', revenue: 4200, expenses: 2100 },
  { name: 'Sep', revenue: 5100, expenses: 2300 },
];

export const DealsData: Deal[] = [
  { id: '1', client: 'Acme Corp', value: 12000, stage: 'Proposal', owner: 'Sarah J.', avatar: 'https://picsum.photos/32/32?random=1', date: 'Oct 24' },
  { id: '2', client: 'Globex Inc', value: 8500, stage: 'Qualified', owner: 'Mike R.', avatar: 'https://picsum.photos/32/32?random=2', date: 'Oct 23' },
  { id: '3', client: 'Soylent Corp', value: 23000, stage: 'Won', owner: 'Jessica T.', avatar: 'https://picsum.photos/32/32?random=3', date: 'Oct 20' },
  { id: '4', client: 'Initech', value: 4500, stage: 'Lead', owner: 'Bill L.', avatar: 'https://picsum.photos/32/32?random=4', date: 'Oct 25' },
  { id: '5', client: 'Umbrella Corp', value: 55000, stage: 'Proposal', owner: 'Sarah J.', avatar: 'https://picsum.photos/32/32?random=1', date: 'Oct 26' },
];

export const CustomersData: Customer[] = [
  { id: '1', name: 'Alice Freeman', company: 'TechFlow', status: 'Active', mrr: 450, avatar: 'https://picsum.photos/40/40?random=10' },
  { id: '2', name: 'Bob Smith', company: 'Designify', status: 'Pending', mrr: 120, avatar: 'https://picsum.photos/40/40?random=11' },
  { id: '3', name: 'Charlie Davis', company: 'BuildIt', status: 'Active', mrr: 890, avatar: 'https://picsum.photos/40/40?random=12' },
  { id: '4', name: 'Diana Prince', company: 'Heroics', status: 'Churned', mrr: 0, avatar: 'https://picsum.photos/40/40?random=13' },
  { id: '5', name: 'Evan Wright', company: 'WriteNow', status: 'Active', mrr: 2400, avatar: 'https://picsum.photos/40/40?random=14' },
];

export const ActivityData: Activity[] = [
  { id: '1', user: 'Sarah Jenkins', action: 'moved deal', target: 'Acme Corp', time: '2m ago', avatar: 'https://picsum.photos/32/32?random=1' },
  { id: '2', user: 'Mike Ross', action: 'commented on', target: 'Globex Proposal', time: '15m ago', avatar: 'https://picsum.photos/32/32?random=2' },
  { id: '3', user: 'System', action: 'synced', target: 'HubSpot Contacts', time: '1h ago', avatar: 'https://picsum.photos/32/32?random=99' },
  { id: '4', user: 'Jessica T.', action: 'closed deal', target: 'Soylent Corp', time: '4h ago', avatar: 'https://picsum.photos/32/32?random=3' },
];