import React from 'react';
import { Home, Briefcase, Images, MessageSquare, User } from 'lucide-react';
import { useApp, MainTab } from '../context/AppContext';

export const BottomNav: React.FC = () => {
  const { activeTab, setActiveTab, setCurrentScreen, isPhotoViewerOpen } = useApp();

  if (isPhotoViewerOpen) return null;

  const navItems: { tab: MainTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { tab: 'home', label: 'Home', icon: Home },
    { tab: 'projects', label: 'Projects', icon: Briefcase },
    { tab: 'galleries', label: 'Galleries', icon: Images },
    { tab: 'messages', label: 'Messages', icon: MessageSquare },
    { tab: 'profile', label: 'Profile', icon: User },
  ];

  const handleSelectTab = (tab: MainTab) => {
    setActiveTab(tab);
    setCurrentScreen('main');
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 bg-[#121214]/95 backdrop-blur-xl border-t border-white/8 px-3 pt-2 pb-5 transition-all">
      <div className="max-w-[420px] mx-auto flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.tab;

          return (
            <button
              key={item.tab}
              onClick={() => handleSelectTab(item.tab)}
              className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 active:scale-95 ${
                isActive 
                  ? 'text-white' 
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform duration-200 ${isActive ? 'scale-110 text-white' : ''}`} />
                {item.tab === 'messages' && (
                  <span className="absolute -top-1 -right-1.5 w-2 h-2 rounded-full bg-amber-500 ring-2 ring-[#121214]" />
                )}
              </div>
              <span className={`text-[11px] mt-1 font-medium tracking-tight transition-colors duration-200 ${
                isActive ? 'text-white font-semibold' : 'text-zinc-500'
              }`}>
                {item.label}
              </span>
              {isActive && (
                <span className="absolute bottom-0 w-4 h-0.5 rounded-full bg-zinc-200 animate-fadeIn" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
