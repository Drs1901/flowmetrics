export interface KPI {
  label: string;
  value: string;
  trend: number;
  trendLabel: string;
}

export interface Deal {
  id: string;
  client: string;
  value: number;
  stage: 'Lead' | 'Qualified' | 'Proposal' | 'Won';
  owner: string;
  avatar: string;
  date: string;
}

export interface Customer {
  id: string;
  name: string;
  company: string;
  status: 'Active' | 'Churned' | 'Pending';
  mrr: number;
  avatar: string;
}

export interface Activity {
  id: string;
  user: string;
  action: string;
  target: string;
  time: string;
  avatar: string;
}

export interface RevenueData {
  name: string;
  revenue: number;
  expenses: number;
}