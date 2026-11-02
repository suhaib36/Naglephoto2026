import React from 'react';
import { 
  Bell, 
  CheckCheck, 
  Images, 
  RotateCcw, 
  Calendar, 
  DollarSign, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TopHeader } from '../components/TopHeader';
import { NotificationItem } from '../types';

export const NotificationsScreen: React.FC = () => {
  const { 
    notifications, 
    markAllNotificationsAsRead, 
    markNotificationAsRead, 
    openProject, 
    openGallery, 
    goBack 
  } = useApp();

  const getNotificationIcon = (type: NotificationItem['type']) => {
    switch (type) {
      case 'revision_completed':
        return <RotateCcw className="w-4 h-4 text-emerald-400" />;
      case 'photos_uploaded':
        return <Images className="w-4 h-4 text-amber-400" />;
      case 'booking_confirmed':
        return <Calendar className="w-4 h-4 text-sky-400" />;
      case 'quote_received':
        return <DollarSign className="w-4 h-4 text-amber-300" />;
      case 'photos_approved':
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      default:
        return <Bell className="w-4 h-4 text-zinc-400" />;
    }
  };

  const handleNotificationClick = (item: NotificationItem) => {
    markNotificationAsRead(item.id);
    if (item.targetScreen === 'projects' || item.targetScreen === 'project_detail') {
      if (item.targetId) openProject(item.targetId);
    } else if (item.targetScreen === 'galleries') {
      if (item.targetId) openGallery(item.targetId);
    }
  };

  const groups = ['Today', 'Yesterday', 'Earlier'] as const;

  return (
    <div className="flex-1 flex flex-col bg-[#121214] text-zinc-100">
      <TopHeader 
        title="Studio Notifications" 
        showBack={true}
        showNotification={false}
        rightAction={
          <button
            onClick={markAllNotificationsAsRead}
            className="text-[11px] font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
          >
            <CheckCheck className="w-3.5 h-3.5" />
            <span>Mark all read</span>
          </button>
        }
      />

      <div className="p-4 space-y-5 pb-24">
        {groups.map((group) => {
          const groupItems = notifications.filter(n => n.dateGroup === group);
          if (groupItems.length === 0) return null;

          return (
            <div key={group} className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 px-1">
                {group}
              </span>

              <div className="space-y-2">
                {groupItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleNotificationClick(item)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 active:scale-[0.99] ${
                      item.isRead
                        ? 'bg-zinc-900/60 border-white/5 opacity-80'
                        : 'bg-zinc-900 border-amber-500/20 shadow-md ring-1 ring-amber-500/10'
                    }`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 mt-0.5">
                      {getNotificationIcon(item.type)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="text-xs font-semibold text-white truncate">
                          {item.title}
                        </h4>
                        <span className="text-[10px] text-zinc-500 shrink-0 font-medium">
                          {item.timestamp}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5 leading-snug">
                        {item.message}
                      </p>
                    </div>

                    {!item.isRead && (
                      <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
