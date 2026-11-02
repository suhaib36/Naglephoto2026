import React, { useState } from 'react';
import { 
  Send, 
  Paperclip, 
  Image as ImageIcon, 
  CheckCheck, 
  Phone, 
  ChevronDown,
  Sparkles,
  Camera
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TopHeader } from '../components/TopHeader';

export const MessagesScreen: React.FC = () => {
  const { 
    projects, 
    messages, 
    activeChatProjectId, 
    setActiveChatProjectId, 
    sendChatMessage,
    clientProfile
  } = useApp();

  const [inputText, setInputText] = useState('');
  const [showProjectPicker, setShowProjectPicker] = useState(false);

  const activeProject = projects.find(p => p.id === activeChatProjectId) || projects[0];
  const currentMessages = messages[activeProject?.id || 'proj-01'] || [];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !activeProject) return;
    sendChatMessage(activeProject.id, inputText);
    setInputText('');
  };

  const quickCannedReplies = [
    'Looks stunning, approving now!',
    'Can we check color balance on shot #3?',
    'Sent over the revised lookbook.',
    'What time will the studio open on shoot day?'
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#121214] text-zinc-100 h-full relative">
      {/* Messages Header with Project Switcher */}
      <div className="sticky top-0 z-30 bg-[#121214]/95 backdrop-blur-md border-b border-white/5 px-4 py-2.5 flex items-center justify-between">
        <div className="relative">
          <button
            onClick={() => setShowProjectPicker(!showProjectPicker)}
            className="flex items-center gap-1.5 text-left group"
          >
            <div>
              <p className="text-[10px] font-semibold text-amber-400 uppercase tracking-wider">
                Direct Studio Thread
              </p>
              <h2 className="text-sm font-bold text-white flex items-center gap-1">
                <span className="truncate max-w-[200px]">{activeProject?.title}</span>
                <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-transform" />
              </h2>
            </div>
          </button>

          {/* Project Switcher Dropdown */}
          {showProjectPicker && (
            <div className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl p-1.5 z-40 animate-slideDown">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 px-3 py-1.5 block">
                Select Project Conversation
              </span>
              {projects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setActiveChatProjectId(p.id);
                    setShowProjectPicker(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all ${
                    p.id === activeProject.id
                      ? 'bg-amber-400 text-black font-bold'
                      : 'text-zinc-300 hover:bg-white/5'
                  }`}
                >
                  <span className="truncate">{p.title}</span>
                  <span className="text-[10px] opacity-75">{p.status}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Studio Phone shortcut */}
        <a
          href="tel:7733491164"
          className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 active:scale-95 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
          title="Call Nagle Studio"
        >
          <Phone className="w-4 h-4 text-emerald-400" />
        </a>
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3.5 pb-36 no-scrollbar">
        {/* Studio Presence Card */}
        <div className="p-3 rounded-2xl bg-zinc-900/60 border border-white/5 text-center space-y-1">
          <div className="flex justify-center -space-x-2 mb-1.5">
            <img 
              src="/photos/central_camera_chicago.png" 
              alt="Joe Nagle" 
              className="w-8 h-8 rounded-full border-2 border-[#121214] object-cover"
            />
            <img 
              src="/photos/mandolin_studio.png" 
              alt="Elena Rostova" 
              className="w-8 h-8 rounded-full border-2 border-[#121214] object-cover"
            />
          </div>
          <p className="text-xs font-semibold text-zinc-200">
            Joe Nagle & Elena Rostova
          </p>
          <p className="text-[10px] text-zinc-400">
            Principal Photographer & Lead Retouching Lead · Chicago Studio
          </p>
        </div>

        {currentMessages.map((msg) => {
          const isMe = msg.isClient;

          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} space-y-1`}
            >
              <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 px-1">
                <span>{msg.senderName}</span>
                <span>·</span>
                <span>{msg.timestamp}</span>
              </div>

              <div
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs shadow-md ${
                  isMe
                    ? 'bg-amber-400 text-black font-medium rounded-br-xs'
                    : 'bg-zinc-900 border border-white/8 text-zinc-100 rounded-bl-xs'
                }`}
              >
                <p className="leading-relaxed">{msg.text}</p>

                {/* Optional Image Attachment */}
                {msg.attachment && msg.attachment.url && (
                  <div className="mt-2 rounded-xl overflow-hidden border border-black/20">
                    <img 
                      src={msg.attachment.url} 
                      alt={msg.attachment.name} 
                      className="w-full h-auto object-cover max-h-44"
                    />
                    <div className="p-1.5 bg-black/40 text-[10px] flex items-center justify-between text-zinc-200">
                      <span className="truncate">{msg.attachment.name}</span>
                      <span>{msg.attachment.size}</span>
                    </div>
                  </div>
                )}
              </div>

              {isMe && (
                <div className="flex items-center gap-1 text-[9px] text-zinc-500 pr-1">
                  <CheckCheck className="w-3 h-3 text-amber-400" />
                  <span>Delivered</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Floating Bottom Input Bar - positioned above BottomNav inside the screen layout */}
      <div className="absolute bottom-[58px] left-0 right-0 z-20 p-2.5 bg-[#121214]/98 backdrop-blur-xl border-t border-white/8">
        <div className="w-full space-y-2">
          {/* Quick Replies Carousel */}
          <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {quickCannedReplies.map((reply, i) => (
              <button
                key={i}
                onClick={() => setInputText(reply)}
                className="text-[10px] whitespace-nowrap px-2.5 py-1 rounded-full bg-zinc-900 text-zinc-400 hover:text-white border border-white/5 active:scale-95 transition-all"
              >
                {reply}
              </button>
            ))}
          </div>

          <form onSubmit={handleSend} className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setInputText(prev => prev + ' [Attached reference]')}
              className="w-9 h-9 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white active:scale-95 transition-all"
              title="Attach photo"
            >
              <Paperclip className="w-4 h-4" />
            </button>

            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Message Joe Nagle about ${activeProject?.title}…`}
              className="flex-1 bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
            />

            <button
              type="submit"
              disabled={!inputText.trim()}
              className="w-9 h-9 rounded-full bg-amber-400 disabled:opacity-40 text-black font-bold flex items-center justify-center active:scale-95 transition-all shrink-0 shadow-md"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
