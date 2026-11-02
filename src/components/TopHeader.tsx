import React from 'react';
import { Bell, ArrowLeft, SlidersHorizontal } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface TopHeaderProps {
  title?: string;
  showBack?: boolean;
  showNotification?: boolean;
  rightAction?: React.ReactNode;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  title,
  showBack = false,
  showNotification = true,
  rightAction
}) => {
  const { goBack, unreadNotificationCount, setCurrentScreen, clientProfile } = useApp();

  return (
    <header className="sticky top-0 z-30 bg-[#121214]/90 backdrop-blur-md border-b border-white/5 px-4 py-3 flex items-center justify-between text-white transition-all">
      <div className="flex items-center gap-3">
        {showBack ? (
          <button
            onClick={goBack}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 active:scale-95 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        ) : (
          <div className="flex items-center gap-2.5">
            <img 
              src="/logo_nagle_photography.png" 
              alt="Nagle Photography" 
              className="h-8 object-contain filter brightness-105"
            />
          </div>
        )}

        {title && (
          <h1 className="text-base font-semibold tracking-tight text-zinc-100 truncate max-w-[200px]">
            {title}
          </h1>
        )}
      </div>

      <div className="flex items-center gap-2">
        {rightAction}

        {showNotification && (
          <button
            onClick={() => setCurrentScreen('notifications')}
            className="relative w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 active:scale-95 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
            aria-label="View notifications"
          >
            <Bell className="w-4 h-4" />
            {unreadNotificationCount > 0 && (
              <span className="absolute 1 top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500 ring-2 ring-[#121214] animate-pulse" />
            )}
          </button>
        )}
      </div>
    </header>
  );
};
