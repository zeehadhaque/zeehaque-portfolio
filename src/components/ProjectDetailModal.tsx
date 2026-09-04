import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Clock, Film, Calendar, Camera, User, Layers, ArrowLeft, ArrowRight, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { FilmProject } from '../types';

interface ProjectDetailModalProps {
  project: FilmProject | null;
  onClose: () => void;
  onSelectProject: (p: FilmProject) => void;
  allProjects: FilmProject[];
}

export default function ProjectDetailModal({
  project,
  onClose,
  onSelectProject,
  allProjects,
}: ProjectDetailModalProps) {
  const [selectedStillIndex, setSelectedStillIndex] = useState<number | null>(null);
  const [showTrailer, setShowTrailer] = useState(false);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div
      id="project-case-study-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-2xl text-zinc-200 animate-in fade-in duration-300"
    >
      {/* Top Floating Control Bar */}
      <div className="sticky top-0 z-40 bg-[#060708]/90 backdrop-blur-md border-b border-white/10 px-5 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#b91c1c] animate-pulse" />
          <span className="font-mono text-xs tracking-[0.25em] text-zinc-400 uppercase hidden sm:inline">
            ARCHIVE // CASE STUDY
          </span>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span className="font-cinematic text-sm font-bold tracking-widest text-white uppercase">
            {project.title}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => onSelectProject(prevProject)}
              data-cursor="button"
              className="p-1.5 rounded border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white transition-colors"
              title="Previous Film"
              aria-label="Previous Film"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onSelectProject(nextProject)}
              data-cursor="button"
              className="p-1.5 rounded border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white transition-colors"
              title="Next Film"
              aria-label="Next Film"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <button
            id="btn-close-project-modal"
            type="button"
            onClick={onClose}
            data-cursor="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/20 hover:border-white/40 bg-white/5 hover:bg-[#b91c1c] text-white font-mono text-xs tracking-widest uppercase transition-all"
          >
            <X className="w-4 h-4" />
            <span>CLOSE</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-16 space-y-16">
        {/* Film Header Banner & Title Sequence */}
        <div className="space-y-6">
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-[0.2em] text-zinc-400 uppercase">
            <span className="px-2.5 py-1 rounded bg-[#b91c1c]/20 border border-[#b91c1c]/40 text-red-200">
              {project.format}
            </span>
            <span>YEAR: {project.year}</span>
            <span className="text-zinc-600">•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-zinc-500" />
              {project.runtime}
            </span>
            <span className="text-zinc-600">•</span>
            <span>{project.genre}</span>
          </div>

          {/* Large Title + Bengali Script */}
          <div>
            {project.bengaliTitle && (
              <div className="text-xl sm:text-2xl font-light text-zinc-400 tracking-wider mb-2">
                {project.bengaliTitle}
              </div>
            )}
            <h1 className="font-cinematic font-black text-4xl sm:text-6xl md:text-7xl tracking-wider text-white uppercase drop-shadow-lg">
              {project.title}
            </h1>
          </div>

          {/* Thematic Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.thematicTags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-zinc-400 uppercase"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Banner / Trailer Visual Player Area */}
        <div className="relative w-full aspect-[16/9] md:aspect-[2.39/1] rounded overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl">
          {showTrailer && project.trailerUrl ? (
            <div className="relative w-full h-full">
              <iframe
                src={`${project.trailerUrl}?autoplay=1&rel=0`}
                title={`${project.title} Trailer`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                type="button"
                onClick={() => setShowTrailer(false)}
                className="absolute top-3 right-3 px-3 py-1.5 bg-black/85 hover:bg-[#b91c1c] text-white font-mono text-[10px] tracking-widest rounded border border-white/20 uppercase transition-colors shadow-lg z-10"
              >
                BACK TO STILL
              </button>
            </div>
          ) : (
            <>
              <img
                src={project.bannerImage}
                alt={`${project.title} Banner Still`}
                className="w-full h-full object-cover filter brightness-75 contrast-110"
              />
              <div className="absolute inset-0 cinematic-vignette opacity-70" />
              
              {/* Play Trailer CTA */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 group">
                <button
                  type="button"
                  onClick={() => setShowTrailer(true)}
                  data-cursor="play"
                  className="p-5 sm:p-6 rounded-full border border-white/40 bg-black/60 hover:bg-[#b91c1c] hover:border-[#b91c1c] text-white transition-all shadow-[0_0_30px_rgba(0,0,0,0.8)] group-hover:scale-110"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </button>
                <span className="mt-3 font-mono text-xs tracking-[0.3em] uppercase text-white font-semibold">
                  {project.trailerUrl ? "WATCH FILM / TRAILER" : "PREVIEW DOSSIER"}
                </span>
                {project.trailerUrl && (
                  <span className="text-[10px] font-mono text-red-300/90 tracking-widest mt-1 uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                    <span>YOUTUBE MASTER AVAILABLE</span>
                  </span>
                )}
              </div>

              <div className="absolute bottom-4 right-4 font-mono text-[10px] tracking-widest text-zinc-400 bg-black/60 px-2 py-1 rounded">
                FRAME RATIO: {project.technicalSpecs.aspectRatio}
              </div>
            </>
          )}
        </div>

        {/* Core Narrative & Role Breakdown (2-Column Editorial Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-6 border-t border-white/10">
          {/* Left 2 Cols: Synopsis & Visual Approach */}
          <div className="lg:col-span-2 space-y-10">
            {/* Synopsis */}
            <div>
              <div className="font-mono text-xs tracking-[0.3em] text-[#b91c1c] uppercase mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b91c1c]" />
                <span>SYNOPSIS</span>
              </div>
              <p className="font-body text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
                {project.synopsis}
              </p>
            </div>

            {/* My Role */}
            <div className="p-6 rounded bg-white/[0.02] border border-white/5 space-y-3">
              <div className="font-mono text-xs tracking-[0.3em] text-white uppercase flex items-center gap-2">
                <User className="w-4 h-4 text-[#b91c1c]" />
                <span>MY ROLE &amp; DIRECTORIAL APPROACH</span>
              </div>
              <div className="text-xs font-mono text-zinc-400 tracking-wider">
                {project.role}
              </div>
              <p className="font-body text-sm sm:text-base text-zinc-300 leading-relaxed">
                {project.myRoleDescription}
              </p>
            </div>

            {/* Visual Approach */}
            <div>
              <div className="font-mono text-xs tracking-[0.3em] text-[#b91c1c] uppercase mb-3 flex items-center gap-2">
                <Camera className="w-4 h-4 text-[#b91c1c]" />
                <span>VISUAL APPROACH &amp; ATMOSPHERE</span>
              </div>
              <p className="font-body text-sm sm:text-base text-zinc-300 leading-relaxed">
                {project.visualApproach}
              </p>
            </div>

            {/* Notes / Awards */}
            {project.awardsOrNotes && project.awardsOrNotes.length > 0 && (
              <div className="pt-4 border-t border-white/5">
                <div className="font-mono text-xs tracking-[0.25em] text-zinc-400 uppercase mb-3">
                  SELECTIONS &amp; FESTIVAL NOTES
                </div>
                <ul className="space-y-2">
                  {project.awardsOrNotes.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-zinc-300 font-mono">
                      <span className="text-[#b91c1c]">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Col: Technical Specifications & Credits */}
          <div className="space-y-8">
            {/* Technical Specs */}
            <div className="p-5 rounded bg-white/[0.02] border border-white/10 space-y-4">
              <div className="font-mono text-xs tracking-[0.25em] text-white uppercase flex items-center gap-2 border-b border-white/10 pb-3">
                <Layers className="w-4 h-4 text-[#b91c1c]" />
                <span>TECHNICAL SPECIFICATIONS</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div>
                  <div className="text-zinc-500 uppercase tracking-widest text-[10px]">CAMERA PACKAGE</div>
                  <div className="text-zinc-200 mt-0.5">{project.technicalSpecs.camera}</div>
                </div>
                <div>
                  <div className="text-zinc-500 uppercase tracking-widest text-[10px]">ASPECT RATIO</div>
                  <div className="text-zinc-200 mt-0.5">{project.technicalSpecs.aspectRatio}</div>
                </div>
                <div>
                  <div className="text-zinc-500 uppercase tracking-widest text-[10px]">COLOR PIPELINE</div>
                  <div className="text-zinc-200 mt-0.5">{project.technicalSpecs.colorSpace}</div>
                </div>
                <div>
                  <div className="text-zinc-500 uppercase tracking-widest text-[10px]">LENS PACKAGE</div>
                  <div className="text-zinc-200 mt-0.5">{project.technicalSpecs.lenses}</div>
                </div>
                <div>
                  <div className="text-zinc-500 uppercase tracking-widest text-[10px]">SOUND FORMAT</div>
                  <div className="text-zinc-200 mt-0.5">{project.technicalSpecs.audio}</div>
                </div>
              </div>
            </div>

            {/* Production Credits */}
            <div className="p-5 rounded bg-white/[0.02] border border-white/10 space-y-4">
              <div className="font-mono text-xs tracking-[0.25em] text-white uppercase border-b border-white/10 pb-3 flex items-center justify-between">
                <span>CREDITS</span>
                <span className="text-[10px] text-zinc-500 font-mono">[EDITABLE]</span>
              </div>

              <div className="space-y-2.5 font-mono text-xs">
                {project.credits.map((credit, idx) => (
                  <div key={idx} className="flex justify-between items-baseline gap-2 border-b border-white/5 pb-1.5">
                    <span className="text-zinc-400 tracking-wider text-[11px]">{credit.role}</span>
                    <span className="text-zinc-200 text-right font-medium">{credit.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery / Cinematic Stills */}
        <div className="space-y-6 pt-8 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div className="font-mono text-xs tracking-[0.3em] text-[#b91c1c] uppercase flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              <span>CINEMATIC STILLS &amp; PRODUCTION FRAMES</span>
            </div>
            <span className="font-mono text-xs text-zinc-500 tracking-widest">
              {project.stills.length} FRAMES ARCHIVED
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {project.stills.map((still, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedStillIndex(idx)}
                data-cursor="view"
                className="group relative aspect-video rounded overflow-hidden bg-zinc-900 border border-white/10 hover:border-[#b91c1c]/60 cursor-pointer transition-all duration-300"
              >
                <img
                  src={still.url}
                  alt={still.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-85 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                  <span className="font-mono text-[10px] text-[#b91c1c] tracking-widest uppercase">
                    STILL 0{idx + 1}
                  </span>
                  <span className="font-body text-xs text-white line-clamp-2">
                    {still.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Pagination to Next Film */}
        <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            type="button"
            onClick={() => onSelectProject(prevProject)}
            data-cursor="button"
            className="flex items-center gap-3 text-left group p-3 rounded hover:bg-white/5 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-zinc-500 group-hover:text-[#b91c1c] transition-colors" />
            <div>
              <div className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">PREVIOUS FILM</div>
              <div className="font-cinematic text-base text-zinc-200 group-hover:text-white uppercase font-bold">
                {prevProject.title}
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onSelectProject(nextProject)}
            data-cursor="button"
            className="flex items-center gap-3 text-right group p-3 rounded hover:bg-white/5 transition-colors"
          >
            <div>
              <div className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">NEXT FILM</div>
              <div className="font-cinematic text-base text-zinc-200 group-hover:text-white uppercase font-bold">
                {nextProject.title}
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-[#b91c1c] transition-colors" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal for Stills */}
      <AnimatePresence>
        {selectedStillIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/98 flex flex-col justify-between p-6"
            onClick={() => setSelectedStillIndex(null)}
          >
            <div className="flex justify-between items-center text-zinc-400 font-mono text-xs">
              <span>{project.title} // FRAME 0{selectedStillIndex + 1}</span>
              <button
                type="button"
                onClick={() => setSelectedStillIndex(null)}
                className="p-2 text-white hover:text-[#b91c1c]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-auto max-w-5xl mx-auto flex items-center justify-center">
              <img
                src={project.stills[selectedStillIndex].url}
                alt={project.stills[selectedStillIndex].caption}
                className="max-h-[80vh] max-w-full object-contain rounded border border-white/20 shadow-2xl"
              />
            </div>

            <div className="text-center font-body text-sm text-zinc-300">
              {project.stills[selectedStillIndex].caption}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
