import React, { useState } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  Check, 
  Download, 
  MessageSquare, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  Send,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PhotoApprovalStatus } from '../types';

export const PhotoViewerModal: React.FC = () => {
  const { 
    isPhotoViewerOpen, 
    closePhotoViewer, 
    selectedPhoto, 
    selectedGalleryId, 
    galleries, 
    openPhotoViewer,
    toggleFavoritePhoto,
    updatePhotoApproval,
    addPhotoComment,
    downloadSinglePhoto,
    selectedPhotoIds,
    toggleSelectPhoto
  } = useApp();

  const [activeTab, setActiveTab] = useState<'info' | 'comments' | 'revision'>('comments');
  const [commentInput, setCommentInput] = useState('');
  const [revisionNote, setRevisionNote] = useState('');
  const [selectedRevisionPreset, setSelectedRevisionPreset] = useState<string>('');
  const [showConfirmApproval, setShowConfirmApproval] = useState(false);

  if (!isPhotoViewerOpen || !selectedPhoto) return null;

  const currentGallery = galleries.find(g => g.id === selectedGalleryId);
  const photos = currentGallery?.photos || [];
  const currentIndex = photos.findIndex(p => p.id === selectedPhoto.id);

  const handlePrev = () => {
    if (currentIndex > 0) {
      openPhotoViewer(photos[currentIndex - 1], selectedGalleryId || '');
    }
  };

  const handleNext = () => {
    if (currentIndex < photos.length - 1) {
      openPhotoViewer(photos[currentIndex + 1], selectedGalleryId || '');
    }
  };

  const isSelected = selectedPhotoIds.includes(selectedPhoto.id);

  const revisionPresets = [
    'Color grade: Warm up skin tones slightly',
    'Lighting: Soften harsh shadow under bottle/subject',
    'Retouch: Clean up dust/imperfections on surface',
    'Clipping: Provide transparent PNG cut-out path',
    'Contrast: Boost dynamic range in highlights',
    'Pantone: Match label color to official brand swatch'
  ];

  const handleSendComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim() || !selectedGalleryId) return;
    addPhotoComment(selectedGalleryId, selectedPhoto.id, commentInput);
    setCommentInput('');
  };

  const handleSubmitRevision = () => {
    const note = selectedRevisionPreset 
      ? `${selectedRevisionPreset}${revisionNote ? ` — ${revisionNote}` : ''}`
      : revisionNote;

    if (!note.trim() || !selectedGalleryId) return;
    updatePhotoApproval(selectedGalleryId, selectedPhoto.id, 'Revision Requested', note);
    setRevisionNote('');
    setSelectedRevisionPreset('');
    setActiveTab('comments');
  };

  const handleApprove = () => {
    if (!selectedGalleryId) return;
    updatePhotoApproval(selectedGalleryId, selectedPhoto.id, 'Approved');
    setShowConfirmApproval(false);
  };

  return (
    <div className="absolute inset-0 z-50 bg-black flex flex-col overflow-hidden text-white animate-fadeIn">
      {/* Top Header Bar */}
      <div className="pt-3 px-4 pb-2.5 bg-black/90 backdrop-blur-md flex items-center justify-between z-20 border-b border-white/10">
        <button
          onClick={closePhotoViewer}
          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
          aria-label="Close photo preview"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <p className="text-xs font-semibold text-zinc-100">
            {currentIndex + 1} of {photos.length}
          </p>
          <p className="text-[10px] text-zinc-400 truncate max-w-[180px]">
            {selectedPhoto.filename}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Favorite */}
          <button
            onClick={() => selectedGalleryId && toggleFavoritePhoto(selectedGalleryId, selectedPhoto.id)}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              selectedPhoto.isFavorite
                ? 'bg-rose-500 text-white'
                : 'bg-white/10 text-zinc-300 hover:text-white'
            }`}
            aria-label="Favorite"
          >
            <Heart className={`w-4 h-4 ${selectedPhoto.isFavorite ? 'fill-current' : ''}`} />
          </button>

          {/* Select Toggle */}
          <button
            onClick={() => toggleSelectPhoto(selectedPhoto.id)}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              isSelected
                ? 'bg-amber-400 text-black'
                : 'bg-white/10 text-zinc-300 hover:text-white'
            }`}
            aria-label="Select photo"
          >
            <Check className="w-4 h-4 stroke-[3]" />
          </button>
        </div>
      </div>

      {/* Main Image Area with Left/Right Navigation */}
      <div className="flex-1 relative bg-black flex items-center justify-center overflow-hidden select-none">
        <img
          src={selectedPhoto.url}
          alt={selectedPhoto.title}
          className="max-h-full max-w-full object-contain"
        />

        {/* Previous Button */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white flex items-center justify-center active:scale-95 transition-all z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {currentIndex < photos.length - 1 && (
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white flex items-center justify-center active:scale-95 transition-all z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Status indicator on bottom left of image */}
        <div className="absolute bottom-3 left-4 z-10">
          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md border ${
            selectedPhoto.status === 'Approved' || selectedPhoto.status === 'Final Approved'
              ? 'bg-emerald-500/90 text-black border-emerald-400'
              : selectedPhoto.status === 'Revision Requested'
              ? 'bg-rose-500/90 text-white border-rose-400'
              : 'bg-amber-500/90 text-black border-amber-400'
          }`}>
            Status: {selectedPhoto.status}
          </span>
        </div>

        {/* Quick Download button on bottom right */}
        <div className="absolute bottom-3 right-4 z-10">
          <button
            onClick={() => downloadSinglePhoto(selectedPhoto)}
            className="px-2.5 py-1 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 text-[10px] font-semibold flex items-center gap-1 backdrop-blur-md active:scale-95 transition-all"
          >
            <Download className="w-3 h-3" />
            <span>Download High-Res</span>
          </button>
        </div>
      </div>

      {/* Bottom Drawer for Feedback, Revisions & Camera Metadata */}
      <div className="bg-zinc-950 border-t border-white/10 flex flex-col max-h-[320px] transition-all">
        {/* Drawer Tabs */}
        <div className="flex border-b border-white/10 px-4 pt-2">
          <button
            onClick={() => setActiveTab('comments')}
            className={`pb-2 text-xs font-semibold px-3 transition-colors relative ${
              activeTab === 'comments' ? 'text-amber-400' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <span>Feedback & Notes ({selectedPhoto.comments.length})</span>
            {activeTab === 'comments' && (
              <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-400" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('revision')}
            className={`pb-2 text-xs font-semibold px-3 transition-colors relative ${
              activeTab === 'revision' ? 'text-rose-400' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <span>Request Revision</span>
            {activeTab === 'revision' && (
              <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-rose-400" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('info')}
            className={`pb-2 text-xs font-semibold px-3 transition-colors relative ${
              activeTab === 'info' ? 'text-amber-400' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <span>EXIF Specs</span>
            {activeTab === 'info' && (
              <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-400" />
            )}
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 no-scrollbar">
          {activeTab === 'comments' && (
            <div className="space-y-3">
              {selectedPhoto.comments.length === 0 ? (
                <p className="text-xs text-zinc-500 py-3 text-center">
                  No notes on this photograph yet. Add specific retouching instructions or notes below.
                </p>
              ) : (
                <div className="space-y-2">
                  {selectedPhoto.comments.map(c => (
                    <div 
                      key={c.id} 
                      className={`p-2.5 rounded-xl text-xs space-y-1 ${
                        c.role === 'studio' 
                          ? 'bg-zinc-900 border border-amber-500/20 text-zinc-200' 
                          : 'bg-white/10 text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] text-zinc-400">
                        <span className="font-semibold text-zinc-200">{c.author}</span>
                        <span>{c.timestamp}</span>
                      </div>
                      <p className="leading-snug">{c.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Add Comment Input */}
              <form onSubmit={handleSendComment} className="flex gap-2 pt-1">
                <input
                  type="text"
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  placeholder="Add note for Joe & retoucher…"
                  className="flex-1 bg-zinc-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  disabled={!commentInput.trim()}
                  className="px-3 py-2 rounded-xl bg-white text-black font-semibold text-xs disabled:opacity-40 active:scale-95 transition-all flex items-center justify-center"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          )}

          {activeTab === 'revision' && (
            <div className="space-y-3">
              <p className="text-xs text-zinc-400">
                Select retouching request or enter custom instructions:
              </p>

              {/* Quick Presets */}
              <div className="flex flex-wrap gap-1.5">
                {revisionPresets.map(preset => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setSelectedRevisionPreset(preset)}
                    className={`text-[10px] px-2.5 py-1 rounded-full text-left transition-all ${
                      selectedRevisionPreset === preset
                        ? 'bg-rose-500 text-white font-semibold'
                        : 'bg-zinc-900 text-zinc-300 hover:text-white border border-white/5'
                    }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>

              <textarea
                value={revisionNote}
                onChange={(e) => setRevisionNote(e.target.value)}
                placeholder="Specific instructions (e.g. soften shadow, clean background dust)..."
                rows={2}
                className="w-full bg-zinc-900 border border-white/10 rounded-xl p-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-rose-400"
              />

              <button
                type="button"
                onClick={handleSubmitRevision}
                disabled={!selectedRevisionPreset && !revisionNote.trim()}
                className="w-full py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs disabled:opacity-40 active:scale-95 transition-all flex items-center justify-center gap-1.5 shadow-md"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Submit Revision Request to Studio</span>
              </button>
            </div>
          )}

          {activeTab === 'info' && (
            <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300">
              <div className="p-2 rounded-lg bg-zinc-900 border border-white/5">
                <span className="text-[10px] text-zinc-500 uppercase block">Camera Body</span>
                <span className="font-semibold text-white">{selectedPhoto.metadata?.camera || 'Hasselblad H6D-100c'}</span>
              </div>
              <div className="p-2 rounded-lg bg-zinc-900 border border-white/5">
                <span className="text-[10px] text-zinc-500 uppercase block">Lens</span>
                <span className="font-semibold text-white">{selectedPhoto.metadata?.lens || 'HC 2,2/100mm'}</span>
              </div>
              <div className="p-2 rounded-lg bg-zinc-900 border border-white/5">
                <span className="text-[10px] text-zinc-500 uppercase block">Aperture & Shutter</span>
                <span className="font-semibold text-white">{selectedPhoto.metadata?.aperture} · {selectedPhoto.metadata?.shutter}</span>
              </div>
              <div className="p-2 rounded-lg bg-zinc-900 border border-white/5">
                <span className="text-[10px] text-zinc-500 uppercase block">Resolution & Profile</span>
                <span className="font-semibold text-white truncate block">{selectedPhoto.metadata?.resolution}</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Permanent Actions: Approve vs Close */}
        <div className="p-3 bg-zinc-900 border-t border-white/10 flex items-center justify-between gap-3">
          <button
            onClick={() => setShowConfirmApproval(true)}
            className="flex-1 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-md"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Mark as Approved</span>
          </button>

          <button
            onClick={() => setActiveTab('revision')}
            className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs active:scale-95 transition-all"
          >
            Request Revision
          </button>
        </div>
      </div>

      {/* Confirmation Modal for Single Photo Approval */}
      {showConfirmApproval && (
        <div className="absolute inset-0 z-60 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="w-full max-w-sm rounded-3xl bg-zinc-900 border border-white/10 p-6 space-y-4 shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1">
              <h3 className="text-base font-bold text-white">Approve Photograph?</h3>
              <p className="text-xs text-zinc-400">
                Are you sure you want to approve <span className="text-white font-semibold">{selectedPhoto.filename}</span>? The studio will prepare final color master files.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => setShowConfirmApproval(false)}
                className="py-2.5 rounded-xl bg-white/10 text-zinc-300 font-semibold text-xs active:scale-95 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleApprove}
                className="py-2.5 rounded-xl bg-amber-400 text-black font-bold text-xs active:scale-95 transition-all shadow-md"
              >
                Approve Photo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
