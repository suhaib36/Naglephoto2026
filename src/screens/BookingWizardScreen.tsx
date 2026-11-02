import React, { useState } from 'react';
import { 
  Camera, 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Upload, 
  Calendar, 
  MapPin, 
  FileText, 
  Sparkles, 
  Image as ImageIcon,
  CheckCircle2,
  Trash2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SERVICE_CATEGORIES } from '../data/mockData';
import { ServiceCategory } from '../types';

export const BookingWizardScreen: React.FC = () => {
  const { 
    clientProfile, 
    bookingInitialCategory, 
    createProject, 
    openProject, 
    goBack 
  } = useApp();

  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);

  // Form State
  const [category, setCategory] = useState<ServiceCategory>(bookingInitialCategory || 'Product Photography');
  const [projectTitle, setProjectTitle] = useState('');
  const [brandName, setBrandName] = useState(clientProfile.company);
  const [description, setDescription] = useState('');
  const [estimatedPhotos, setEstimatedPhotos] = useState<number>(20);
  const [shootDate, setShootDate] = useState('Nov 25, 2026');
  const [shootType, setShootType] = useState<'Studio' | 'On Location'>('Studio');
  const [locationAddress, setLocationAddress] = useState('Nagle Photography Studio, Chicago, IL');
  const [referenceImages, setReferenceImages] = useState<string[]>([
    '/photos/denim_apparel.png',
    '/photos/mandolin_studio.png'
  ]);
  const [creativeBriefName, setCreativeBriefName] = useState('Brand_Lookbook_Creative_Brief_v2.pdf');
  const [submittedProjectId, setSubmittedProjectId] = useState<string | null>(null);

  const handleNext = () => {
    if (step === 1 && !category) return;
    if (step === 2 && !projectTitle.trim()) {
      setProjectTitle(`${category} Project`);
    }
    setStep(prev => Math.min(prev + 1, 4) as any);
  };

  const handlePrev = () => {
    if (step === 1) {
      goBack();
    } else {
      setStep(prev => Math.max(prev - 1, 1) as any);
    }
  };

  const handleAddSampleReference = () => {
    const samples = [
      '/photos/garden_lifestyle.png',
      '/photos/restaurant_event.png',
      '/photos/central_camera_chicago.png'
    ];
    const nextImg = samples[referenceImages.length % samples.length];
    setReferenceImages(prev => [...prev, nextImg]);
  };

  const handleRemoveReference = (index: number) => {
    setReferenceImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    const selectedCategoryObj = SERVICE_CATEGORIES.find(c => c.id === category);

    const newId = createProject({
      title: projectTitle || `${category} Campaign`,
      clientCompany: brandName || clientProfile.company,
      category,
      thumbnail: selectedCategoryObj?.image || referenceImages[0] || '/photos/denim_apparel.png',
      shootDate,
      shootType,
      locationAddress: shootType === 'Studio' ? 'Nagle Photography Studio, 1420 W Fulton Market, Chicago, IL 60607' : locationAddress,
      description: description || `Client photography commission for ${brandName}.`,
      estimatedPhotos,
      requirements: [
        `Deliverables focused on ${category}`,
        `${shootType} setup with professional strobe package`,
        '16-bit master archives + Web P3 exports',
        'Creative brief attached: ' + creativeBriefName
      ],
      referenceImages
    });

    setSubmittedProjectId(newId);
    setStep(5);
  };

  return (
    <div className="flex-1 flex flex-col bg-[#121214] text-zinc-100">
      {/* Top Header */}
      <div className="sticky top-0 z-30 bg-[#121214]/90 backdrop-blur-md border-b border-white/5 px-4 py-3 flex items-center justify-between">
        <button
          onClick={handlePrev}
          className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 active:scale-95 flex items-center justify-center text-zinc-300 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
            {step < 5 ? `Step ${step} of 4` : 'Request Complete'}
          </p>
          <h1 className="text-xs font-semibold text-zinc-200">
            {step === 1 && 'Select Photography Service'}
            {step === 2 && 'Project Details'}
            {step === 3 && 'References & Brief'}
            {step === 4 && 'Review & Submit'}
            {step === 5 && 'Request Status'}
          </h1>
        </div>

        <div className="w-9" />
      </div>

      {/* Step Indicator Progress Bar */}
      {step < 5 && (
        <div className="h-1 bg-zinc-900 w-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      )}

      {/* Main Step Content */}
      <div className="flex-1 p-4 space-y-5 pb-24 overflow-y-auto no-scrollbar">
        {/* STEP 1: SELECT PHOTOGRAPHY SERVICE */}
        {step === 1 && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <h2 className="text-base font-bold text-white">Choose a photography specialty</h2>
              <p className="text-xs text-zinc-400 mt-0.5">
                Joe Nagle brings 20+ years of studio and on-figure commercial expertise.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {SERVICE_CATEGORIES.map((cat) => {
                const isSelected = category === cat.id;

                return (
                  <div
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    className={`relative rounded-2xl overflow-hidden cursor-pointer border transition-all duration-200 group active:scale-[0.98] ${
                      isSelected 
                        ? 'border-amber-400 ring-2 ring-amber-400/30 shadow-lg' 
                        : 'border-white/8 hover:border-white/20'
                    }`}
                  >
                    <div className="aspect-[4/3] bg-zinc-950 relative overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-md">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}

                      <div className="absolute bottom-2 left-2 right-2">
                        <h3 className="text-xs font-bold text-white leading-tight">
                          {cat.name}
                        </h3>
                        <p className="text-[9px] text-zinc-300 mt-0.5 line-clamp-1">
                          {cat.tagline}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: PROJECT DETAILS */}
        {step === 2 && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <h2 className="text-base font-bold text-white">Project Details</h2>
              <p className="text-xs text-zinc-400 mt-0.5">
                Tell us about your shoot scope, timeline, and location preference.
              </p>
            </div>

            <div className="space-y-3.5">
              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1">
                  Project Title *
                </label>
                <input
                  type="text"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  placeholder="e.g. Winter Luxury Catalog Shoot"
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1">
                  Brand or Company Name
                </label>
                <input
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1">
                  Project Description & Vision
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your creative concept, product types, hero elements, and desired mood..."
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-zinc-300 block mb-1">
                    Estimated Photographs
                  </label>
                  <select
                    value={estimatedPhotos}
                    onChange={(e) => setEstimatedPhotos(Number(e.target.value))}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value={10}>10 Deliverables</option>
                    <option value={20}>20 Deliverables</option>
                    <option value={35}>35 Deliverables</option>
                    <option value={50}>50+ Deliverables</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-zinc-300 block mb-1">
                    Preferred Shoot Date
                  </label>
                  <input
                    type="text"
                    value={shootDate}
                    onChange={(e) => setShootDate(e.target.value)}
                    placeholder="e.g. Nov 25, 2026"
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Studio or Location Switcher */}
              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                  Production Venue
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setShootType('Studio');
                      setLocationAddress('Nagle Photography Studio, 1420 W Fulton Market, Chicago, IL 60607');
                    }}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border flex items-center justify-center gap-2 transition-all ${
                      shootType === 'Studio'
                        ? 'bg-amber-400 text-black border-amber-400 shadow-md'
                        : 'bg-zinc-900 text-zinc-400 border-white/10 hover:text-white'
                    }`}
                  >
                    <Camera className="w-4 h-4" />
                    <span>Nagle Chicago Studio</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShootType('On Location')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border flex items-center justify-center gap-2 transition-all ${
                      shootType === 'On Location'
                        ? 'bg-amber-400 text-black border-amber-400 shadow-md'
                        : 'bg-zinc-900 text-zinc-400 border-white/10 hover:text-white'
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                    <span>On-Site / Location</span>
                  </button>
                </div>
              </div>

              {shootType === 'On Location' && (
                <div>
                  <label className="text-xs font-semibold text-zinc-300 block mb-1">
                    Location Address / Venue Details
                  </label>
                  <input
                    type="text"
                    value={locationAddress}
                    onChange={(e) => setLocationAddress(e.target.value)}
                    placeholder="Enter Chicago or regional venue address..."
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* STEP 3: UPLOAD REFERENCES & BRIEF */}
        {step === 3 && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <h2 className="text-base font-bold text-white">Visual References & Creative Brief</h2>
              <p className="text-xs text-zinc-400 mt-0.5">
                Attach moodboard imagery, lighting references, or design layout guidelines.
              </p>
            </div>

            {/* Reference Image Gallery Upload Interaction */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-300">
                  Moodboard References ({referenceImages.length})
                </span>
                <button
                  type="button"
                  onClick={handleAddSampleReference}
                  className="text-xs text-amber-400 font-semibold hover:underline flex items-center gap-1"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>+ Add Reference Image</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {referenceImages.map((img, i) => (
                  <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-zinc-950 border border-white/10 group">
                    <img src={img} alt={`Ref ${i}`} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => handleRemoveReference(i)}
                      className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/70 text-white flex items-center justify-center opacity-80 hover:opacity-100"
                      aria-label="Remove image"
                    >
                      <Trash2 className="w-3 h-3 text-rose-400" />
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={handleAddSampleReference}
                  className="aspect-square rounded-xl border border-dashed border-white/20 hover:border-amber-400/60 bg-zinc-900/50 flex flex-col items-center justify-center gap-1 text-zinc-400 hover:text-white transition-all"
                >
                  <ImageIcon className="w-5 h-5 text-zinc-500" />
                  <span className="text-[10px] font-medium">Add Image</span>
                </button>
              </div>
            </div>

            {/* Creative Brief File Attachment */}
            <div className="rounded-2xl bg-zinc-900 border border-white/10 p-3.5 space-y-2">
              <span className="text-xs font-semibold text-zinc-300 block">
                Attached Creative Brief
              </span>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950 border border-white/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-200">{creativeBriefName}</p>
                    <p className="text-[10px] text-zinc-500">2.4 MB · PDF Document</p>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  Attached
                </span>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: REVIEW & SUBMIT */}
        {step === 4 && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <h2 className="text-base font-bold text-white">Review Request Summary</h2>
              <p className="text-xs text-zinc-400 mt-0.5">
                Verify details before submitting directly to Joe Nagle.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-900 border border-white/10 divide-y divide-white/5 overflow-hidden shadow-lg">
              <div className="p-3.5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Service Category</span>
                  <span className="text-xs font-bold text-amber-300">{category}</span>
                </div>
                <button onClick={() => setStep(1)} className="text-xs text-zinc-400 hover:text-white underline">Edit</button>
              </div>

              <div className="p-3.5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Project Title</span>
                  <span className="text-xs font-semibold text-white">{projectTitle || `${category} Campaign`}</span>
                </div>
                <button onClick={() => setStep(2)} className="text-xs text-zinc-400 hover:text-white underline">Edit</button>
              </div>

              <div className="p-3.5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Shoot Date & Venue</span>
                  <span className="text-xs font-semibold text-white">{shootDate} ({shootType})</span>
                  <p className="text-[11px] text-zinc-400 mt-0.5">{locationAddress}</p>
                </div>
                <button onClick={() => setStep(2)} className="text-xs text-zinc-400 hover:text-white underline">Edit</button>
              </div>

              <div className="p-3.5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Deliverables & References</span>
                  <span className="text-xs font-semibold text-white">{estimatedPhotos} Photographs · {referenceImages.length} references</span>
                </div>
                <button onClick={() => setStep(3)} className="text-xs text-zinc-400 hover:text-white underline">Edit</button>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300/90 leading-relaxed">
              Upon submission, Joe Nagle will review your brief and calendar hold, and update quotation details directly in your portal.
            </div>
          </div>
        )}

        {/* STEP 5: CONFIRMATION SCREEN & STATUS */}
        {step === 5 && (
          <div className="space-y-6 text-center py-6 animate-scaleUp">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                Request Submitted
              </span>
              <h2 className="text-lg font-bold text-white">
                Photography Request Dispatched!
              </h2>
              <p className="text-xs text-zinc-400 max-w-[280px] mx-auto leading-relaxed">
                Your request for <span className="text-white font-semibold">{projectTitle || `${category} Campaign`}</span> has been received by Joe Nagle.
              </p>
            </div>

            {/* Status card */}
            <div className="p-4 rounded-2xl bg-zinc-900 border border-white/10 text-left space-y-2 max-w-[320px] mx-auto shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Current Status</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  Request Submitted
                </span>
              </div>
              <p className="text-xs text-zinc-300 font-medium">
                Next: Studio review & quote proposal within 24 hours.
              </p>
            </div>

            <div className="pt-4 flex flex-col gap-2 max-w-[300px] mx-auto">
              <button
                onClick={() => {
                  if (submittedProjectId) openProject(submittedProjectId);
                }}
                className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs active:scale-95 transition-all shadow-md"
              >
                View in My Projects
              </button>

              <button
                onClick={goBack}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-zinc-300 font-semibold text-xs active:scale-95 transition-all"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Fixed Bottom Action for Steps 1–4 */}
      {step < 5 && (
        <div className="absolute bottom-0 left-0 right-0 z-30 p-4 pb-6 bg-[#121214]/95 backdrop-blur-md border-t border-white/8">
          <div className="w-full flex items-center justify-between gap-3">
            <button
              onClick={handlePrev}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-zinc-300 font-semibold text-xs active:scale-95 transition-all"
            >
              {step === 1 ? 'Cancel' : 'Back'}
            </button>

            {step < 4 ? (
              <button
                onClick={handleNext}
                className="flex-1 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-md"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex-1 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Submit Request to Nagle</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
