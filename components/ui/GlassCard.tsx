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
        glass-panel rounded-2xl p-6 relative overflow-hidden
        text-slate-900 dark:text-slate-100
        ${hoverEffect ? 'cursor-pointer glass-card-hover' : ''}
        ${className}
      `}
    >
      {/* Subtle shine animation */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;