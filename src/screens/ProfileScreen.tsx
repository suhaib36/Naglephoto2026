import React, { useState } from 'react';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Bell, 
  Edit3, 
  ExternalLink, 
  ShieldCheck, 
  Camera, 
  Layers, 
  Check, 
  Save, 
  X,
  PhoneCall
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TopHeader } from '../components/TopHeader';

export const ProfileScreen: React.FC = () => {
  const { clientProfile, updateProfile, projects } = useApp();
  const [isEditing, setIsEditing] = useState(false);

  // Edit modal state
  const [editName, setEditName] = useState(clientProfile.name);
  const [editCompany, setEditCompany] = useState(clientProfile.company);
  const [editTitle, setEditTitle] = useState(clientProfile.title);
  const [editEmail, setEditEmail] = useState(clientProfile.email);
  const [editPhone, setEditPhone] = useState(clientProfile.phone);

  const completedProjects = projects.filter(p => p.tabCategory === 'completed').length;
  const activeProjects = projects.filter(p => p.tabCategory === 'active').length;

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      name: editName,
      company: editCompany,
      title: editTitle,
      email: editEmail,
      phone: editPhone
    });
    setIsEditing(false);
  };

  const toggleNotif = (key: keyof typeof clientProfile.notificationsEnabled) => {
    updateProfile({
      notificationsEnabled: {
        ...clientProfile.notificationsEnabled,
        [key]: !clientProfile.notificationsEnabled[key]
      }
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#121214] text-zinc-100">
      <TopHeader 
        title="Client Profile" 
        rightAction={
          <button
            onClick={() => setIsEditing(true)}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 active:scale-95 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
            aria-label="Edit Profile"
          >
            <Edit3 className="w-4 h-4" />
          </button>
        }
      />

      <div className="p-4 space-y-5 pb-24">
        {/* Profile Header Card */}
        <div className="rounded-3xl bg-zinc-900/90 border border-white/8 p-5 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative inline-block mx-auto mb-3">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-amber-400 p-0.5 shadow-md">
              <img
                src={clientProfile.avatar}
                alt={clientProfile.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#121214] flex items-center justify-center text-black">
              <ShieldCheck className="w-3 h-3 text-black" />
            </span>
          </div>

          <h2 className="text-base font-bold text-white">
            {clientProfile.name}
          </h2>
          <p className="text-xs text-amber-400 font-semibold mt-0.5">
            {clientProfile.title}
          </p>
          <p className="text-xs text-zinc-400 mt-0.5">
            {clientProfile.company}
          </p>

          <button
            onClick={() => setIsEditing(true)}
            className="mt-4 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs inline-flex items-center gap-1.5 active:scale-95 transition-all"
          >
            <Edit3 className="w-3 h-3" />
            <span>Edit Account Info</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-3 rounded-2xl bg-zinc-900/60 border border-white/5">
            <span className="text-base font-bold text-white">{projects.length}</span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-wider block mt-0.5">Total Shoots</span>
          </div>
          <div className="p-3 rounded-2xl bg-zinc-900/60 border border-white/5">
            <span className="text-base font-bold text-amber-400">{activeProjects}</span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-wider block mt-0.5">In Progress</span>
          </div>
          <div className="p-3 rounded-2xl bg-zinc-900/60 border border-white/5">
            <span className="text-base font-bold text-emerald-400">{completedProjects}</span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-wider block mt-0.5">Delivered</span>
          </div>
        </div>

        {/* Client Contact Info */}
        <div className="rounded-2xl bg-zinc-900/80 border border-white/8 divide-y divide-white/5 overflow-hidden shadow-md">
          <div className="p-3.5 flex items-center gap-3 text-xs">
            <Building2 className="w-4 h-4 text-zinc-500 shrink-0" />
            <div className="flex-1">
              <span className="text-[10px] text-zinc-500 uppercase block">Company</span>
              <span className="text-white font-medium">{clientProfile.company}</span>
            </div>
          </div>

          <div className="p-3.5 flex items-center gap-3 text-xs">
            <Mail className="w-4 h-4 text-zinc-500 shrink-0" />
            <div className="flex-1">
              <span className="text-[10px] text-zinc-500 uppercase block">Business Email</span>
              <span className="text-white font-medium">{clientProfile.email}</span>
            </div>
          </div>

          <div className="p-3.5 flex items-center gap-3 text-xs">
            <Phone className="w-4 h-4 text-zinc-500 shrink-0" />
            <div className="flex-1">
              <span className="text-[10px] text-zinc-500 uppercase block">Direct Phone</span>
              <span className="text-white font-medium">{clientProfile.phone}</span>
            </div>
          </div>

          <div className="p-3.5 flex items-center gap-3 text-xs">
            <MapPin className="w-4 h-4 text-zinc-500 shrink-0" />
            <div className="flex-1">
              <span className="text-[10px] text-zinc-500 uppercase block">HQ City</span>
              <span className="text-white font-medium">{clientProfile.city}</span>
            </div>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="rounded-2xl bg-zinc-900/80 border border-white/8 p-4 space-y-3 shadow-md">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-zinc-400" />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Notification Preferences
            </h3>
          </div>

          <div className="space-y-3 pt-1">
            <div className="flex items-center justify-between text-xs">
              <div>
                <p className="font-semibold text-zinc-200">Gallery Proof Uploads</p>
                <p className="text-[11px] text-zinc-500">Alert when new raw proofs are available</p>
              </div>
              <button
                type="button"
                onClick={() => toggleNotif('galleryUploads')}
                className={`w-11 h-6 rounded-full transition-colors relative ${
                  clientProfile.notificationsEnabled.galleryUploads ? 'bg-amber-400' : 'bg-zinc-800'
                }`}
              >
                <span className={`w-4 h-4 rounded-full bg-black transition-transform absolute top-1 ${
                  clientProfile.notificationsEnabled.galleryUploads ? 'left-6' : 'left-1'
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between text-xs">
              <div>
                <p className="font-semibold text-zinc-200">Retouch Revisions</p>
                <p className="text-[11px] text-zinc-500">Alert when studio updates photo layers</p>
              </div>
              <button
                type="button"
                onClick={() => toggleNotif('revisions')}
                className={`w-11 h-6 rounded-full transition-colors relative ${
                  clientProfile.notificationsEnabled.revisions ? 'bg-amber-400' : 'bg-zinc-800'
                }`}
              >
                <span className={`w-4 h-4 rounded-full bg-black transition-transform absolute top-1 ${
                  clientProfile.notificationsEnabled.revisions ? 'left-6' : 'left-1'
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between text-xs">
              <div>
                <p className="font-semibold text-zinc-200">Shoot Call Sheet Reminders</p>
                <p className="text-[11px] text-zinc-500">24-hour reminder before scheduled shoots</p>
              </div>
              <button
                type="button"
                onClick={() => toggleNotif('shootReminders')}
                className={`w-11 h-6 rounded-full transition-colors relative ${
                  clientProfile.notificationsEnabled.shootReminders ? 'bg-amber-400' : 'bg-zinc-800'
                }`}
              >
                <span className={`w-4 h-4 rounded-full bg-black transition-transform absolute top-1 ${
                  clientProfile.notificationsEnabled.shootReminders ? 'left-6' : 'left-1'
                }`} />
              </button>
            </div>
          </div>
        </div>

        {/* Nagle Photography Studio Official Info */}
        <div className="rounded-2xl bg-zinc-900 border border-white/10 p-4 space-y-3 shadow-lg">
          <div className="flex items-center gap-3">
            <img 
              src="/logo_nagle_photography.png" 
              alt="Nagle Photography" 
              className="h-7 object-contain"
            />
            <div>
              <h4 className="text-xs font-bold text-white">Nagle Photography</h4>
              <p className="text-[10px] text-zinc-400">Joe Nagle · Commercial & Editorial</p>
            </div>
          </div>

          <div className="space-y-1 text-xs text-zinc-300 pt-1 border-t border-white/5">
            <p className="flex items-center justify-between">
              <span className="text-zinc-500">Studio:</span>
              <span>1420 W Fulton Market, Chicago, IL 60607</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="text-zinc-500">Phone:</span>
              <a href="tel:7733491164" className="text-amber-400 font-semibold hover:underline">
                (773) 349-1164
              </a>
            </p>
            <p className="flex items-center justify-between">
              <span className="text-zinc-500">Email:</span>
              <a href="mailto:admin@nagleweb.com" className="text-amber-400 hover:underline">
                admin@nagleweb.com
              </a>
            </p>
            <p className="flex items-center justify-between">
              <span className="text-zinc-500">Official Site:</span>
              <a 
                href="https://nagleweb.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-amber-400 flex items-center gap-1 hover:underline"
              >
                <span>nagleweb.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="w-full max-w-sm rounded-3xl bg-zinc-900 border border-white/10 p-5 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-sm font-bold text-white">Edit Client Profile</h3>
              <button
                onClick={() => setIsEditing(false)}
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-3">
              <div>
                <label className="text-[11px] font-semibold text-zinc-400 block mb-1">Full Name</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-zinc-400 block mb-1">Company / Brand</label>
                <input
                  type="text"
                  value={editCompany}
                  onChange={(e) => setEditCompany(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-zinc-400 block mb-1">Job Title</label>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-zinc-400 block mb-1">Business Email</label>
                <input
                  type="email"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-zinc-400 block mb-1">Phone</label>
                <input
                  type="tel"
                  value={editPhone}
                  onChange={(e) => setEditPhone(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="flex-1 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-zinc-300 font-semibold text-xs transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs transition-all shadow-md"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
