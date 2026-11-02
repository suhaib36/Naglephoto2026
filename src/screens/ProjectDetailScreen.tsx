import React from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Images, 
  MessageSquare, 
  FileText, 
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Camera
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TopHeader } from '../components/TopHeader';

export const ProjectDetailScreen: React.FC = () => {
  const { 
    projects, 
    selectedProjectId, 
    openGallery, 
    openChatForProject,
    galleries
  } = useApp();

  const project = projects.find(p => p.id === selectedProjectId) || projects[0];
  const associatedGallery = galleries.find(g => g.id === project?.galleryId || g.projectId === project?.id);

  if (!project) return null;

  return (
    <div className="flex-1 flex flex-col bg-[#121214] text-zinc-100">
      <TopHeader title={project.title} showBack={true} />

      <div className="p-4 space-y-6 pb-12">
        {/* Project Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] w-full bg-zinc-950 shadow-xl border border-white/10">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          <div className="absolute top-3 left-3">
            <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-amber-300 border border-white/10">
              {project.category}
            </span>
          </div>

          <div className="absolute top-3 right-3">
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/10">
              {project.status}
            </span>
          </div>

          <div className="absolute bottom-3 left-3 right-3">
            <h2 className="text-lg font-bold text-white tracking-tight leading-snug">
              {project.title}
            </h2>
            <p className="text-xs text-zinc-300 font-medium mt-0.5">
              {project.clientCompany}
            </p>
          </div>
        </div>

        {/* Project Overview Details Grid */}
        <div className="rounded-2xl bg-zinc-900/80 border border-white/8 p-4 space-y-3.5 shadow-md">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Project Overview
          </h3>

          <p className="text-xs text-zinc-300 leading-relaxed">
            {project.description}
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/5">
            <div className="space-y-1">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Shoot Date & Time</span>
              <div className="flex items-center gap-1.5 text-xs text-zinc-200 font-medium">
                <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{project.shootDate}</span>
              </div>
              {project.shootTime && (
                <div className="flex items-center gap-1 text-[11px] text-zinc-400">
                  <Clock className="w-3 h-3 text-zinc-500 shrink-0" />
                  <span>{project.shootTime}</span>
                </div>
              )}
            </div>

            <div className="space-y-1">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Production Venue</span>
              <div className="flex items-center gap-1.5 text-xs text-zinc-200 font-medium">
                <Camera className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{project.shootType} Shoot</span>
              </div>
              <div className="flex items-start gap-1 text-[11px] text-zinc-400 line-clamp-2">
                <MapPin className="w-3 h-3 text-zinc-500 shrink-0 mt-0.5" />
                <span>{project.locationAddress}</span>
              </div>
            </div>
          </div>

          {project.budgetQuote && (
            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Quotation / Terms</span>
              <span className="font-semibold text-zinc-200">{project.budgetQuote}</span>
            </div>
          )}
        </div>

        {/* Visual Progress Timeline (6 Steps) */}
        <div className="rounded-2xl bg-zinc-900/80 border border-white/8 p-4 space-y-3.5 shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Production Progress
            </h3>
            <span className="text-[11px] font-medium text-amber-400">
              Stage {project.timeline.find(t => t.current)?.step || 6} of 6
            </span>
          </div>

          <div className="relative pl-6 space-y-5 pt-1">
            {/* Vertical progress line */}
            <div className="absolute top-3 left-[11px] bottom-3 w-0.5 bg-zinc-800" />

            {project.timeline.map((step) => (
              <div key={step.step} className="relative flex items-start gap-3 group">
                {/* Node icon */}
                <div className={`absolute -left-6 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border transition-all ${
                  step.completed
                    ? 'bg-emerald-500 border-emerald-400 text-black shadow-sm'
                    : step.current
                    ? 'bg-amber-500 border-amber-300 text-black animate-pulse ring-4 ring-amber-500/20'
                    : 'bg-zinc-800 border-zinc-700 text-zinc-500'
                }`}>
                  {step.completed ? <CheckCircle2 className="w-4 h-4 text-black" /> : step.step}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className={`text-xs font-semibold ${
                      step.current ? 'text-amber-300' : step.completed ? 'text-zinc-200' : 'text-zinc-500'
                    }`}>
                      {step.label}
                    </h4>
                    {step.date && (
                      <span className="text-[10px] text-zinc-500 font-medium">{step.date}</span>
                    )}
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Access Actions: Gallery & Messages */}
        <div className="grid grid-cols-2 gap-3">
          {associatedGallery ? (
            <button
              onClick={() => openGallery(associatedGallery.id)}
              className="p-3.5 rounded-2xl bg-zinc-900 border border-white/10 hover:border-amber-400/40 text-left transition-all active:scale-95 group shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Images className="w-4 h-4" />
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h4 className="text-xs font-semibold text-white mt-2">Private Gallery</h4>
              <p className="text-[10px] text-zinc-400 mt-0.5">{associatedGallery.photos.length} Photographs</p>
            </button>
          ) : (
            <div className="p-3.5 rounded-2xl bg-zinc-900/50 border border-white/5 text-left opacity-75">
              <div className="w-8 h-8 rounded-lg bg-zinc-800 text-zinc-500 flex items-center justify-center">
                <Images className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-semibold text-zinc-400 mt-2">Gallery Pending</h4>
              <p className="text-[10px] text-zinc-500 mt-0.5">Uploads following shoot</p>
            </div>
          )}

          <button
            onClick={() => openChatForProject(project.id)}
            className="p-3.5 rounded-2xl bg-zinc-900 border border-white/10 hover:border-white/20 text-left transition-all active:scale-95 group shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center">
                <MessageSquare className="w-4 h-4" />
              </div>
              <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </div>
            <h4 className="text-xs font-semibold text-white mt-2">Studio Messages</h4>
            <p className="text-[10px] text-zinc-400 mt-0.5">Joe Nagle & Team</p>
          </button>
        </div>

        {/* Project Requirements & Brief */}
        <div className="rounded-2xl bg-zinc-900/80 border border-white/8 p-4 space-y-3 shadow-md">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-zinc-400" />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Technical Specifications & Brief
            </h3>
          </div>

          <ul className="space-y-2 pt-1">
            {project.requirements.map((req, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Reference Images */}
        {project.referenceImages.length > 0 && (
          <div className="space-y-2.5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Creative References & Moodboard
            </h3>
            <div className="flex gap-2.5 overflow-x-auto pb-1 no-scrollbar">
              {project.referenceImages.map((ref, idx) => (
                <div 
                  key={idx}
                  className="w-28 h-28 rounded-xl overflow-hidden bg-zinc-950 shrink-0 border border-white/10"
                >
                  <img src={ref} alt={`Ref ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
