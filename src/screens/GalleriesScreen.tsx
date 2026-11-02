import React, { useState } from 'react';
import { Images, Calendar, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TopHeader } from '../components/TopHeader';

export const GalleriesScreen: React.FC = () => {
  const { galleries, openGallery } = useApp();
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Product', 'Lifestyle', 'Food', 'Portrait'];

  const filteredGalleries = filterCategory === 'All'
    ? galleries
    : galleries.filter(g => g.category.toLowerCase().includes(filterCategory.toLowerCase()));

  return (
    <div className="flex-1 flex flex-col bg-[#121214] text-zinc-100">
      <TopHeader title="Private Galleries" />

      <div className="p-4 space-y-4">
        {/* Intro Tagline */}
        <div>
          <span className="text-[10px] font-semibold tracking-widest uppercase text-amber-400">
            Client Proofing & Delivery
          </span>
          <h2 className="text-lg font-bold tracking-tight text-white mt-0.5">
            Private Photography Collections
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            Access, inspect 100MP proofs, shortlist selections, and approve deliverables.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar -mx-4 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                filterCategory === cat
                  ? 'bg-white text-zinc-950 shadow-sm'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Cards */}
        <div className="space-y-4 pt-1">
          {filteredGalleries.map((gallery) => {
            const approvedCount = gallery.photos.filter(p => p.status === 'Approved' || p.status === 'Final Approved').length;
            const revisionCount = gallery.photos.filter(p => p.status === 'Revision Requested').length;

            return (
              <div
                key={gallery.id}
                onClick={() => openGallery(gallery.id)}
                className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/8 hover:border-white/20 transition-all cursor-pointer shadow-xl active:scale-[0.99]"
              >
                {/* Large Cover Image */}
                <div className="relative aspect-[16/10] w-full bg-zinc-950 overflow-hidden">
                  <img
                    src={gallery.coverImage}
                    alt={gallery.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-black/30 to-transparent" />

                  {/* Badges on Top */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-amber-300 border border-white/10">
                      {gallery.category}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-zinc-200 border border-white/10">
                      {gallery.photos.length} Photographs
                    </span>
                  </div>

                  {/* Title and metadata on image overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                      {gallery.title}
                    </h3>
                    <p className="text-xs text-zinc-300 line-clamp-1 mt-0.5">
                      {gallery.description}
                    </p>
                  </div>
                </div>

                {/* Status & Review Stats Footer */}
                <div className="p-3.5 bg-zinc-900/90 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-zinc-400 flex items-center gap-1 text-[11px]">
                      <Calendar className="w-3 h-3 text-zinc-500" />
                      {gallery.uploadDate}
                    </span>

                    {approvedCount > 0 && (
                      <span className="text-emerald-400 font-medium text-[11px]">
                        {approvedCount} Approved
                      </span>
                    )}

                    {revisionCount > 0 && (
                      <span className="text-rose-400 font-medium text-[11px]">
                        {revisionCount} Revisions
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-xs text-zinc-300 font-semibold group-hover:text-white transition-colors">
                    <span>Open Gallery</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
