import React from 'react';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Toast: React.FC = () => {
  const { toast } = useApp();

  if (!toast.show) return null;

  const icons = {
    success: <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />,
    warning: <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />,
    info: <Info className="w-4 h-4 text-sky-400 shrink-0" />
  };

  return (
    <div className="absolute top-12 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all duration-300 animate-slideDown max-w-[340px] w-full px-4">
      <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-zinc-900/95 text-zinc-100 text-xs font-medium shadow-2xl border border-white/10 backdrop-blur-md">
        {icons[toast.type]}
        <span className="truncate">{toast.message}</span>
      </div>
    </div>
  );
};
