import React from 'react';
import { 
  Camera, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ChevronRight,
  Eye,
  AlertTriangle,
  FolderKanban
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TopHeader } from '../components/TopHeader';

export const HomeScreen: React.FC = () => {
  const { 
    clientProfile, 
    projects, 
    galleries, 
    openProject, 
    openGallery, 
    openBookingWizard,
    openPhotoViewer,
    setActiveTab,
    setCurrentScreen
  } = useApp();

  const activeProjects = projects.filter(p => p.tabCategory === 'active');
  const upcomingShoots = projects.filter(p => p.tabCategory === 'upcoming');

  // Find all pending photos across active galleries
  const pendingPhotos: { photo: any; gallery: any }[] = [];
  galleries.forEach(g => {
    g.photos.forEach(p => {
      if (p.status === 'Awaiting Review' || p.status === 'Revision Requested') {
        pendingPhotos.push({ photo: p, gallery: g });
      }
    });
  });

  return (
    <div className="flex-1 flex flex-col bg-[#121214] text-zinc-100">
      <TopHeader />

      <div className="p-4 space-y-6">
        {/* Welcome Client Banner */}
        <div className="pt-1">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-medium">Welcome Back</p>
              <h2 className="text-xl font-bold tracking-tight text-white mt-0.5">
                {clientProfile.name}
              </h2>
            </div>
            <span className="text-[11px] px-2.5 py-1 rounded-full bg-zinc-800/80 text-zinc-300 border border-white/5 font-medium">
              {clientProfile.company}
            </span>
          </div>
        </div>

        {/* Quick Action: "Request a Shoot" button */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 p-4 shadow-xl">
          <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wider uppercase text-amber-400">
                <Sparkles className="w-3 h-3" /> Book Studio or Location
              </span>
              <h3 className="text-base font-semibold text-white mt-1">Ready for your next campaign?</h3>
              <p className="text-xs text-zinc-400 mt-0.5 max-w-[200px]">
                Product silos, food, lifestyle & editorial shoots.
              </p>
            </div>

            <button
              onClick={() => openBookingWizard()}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs tracking-tight shadow-md flex items-center gap-2 active:scale-95 transition-all"
            >
              <Camera className="w-4 h-4 text-zinc-900" />
              <span>Request a Shoot</span>
            </button>
          </div>
        </div>

        {/* Pending Approvals Section (If any) */}
        {pendingPhotos.length > 0 && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <h3 className="text-sm font-semibold tracking-tight text-zinc-200">Pending Approvals</h3>
                <span className="text-xs bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-full font-medium">
                  {pendingPhotos.length} photos
                </span>
              </div>
              <button
                onClick={() => {
                  setActiveTab('galleries');
                  setCurrentScreen('main');
                }}
                className="text-xs text-zinc-400 hover:text-white flex items-center gap-0.5"
              >
                <span>View all</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2 pt-1 no-scrollbar -mx-4 px-4 snap-x">
              {pendingPhotos.slice(0, 4).map(({ photo, gallery }) => (
                <div
                  key={photo.id}
                  onClick={() => openPhotoViewer(photo, gallery.id)}
                  className="flex-shrink-0 w-44 rounded-xl overflow-hidden bg-zinc-900/90 border border-white/8 cursor-pointer group active:scale-[0.98] transition-all snap-start shadow-md"
                >
                  <div className="relative aspect-[4/3] bg-zinc-950 overflow-hidden">
                    <img 
                      src={photo.thumbnailUrl} 
                      alt={photo.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-md ${
                        photo.status === 'Revision Requested'
                          ? 'bg-rose-500/80 text-white'
                          : 'bg-amber-500/80 text-black'
                      }`}>
                        {photo.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-2.5">
                    <p className="text-xs font-medium text-zinc-200 truncate">{photo.title}</p>
                    <p className="text-[10px] text-zinc-400 truncate mt-0.5">{gallery.title}</p>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-amber-400 font-medium">
                      <span>Review Photo</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Active Projects Cards */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold tracking-tight text-zinc-200">Active Projects</h3>
            <button
              onClick={() => {
                setActiveTab('projects');
                setCurrentScreen('main');
              }}
              className="text-xs text-zinc-400 hover:text-white flex items-center gap-0.5"
            >
              <span>See all</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {activeProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => openProject(project.id)}
                className="group relative rounded-2xl bg-zinc-900/80 border border-white/8 p-3 hover:border-white/20 transition-all cursor-pointer shadow-lg active:scale-[0.99]"
              >
                <div className="flex gap-3">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-zinc-950 shrink-0 relative">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute bottom-1 right-1 text-[8px] bg-black/60 backdrop-blur-xs text-zinc-200 px-1 py-0.5 rounded">
                      {project.estimatedPhotos} photos
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div>
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">
                          {project.category}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-medium">
                          {project.status}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-white mt-1 group-hover:text-amber-300 transition-colors">
                        {project.title}
                      </h4>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-zinc-500" />
                        {project.shootDate}
                      </span>
                      <span className="text-xs text-zinc-300 font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                        View Project <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Shoots Section */}
        {upcomingShoots.length > 0 && (
          <div className="space-y-2.5">
            <h3 className="text-sm font-semibold tracking-tight text-zinc-200">Upcoming Shoots</h3>
            {upcomingShoots.map(shoot => (
              <div 
                key={shoot.id}
                onClick={() => openProject(shoot.id)}
                className="rounded-2xl bg-zinc-900/60 border border-white/5 p-3.5 flex items-center justify-between cursor-pointer hover:bg-zinc-800/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex flex-col items-center justify-center text-amber-400 shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-100">{shoot.title}</h4>
                    <p className="text-[11px] text-zinc-400 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3 text-zinc-500" />
                      {shoot.shootDate} · {shoot.shootTime}
                    </p>
                    <p className="text-[10px] text-zinc-500 flex items-center gap-1 mt-0.5 truncate max-w-[210px]">
                      <MapPin className="w-3 h-3 text-zinc-600 shrink-0" />
                      {shoot.locationAddress}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                    {shoot.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Recent Galleries Showcase */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold tracking-tight text-zinc-200">Recent Galleries</h3>
            <button
              onClick={() => {
                setActiveTab('galleries');
                setCurrentScreen('main');
              }}
              className="text-xs text-zinc-400 hover:text-white flex items-center gap-0.5"
            >
              <span>Explore</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {galleries.slice(0, 2).map((gallery) => (
              <div
                key={gallery.id}
                onClick={() => openGallery(gallery.id)}
                className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/8 cursor-pointer shadow-md hover:border-white/20 transition-all active:scale-[0.98]"
              >
                <div className="aspect-[4/5] relative bg-zinc-950 overflow-hidden">
                  <img
                    src={gallery.coverImage}
                    alt={gallery.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  
                  <div className="absolute top-2 right-2">
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-zinc-200 font-medium border border-white/10">
                      {gallery.photos.length} photos
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <span className="text-[9px] uppercase tracking-wider text-amber-300 font-semibold block">
                      {gallery.category}
                    </span>
                    <h4 className="text-xs font-semibold text-white mt-0.5 line-clamp-1">
                      {gallery.title}
                    </h4>
                    <p className="text-[10px] text-zinc-400 mt-0.5">
                      Updated {gallery.uploadDate}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Updates / Activity Feed */}
        <div className="space-y-2.5 pt-1">
          <h3 className="text-sm font-semibold tracking-tight text-zinc-200">Recent Studio Updates</h3>
          <div className="rounded-2xl bg-zinc-900/60 border border-white/5 divide-y divide-white/5 p-1">
            <div className="p-3 flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
              <div>
                <p className="text-xs font-medium text-zinc-200">
                  Elena uploaded revised proof for <span className="text-white font-semibold">Summer Product Campaign</span>.
                </p>
                <p className="text-[10px] text-zinc-500 mt-0.5">15 minutes ago</p>
              </div>
            </div>

            <div className="p-3 flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
              <div>
                <p className="text-xs font-medium text-zinc-200">
                  Shoot date confirmed for <span className="text-white font-semibold">Spring Advertising Campaign</span> at Fulton Market Main Stage.
                </p>
                <p className="text-[10px] text-zinc-500 mt-0.5">Yesterday</p>
              </div>
            </div>

            <div className="p-3 flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-zinc-500 mt-1.5 shrink-0" />
              <div>
                <p className="text-xs font-medium text-zinc-200">
                  Delivered 100MP final master assets for <span className="text-white font-semibold">Culinary Artisanal Menu Series</span>.
                </p>
                <p className="text-[10px] text-zinc-500 mt-0.5">Oct 18</p>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Contact Footer Link */}
        <div className="pt-2 pb-6 text-center">
          <p className="text-[11px] text-zinc-500">
            Nagle Photography · 1420 W Fulton Market, Chicago, IL
          </p>
          <p className="text-[10px] text-zinc-600 mt-0.5">
            Joe Nagle · (773) 349-1164 · nagleweb.com
          </p>
        </div>
      </div>
    </div>
  );
};
