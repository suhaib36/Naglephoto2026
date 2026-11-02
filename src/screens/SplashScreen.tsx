import React from 'react';
import { Camera } from 'lucide-react';

export const SplashScreen: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-[#121214] text-white p-6 relative select-none">
      {/* Editorial subtle background glow */}
      <div className="absolute inset-0 bg-radial-at-c from-zinc-800/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center animate-fadeIn">
        <div className="mb-6 p-4 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm shadow-2xl">
          <img 
            src="/logo_nagle_photography.png" 
            alt="Nagle Photography" 
            className="w-56 h-auto object-contain filter brightness-110 drop-shadow-md"
          />
        </div>

        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-amber-500/80 to-transparent my-3" />

        <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium max-w-[260px] leading-relaxed">
          Commercial & Editorial Client Platform
        </p>

        <p className="text-[11px] text-zinc-500 mt-1 font-normal">
          Chicago, IL · Studio & Location
        </p>

        {/* Minimal iOS-style loader */}
        <div className="mt-14 flex flex-col items-center gap-3">
          <div className="w-6 h-6 border-2 border-white/10 border-t-zinc-200 rounded-full animate-spin" />
          <span className="text-[11px] text-zinc-500 tracking-wider">Syncing private galleries…</span>
        </div>
      </div>

      <div className="absolute bottom-10 text-center">
        <span className="text-[10px] text-zinc-600 tracking-widest uppercase">
          Joe Nagle Photography © {new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
};
