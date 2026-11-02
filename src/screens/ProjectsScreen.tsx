import React, { useState } from 'react';
import { Calendar, MapPin, ChevronRight, Plus, Camera, Layers } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TopHeader } from '../components/TopHeader';

export const ProjectsScreen: React.FC = () => {
  const { projects, openProject, openBookingWizard } = useApp();
  const [activeTab, setActiveTab] = useState<'active' | 'upcoming' | 'completed'>('active');

  const filteredProjects = projects.filter(p => p.tabCategory === activeTab);

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Client Review':
      case 'Photos Uploaded':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Confirmed':
      case 'Final Approved':
      case 'Delivered':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Request Submitted':
      case 'Under Review':
        return 'bg-sky-500/10 text-sky-400 border-sky-500/20';
      default:
        return 'bg-zinc-800 text-zinc-300 border-zinc-700';
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[#121214] text-zinc-100">
      <TopHeader 
        title="My Projects" 
        rightAction={
          <button
            onClick={() => openBookingWizard()}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center text-white transition-all"
            aria-label="New Project"
          >
            <Plus className="w-5 h-5" />
          </button>
        }
      />

      <div className="p-4 space-y-4">
        {/* Three Tab Navigation: Active, Upcoming, Completed */}
        <div className="grid grid-cols-3 p-1 rounded-xl bg-zinc-900 border border-white/5">
          {(['active', 'upcoming', 'completed'] as const).map(tab => {
            const count = projects.filter(p => p.tabCategory === tab).length;
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 text-xs font-semibold rounded-lg capitalize transition-all duration-200 flex items-center justify-center gap-1.5 ${
                  isActive
                    ? 'bg-zinc-800 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <span>{tab}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/15 text-white' : 'bg-zinc-800 text-zinc-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project List */}
        <div className="space-y-3.5 pt-1">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 px-4 rounded-2xl bg-zinc-900/40 border border-white/5">
              <Layers className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
              <h4 className="text-sm font-semibold text-zinc-300">No {activeTab} projects</h4>
              <p className="text-xs text-zinc-500 mt-1 max-w-[220px] mx-auto">
                Ready to plan your next commercial photography production?
              </p>
              <button
                onClick={() => openBookingWizard()}
                className="mt-4 px-4 py-2 rounded-xl bg-white text-zinc-950 font-semibold text-xs active:scale-95 transition-all inline-flex items-center gap-2"
              >
                <Camera className="w-4 h-4" />
                <span>Request a Shoot</span>
              </button>
            </div>
          ) : (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => openProject(project.id)}
                className="group rounded-2xl bg-zinc-900/80 border border-white/8 hover:border-white/20 transition-all cursor-pointer overflow-hidden shadow-lg active:scale-[0.99]"
              >
                {/* Image and Header */}
                <div className="relative aspect-[16/9] w-full bg-zinc-950 overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-zinc-200 border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border backdrop-blur-md ${getStatusBadgeClass(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Title and Shoot Info overlaid */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-300 mt-0.5 font-medium">
                      {project.clientCompany}
                    </p>
                  </div>
                </div>

                {/* Card Content & Action */}
                <div className="p-3.5 flex items-center justify-between bg-zinc-900/90 border-t border-white/5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs text-zinc-300">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{project.shootDate}</span>
                      <span className="text-zinc-600">·</span>
                      <span className="text-zinc-400">{project.shootType}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-zinc-500 truncate max-w-[200px]">
                      <MapPin className="w-3 h-3 text-zinc-600 shrink-0" />
                      <span className="truncate">{project.locationAddress}</span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openProject(project.id);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs flex items-center gap-1.5 transition-all"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
