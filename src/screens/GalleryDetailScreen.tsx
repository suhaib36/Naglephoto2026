import React, { useState } from 'react';
import { 
  Heart, 
  Check, 
  Download, 
  CheckCircle2, 
  Filter, 
  Grid2X2, 
  Grid3X3, 
  Square, 
  SlidersHorizontal,
  X,
  Sparkles,
  MessageSquarePlus,
  AlertCircle
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TopHeader } from '../components/TopHeader';
import { PhotoItem, PhotoApprovalStatus } from '../types';

export const GalleryDetailScreen: React.FC = () => {
  const { 
    galleries, 
    selectedGalleryId, 
    selectedPhotoIds,
    toggleSelectPhoto,
    selectAllInCurrentGallery,
    clearSelection,
    toggleFavoritePhoto,
    openPhotoViewer,
    submitBatchForApproval,
    downloadSelectedPhotos,
    showToast
  } = useApp();

  const [filter, setFilter] = useState<'All' | 'Favorites' | 'Pending' | 'Approved' | 'Revisions'>('All');
  const [gridCols, setGridCols] = useState<2 | 3>(2);
  const [isSelectMode, setIsSelectMode] = useState(false);
  const [showApprovalConfirmModal, setShowApprovalConfirmModal] = useState(false);

  const gallery = galleries.find(g => g.id === selectedGalleryId) || galleries[0];

  if (!gallery) return null;

  const filteredPhotos = gallery.photos.filter(photo => {
    if (filter === 'Favorites') return photo.isFavorite;
    if (filter === 'Pending') return photo.status === 'Awaiting Review';
    if (filter === 'Approved') return photo.status === 'Approved' || photo.status === 'Final Approved';
    if (filter === 'Revisions') return photo.status === 'Revision Requested';
    return true;
  });

  const selectedCount = selectedPhotoIds.length;

  const getStatusBadge = (status: PhotoApprovalStatus) => {
    switch (status) {
      case 'Approved':
      case 'Final Approved':
        return <span className="bg-emerald-500/90 text-black font-bold px-1.5 py-0.5 rounded text-[9px] backdrop-blur-md">Approved</span>;
      case 'Revision Requested':
        return <span className="bg-rose-500/90 text-white font-bold px-1.5 py-0.5 rounded text-[9px] backdrop-blur-md">Revision</span>;
      case 'Revised':
        return <span className="bg-sky-500/90 text-black font-bold px-1.5 py-0.5 rounded text-[9px] backdrop-blur-md">Revised</span>;
      default:
        return <span className="bg-amber-500/90 text-black font-bold px-1.5 py-0.5 rounded text-[9px] backdrop-blur-md">Review</span>;
    }
  };

  const handleConfirmApproval = () => {
    submitBatchForApproval(gallery.id);
    setShowApprovalConfirmModal(false);
  };

  return (
    <div className="flex-1 flex flex-col bg-[#121214] text-zinc-100 relative">
      <TopHeader 
        title={gallery.title} 
        showBack={true}
        rightAction={
          <button
            onClick={() => {
              if (isSelectMode) {
                clearSelection();
                setIsSelectMode(false);
              } else {
                setIsSelectMode(true);
              }
            }}
            className={`text-xs font-semibold px-2.5 py-1 rounded-full transition-all ${
              isSelectMode 
                ? 'bg-amber-400 text-black' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {isSelectMode ? 'Done' : 'Select'}
          </button>
        }
      />

      <div className="p-4 space-y-4 pb-28">
        {/* Gallery Title & Subheader */}
        <div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
              {gallery.category}
            </span>
            <span className="text-xs text-zinc-400">
              {gallery.photos.length} Photographs
            </span>
          </div>
          <h2 className="text-lg font-bold text-white mt-0.5">
            {gallery.title}
          </h2>
          {gallery.description && (
            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
              {gallery.description}
            </p>
          )}
        </div>

        {/* Filter Pills & View Grid Toggle */}
        <div className="flex items-center justify-between gap-2 pt-1">
          <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {(['All', 'Favorites', 'Pending', 'Approved', 'Revisions'] as const).map(tab => {
              const isActive = filter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-white text-zinc-950 shadow-sm'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <div className="flex items-center bg-zinc-900 rounded-lg p-0.5 border border-white/5 shrink-0">
            <button
              onClick={() => setGridCols(2)}
              className={`p-1 rounded ${gridCols === 2 ? 'bg-zinc-800 text-white' : 'text-zinc-500'}`}
              aria-label="2 columns"
            >
              <Grid2X2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setGridCols(3)}
              className={`p-1 rounded ${gridCols === 3 ? 'bg-zinc-800 text-white' : 'text-zinc-500'}`}
              aria-label="3 columns"
            >
              <Grid3X3 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Selection bar if Select Mode is active */}
        {isSelectMode && (
          <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-amber-500/30 flex items-center justify-between text-xs animate-slideDown">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-amber-300">
                {selectedCount} selected
              </span>
              <span className="text-zinc-500">of {gallery.photos.length}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={selectAllInCurrentGallery}
                className="text-[11px] font-semibold text-zinc-300 hover:text-white px-2 py-1 rounded bg-white/5"
              >
                {selectedCount === gallery.photos.length ? 'Deselect All' : 'Select All'}
              </button>
              {selectedCount > 0 && (
                <button
                  onClick={clearSelection}
                  className="text-[11px] text-zinc-400 hover:text-zinc-200"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        )}

        {/* Photographs Grid */}
        {filteredPhotos.length === 0 ? (
          <div className="text-center py-16 text-zinc-500 text-xs">
            No photographs found for this filter.
          </div>
        ) : (
          <div className={`grid gap-2.5 ${gridCols === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
            {filteredPhotos.map((photo) => {
              const isSelected = selectedPhotoIds.includes(photo.id);

              return (
                <div
                  key={photo.id}
                  onClick={() => {
                    if (isSelectMode) {
                      toggleSelectPhoto(photo.id);
                    } else {
                      openPhotoViewer(photo, gallery.id);
                    }
                  }}
                  className={`group relative rounded-xl overflow-hidden bg-zinc-950 cursor-pointer border transition-all duration-200 select-none ${
                    gridCols === 2 ? 'aspect-[4/5]' : 'aspect-square'
                  } ${
                    isSelected 
                      ? 'border-amber-400 ring-2 ring-amber-400/30' 
                      : 'border-white/5 hover:border-white/20'
                  }`}
                >
                  <img
                    src={photo.thumbnailUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />

                  {/* Gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" />

                  {/* Top Controls: Selection Checkbox & Favorite Heart */}
                  <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10">
                    {/* Status Badge */}
                    <div className="shrink-0">
                      {getStatusBadge(photo.status)}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {/* Favorite Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavoritePhoto(gallery.id, photo.id);
                        }}
                        className={`w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
                          photo.isFavorite
                            ? 'bg-rose-500 text-white'
                            : 'bg-black/40 text-white/80 hover:text-white'
                        }`}
                        aria-label="Toggle favorite"
                      >
                        <Heart className={`w-3.5 h-3.5 ${photo.isFavorite ? 'fill-current' : ''}`} />
                      </button>

                      {/* Select Checkbox (always visible if select mode, or on hover) */}
                      {(isSelectMode || isSelected) && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSelectPhoto(photo.id);
                          }}
                          className={`w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
                            isSelected
                              ? 'bg-amber-400 text-black shadow-md'
                              : 'bg-black/50 text-white/70 border border-white/20'
                          }`}
                          aria-label="Select photo"
                        >
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Bottom Info: Title & Comment count */}
                  <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                    <p className="text-[11px] font-semibold text-white truncate drop-shadow-sm">
                      {photo.title}
                    </p>
                    <div className="flex items-center justify-between text-[10px] text-zinc-300 mt-0.5">
                      <span className="truncate max-w-[100px] text-zinc-400">{photo.filename}</span>
                      {photo.comments.length > 0 && (
                        <span className="bg-black/60 px-1 py-0.2 rounded text-[9px] text-amber-300">
                          {photo.comments.length} notes
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Floating Bottom Action Bar (When Photos are Selected) */}
      {selectedCount > 0 && (
        <div className="fixed bottom-20 left-0 right-0 z-30 px-4 animate-slideUp">
          <div className="max-w-[393px] mx-auto p-3 rounded-2xl bg-zinc-900/95 border border-amber-400/30 backdrop-blur-xl shadow-2xl flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 pl-1">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <div>
                <p className="text-xs font-bold text-white leading-none">
                  {selectedCount} Selected
                </p>
                <p className="text-[10px] text-zinc-400 mt-0.5">
                  Action on batch
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Download Selected */}
              <button
                onClick={downloadSelectedPhotos}
                className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-95"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>

              {/* Submit for Approval */}
              <button
                onClick={() => setShowApprovalConfirmModal(true)}
                className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 shadow-md"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Approve ({selectedCount})</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Final Approval Confirmation Dialog */}
      {showApprovalConfirmModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="w-full max-w-sm rounded-3xl bg-zinc-900 border border-white/10 p-6 space-y-4 shadow-2xl animate-scaleUp">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1">
              <h3 className="text-base font-bold text-white">
                Approve Photographs?
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Are you sure you want to approve these <span className="text-white font-semibold">{selectedCount} photographs</span> for final delivery? The studio will prepare the full-resolution master TIFF deliverables.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => setShowApprovalConfirmModal(false)}
                className="py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-zinc-300 font-semibold text-xs active:scale-95 transition-all"
              >
                Cancel
              </button>

              <button
                onClick={handleConfirmApproval}
                className="py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs active:scale-95 transition-all shadow-md"
              >
                Confirm Approval
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
