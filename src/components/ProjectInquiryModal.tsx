import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Send, Film, CheckCircle2, MessageCircle, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCraft?: string;
}

export default function ProjectInquiryModal({
  isOpen,
  onClose,
  initialCraft,
}: ProjectInquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleRequested: initialCraft || 'Directing',
    projectType: 'Short Film',
    timeline: 'Within 3 Months',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      id="inquiry-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-2xl bg-[#090b0d] border border-white/15 rounded shadow-2xl p-6 sm:p-10 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-[#b91c1c] uppercase">
              <Film className="w-3.5 h-3.5" />
              <span>PRODUCTION COLLABORATION // INQUIRY</span>
            </div>
            <h3 className="font-cinematic text-2xl sm:text-3xl font-bold text-white uppercase mt-1 tracking-wider">
              INITIATE PROJECT
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            data-cursor="button"
            className="p-1.5 rounded border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-10 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#b91c1c]/20 border border-[#b91c1c] flex items-center justify-center mx-auto text-[#b91c1c]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-cinematic text-2xl text-white uppercase tracking-wider font-bold">
              TRANSMISSION RECEIVED
            </h4>
            <p className="font-body text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
              Thank you for reaching out, {formData.name || 'Collaborator'}. Zeehad Haque will review your inquiry regarding {formData.projectType} and reply directly.
            </p>

            <div className="p-4 rounded bg-white/[0.03] border border-white/10 max-w-md mx-auto space-y-3 font-mono text-xs">
              <div className="text-[10px] text-zinc-400 uppercase tracking-widest">
                OR REACH OUT DIRECTLY RIGHT NOW
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://wa.me/8801629851155?text=Hello%20Zeehad,%20I%20just%20submitted%20an%20inquiry%20regarding%20${encodeURIComponent(formData.projectType)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-600/80 hover:bg-emerald-500 text-white transition-colors text-[11px]"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp (01629851155)</span>
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}?subject=Project%20Inquiry%20Follow-up%20%E2%80%94%20${encodeURIComponent(formData.name || 'Collaborator')}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-red-950/60 hover:bg-red-900 border border-red-500/30 text-white transition-colors text-[11px]"
                >
                  <Mail className="w-3.5 h-3.5 text-red-400" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="mt-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-mono text-xs tracking-widest uppercase rounded transition-colors"
            >
              RETURN TO ARCHIVE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-zinc-400 uppercase tracking-widest text-[10px] mb-1.5">
                  YOUR NAME / PRODUCTION COMPANY *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Nadia Rahman / Bengal Arts"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded bg-black/60 border border-white/15 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-[#b91c1c] transition-colors"
                />
              </div>

              <div>
                <label className="block text-zinc-400 uppercase tracking-widest text-[10px] mb-1.5">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@production.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded bg-black/60 border border-white/15 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-[#b91c1c] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-zinc-400 uppercase tracking-widest text-[10px] mb-1.5">
                  ROLE REQUESTED
                </label>
                <select
                  value={formData.roleRequested}
                  onChange={(e) => setFormData({ ...formData, roleRequested: e.target.value })}
                  className="w-full px-3 py-2.5 rounded bg-black/60 border border-white/15 text-zinc-200 focus:outline-none focus:border-[#b91c1c]"
                >
                  <option value="Directing">Directing</option>
                  <option value="Cinematography">Cinematography</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Color Grading">Color Grading</option>
                  <option value="Screenplay / Story">Screenplay / Story</option>
                  <option value="Full Production">Full Production</option>
                </select>
              </div>

              <div>
                <label className="block text-zinc-400 uppercase tracking-widest text-[10px] mb-1.5">
                  PROJECT FORMAT
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3 py-2.5 rounded bg-black/60 border border-white/15 text-zinc-200 focus:outline-none focus:border-[#b91c1c]"
                >
                  <option value="Short Film">Short Film</option>
                  <option value="Feature Film">Feature Film</option>
                  <option value="Music Film">Music Film</option>
                  <option value="Documentary">Documentary</option>
                  <option value="Commercial / Branded Film">Commercial / Branded</option>
                  <option value="Creative Concept">Creative Concept</option>
                </select>
              </div>

              <div>
                <label className="block text-zinc-400 uppercase tracking-widest text-[10px] mb-1.5">
                  TARGET TIMELINE
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-3 py-2.5 rounded bg-black/60 border border-white/15 text-zinc-200 focus:outline-none focus:border-[#b91c1c]"
                >
                  <option value="Immediate (1-4 Weeks)">Immediate (1-4 Weeks)</option>
                  <option value="Within 3 Months">Within 3 Months</option>
                  <option value="Late 2026">Late 2026</option>
                  <option value="In Development">In Development</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-zinc-400 uppercase tracking-widest text-[10px] mb-1.5">
                BRIEF LOGLINE OR INQUIRY NOTE *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Share your logline, script status, visual ideas, or how you would like to collaborate..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded bg-black/60 border border-white/15 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-[#b91c1c] transition-colors"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3 text-[11px] text-zinc-400 font-mono">
                <span>Direct:</span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white flex items-center gap-1 transition-colors"
                >
                  <Mail className="w-3 h-3 text-[#b91c1c]" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
                <span className="text-zinc-700">•</span>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-1 transition-colors text-emerald-400"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>01629851155</span>
                </a>
              </div>

              <button
                type="submit"
                data-cursor="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#b91c1c] hover:bg-red-700 text-white font-mono text-xs tracking-widest uppercase rounded shadow-lg transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>DISPATCH INQUIRY</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
