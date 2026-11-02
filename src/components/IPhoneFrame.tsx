import React, { useState, useEffect } from 'react';
import { Wifi, BatteryMedium, Smartphone, Maximize2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface IPhoneFrameProps {
  children: React.ReactNode;
}

export const IPhoneFrame: React.FC<IPhoneFrameProps> = ({ children }) => {
  const { deviceMode, setDeviceMode } = useApp();
  const [currentTime, setCurrentTime] = useState('9:41');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      setCurrentTime(`${hours % 12 || 12}:${formattedMinutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 flex flex-col items-center justify-center p-0 sm:py-6 overflow-hidden">
      {/* Top Floating Device Controls (visible on desktop) */}
      <div className="hidden sm:flex items-center gap-3 mb-4 bg-zinc-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs text-zinc-400">
        <span className="font-medium text-zinc-300">Nagle Photography Client Portal</span>
        <span className="w-1 h-1 rounded-full bg-zinc-600" />
        <span className="text-zinc-400">iPhone 16 Pro (393 × 852 px)</span>
        <span className="w-1 h-1 rounded-full bg-zinc-600" />
        <button
          onClick={() => setDeviceMode(deviceMode === 'framed' ? 'fullscreen' : 'framed')}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all text-xs font-semibold"
        >
          {deviceMode === 'framed' ? (
            <>
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Full Screen</span>
            </>
          ) : (
            <>
              <Smartphone className="w-3.5 h-3.5" />
              <span>iPhone Frame</span>
            </>
          )}
        </button>
      </div>

      {/* Main Container */}
      <div
        className={`relative transition-all duration-300 ${
          deviceMode === 'framed'
            ? 'w-[393px] h-[852px] rounded-[52px] ring-[12px] ring-[#1d1d20] shadow-[0_25px_70px_rgba(0,0,0,0.85)] border-[4px] border-[#2c2c30] overflow-hidden bg-[#121214] flex flex-col'
            : 'w-full max-w-[440px] h-screen sm:h-[852px] sm:rounded-[36px] overflow-hidden bg-[#121214] flex flex-col sm:border sm:border-white/10 shadow-2xl'
        }`}
      >
        {/* iOS Status Bar */}
        <div className="sticky top-0 z-40 bg-[#121214] w-full pt-3 px-7 pb-1 flex items-center justify-between text-zinc-200 select-none text-[13px] font-semibold tracking-tight">
          <span>{currentTime}</span>

          {/* Dynamic Island pill */}
          <div className="w-[124px] h-[29px] bg-black rounded-full flex items-center justify-between px-3 shadow-inner">
            <div className="w-3 h-3 rounded-full bg-[#111] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-950/60" />
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0c]" />
          </div>

          <div className="flex items-center gap-1.5 text-zinc-300">
            <span className="text-[11px] font-bold tracking-tighter">5G</span>
            <Wifi className="w-3.5 h-3.5" />
            <BatteryMedium className="w-4 h-4 text-zinc-200" />
          </div>
        </div>

        {/* Screen Viewport with smooth scroll */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col pb-20 no-scrollbar">
          {children}
        </main>

        {/* iOS Home Indicator Bar */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-36 h-1 bg-white/40 rounded-full z-40 pointer-events-none" />
      </div>
    </div>
  );
};
