import React, { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', onClick, hoverEffect = false }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        glass-panel rounded-2xl p-6 relative overflow-hidden transition-all duration-300
        bg-white/60 dark:bg-white/5 
        border-white/40 dark:border-white/10
        text-slate-900 dark:text-slate-100
        ${hoverEffect ? 'hover:bg-white/70 dark:hover:bg-white/10 cursor-pointer glass-card-hover' : ''}
        ${className}
      `}
    >
      {/* Inner sheen effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;