import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Sparkles, Activity, Layers, ArrowUpRight, Share2, Database, Eye } from 'lucide-react';
import { UNIVERSE_NODES, UNIVERSE_THEMES, FILM_PROJECTS } from '../data/portfolioData';
import { UniverseNode, FilmProject } from '../types';

interface CinematicUniverseProps {
  onSelectProject: (project: FilmProject) => void;
}

export default function CinematicUniverse({ onSelectProject }: CinematicUniverseProps) {
  const [selectedTheme, setSelectedTheme] = useState<string>('ALL');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'map' | 'dossier'>('map');

  const activeHoveredNode = UNIVERSE_NODES.find((n) => n.id === hoveredNodeId) || null;

  // Filter nodes matching theme
  const isNodeActive = (node: UniverseNode) => {
    if (selectedTheme === 'ALL') return true;
    return node.themes.includes(selectedTheme);
  };

  // Find film project from node
  const handleNodeClick = (node: UniverseNode) => {
    const project = FILM_PROJECTS.find((p) => p.id === node.projectId);
    if (project) {
      onSelectProject(project);
    }
  };

  return (
    <section
      id="universe"
      className="relative w-full py-28 sm:py-36 bg-[#060708] border-t border-white/10 overflow-hidden"
    >
      {/* Subtle background cosmic / atmosphere grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] text-[#b91c1c] uppercase">
              <Compass className="w-3.5 h-3.5" />
              <span>ARCHIVAL CONSTELLATION &amp; INVESTIGATION BOARD</span>
            </div>
            <h2 className="font-cinematic text-3xl sm:text-5xl lg:text-6xl font-black tracking-wider text-white uppercase">
              CINEMATIC UNIVERSE
            </h2>
            <p className="font-body text-zinc-400 text-sm sm:text-base max-w-2xl font-light">
              Stories, worlds and characters connected by a shared cinematic language — an internal constellation of psychological tension, recurring shadows, and human vulnerability.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <button
              type="button"
              onClick={() => setViewMode('map')}
              data-cursor="button"
              className={`px-3 py-1.5 rounded uppercase tracking-wider transition-all border ${
                viewMode === 'map'
                  ? 'bg-white/10 text-white border-white/30'
                  : 'text-zinc-500 border-transparent hover:text-zinc-300'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5" />
                <span>NODE MAP</span>
              </div>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('dossier')}
              data-cursor="button"
              className={`px-3 py-1.5 rounded uppercase tracking-wider transition-all border ${
                viewMode === 'dossier'
                  ? 'bg-white/10 text-white border-white/30'
                  : 'text-zinc-500 border-transparent hover:text-zinc-300'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5" />
                <span>DOSSIER LIST</span>
              </div>
            </button>
          </div>
        </div>

        {/* Thematic Tags Filter Bar */}
        <div className="mb-10 flex flex-wrap items-center gap-2 pb-4 border-b border-white/5">
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mr-2">
            THEMES:
          </span>
          {UNIVERSE_THEMES.map((theme) => {
            const isSelected = selectedTheme === theme;
            return (
              <button
                key={theme}
                type="button"
                onClick={() => setSelectedTheme(theme)}
                data-cursor="button"
                className={`px-3 py-1 rounded font-mono text-[10px] sm:text-[11px] tracking-widest uppercase transition-all duration-300 border ${
                  isSelected
                    ? 'bg-[#b91c1c] text-white border-[#b91c1c] shadow-[0_0_12px_rgba(185,28,28,0.4)]'
                    : 'bg-white/[0.02] text-zinc-400 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {theme}
              </button>
            );
          })}
        </div>

        {/* View Mode 1: Interactive Node Constellation Map */}
        {viewMode === 'map' && (
          <div
            id="universe-interactive-board"
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] min-h-[500px] max-h-[720px] rounded-sm bg-[#08090b] border border-white/15 overflow-hidden shadow-2xl flex flex-col justify-between"
          >
            {/* Background Radar / Board Grid */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg className="w-full h-full">
                <defs>
                  <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                {/* Radial radar circles */}
                <circle cx="50%" cy="50%" r="20%" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeDasharray="4 6" />
                <circle cx="50%" cy="50%" r="38%" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="4 6" />
              </svg>
            </div>

            {/* Top Board Meta */}
            <div className="relative z-20 p-4 sm:p-6 flex items-center justify-between font-mono text-[10px] tracking-widest text-zinc-500 uppercase border-b border-white/5 bg-[#08090b]/80 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#b91c1c] animate-pulse" />
                <span>INTERACTIVE THEMATIC SYNAPSE // LIVE</span>
              </div>
              <div>HOVER NODE TO EXAMINE / CLICK TO OPEN DOSSIER</div>
            </div>

            {/* SVG Connecting Lines between Nodes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
              {UNIVERSE_NODES.map((sourceNode) => {
                return sourceNode.connectedTo.map((targetProjectId) => {
                  const targetNode = UNIVERSE_NODES.find((n) => n.projectId === targetProjectId);
                  if (!targetNode) return null;

                  const isHoveredConnection =
                    hoveredNodeId === sourceNode.id || hoveredNodeId === targetNode.id;
                  const isThematicallyActive =
                    isNodeActive(sourceNode) && isNodeActive(targetNode);

                  return (
                    <line
                      key={`${sourceNode.id}-${targetNode.id}`}
                      x1={`${sourceNode.x}%`}
                      y1={`${sourceNode.y}%`}
                      x2={`${targetNode.x}%`}
                      y2={`${targetNode.y}%`}
                      stroke={
                        isHoveredConnection
                          ? '#b91c1c'
                          : isThematicallyActive
                            ? 'rgba(255, 255, 255, 0.22)'
                            : 'rgba(255, 255, 255, 0.04)'
                      }
                      strokeWidth={isHoveredConnection ? '2' : '1'}
                      strokeDasharray={isHoveredConnection ? 'none' : '4 4'}
                      className="transition-all duration-500"
                    />
                  );
                });
              })}
            </svg>

            {/* Render Interactive Nodes */}
            <div className="relative w-full h-full z-20">
              {UNIVERSE_NODES.map((node) => {
                const isActive = isNodeActive(node);
                const isHovered = hoveredNodeId === node.id;

                return (
                  <div
                    key={node.id}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    onClick={() => handleNodeClick(node)}
                  >
                    {/* Node Visual Anchor */}
                    <div
                      className={`relative flex items-center justify-center rounded-full transition-all duration-500 ${
                        isHovered
                          ? 'w-10 h-10 bg-[#b91c1c] text-white shadow-[0_0_25px_rgba(185,28,28,0.9)]'
                          : isActive
                            ? 'w-7 h-7 bg-white/10 hover:bg-[#b91c1c]/80 border border-white/40 text-white'
                            : 'w-5 h-5 bg-white/5 border border-white/10 text-zinc-600 opacity-40'
                      }`}
                    >
                      <span className="font-mono text-[9px] font-bold">
                        {node.title.charAt(0)}
                      </span>

                      {/* Concentric Pulse Ring */}
                      {isHovered && (
                        <div className="absolute inset-0 rounded-full border border-white/40 animate-ping" />
                      )}
                    </div>

                    {/* Node Persistent Label */}
                    <div
                      className={`mt-2 -translate-x-1/2 text-center pointer-events-none transition-all duration-300 ${
                        isHovered
                          ? 'opacity-100 scale-105'
                          : isActive
                            ? 'opacity-85'
                            : 'opacity-30'
                      }`}
                      style={{ width: '130px', transform: 'translateX(-50%)' }}
                    >
                      {node.bengaliTitle && (
                        <div className="font-light text-[10px] text-zinc-400">
                          {node.bengaliTitle}
                        </div>
                      )}
                      <div className="font-cinematic text-xs font-bold text-white tracking-wider uppercase truncate">
                        {node.title}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active Node Detail Card Overlay (Bottom Left of Board) */}
            <div className="relative z-30 p-4 sm:p-6 border-t border-white/10 bg-[#08090b]/90 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {activeHoveredNode ? (
                <div className="flex items-center gap-4 animate-in fade-in duration-200">
                  <img
                    src={activeHoveredNode.posterThumb}
                    alt={activeHoveredNode.title}
                    className="w-12 h-16 object-cover rounded border border-white/20 shadow-md"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-cinematic text-base font-bold text-white uppercase">
                        {activeHoveredNode.title}
                      </span>
                      <span className="font-mono text-[10px] text-[#b91c1c] tracking-widest">
                        {activeHoveredNode.runtime}
                      </span>
                    </div>
                    <div className="font-mono text-xs text-zinc-400 tracking-wider">
                      {activeHoveredNode.genre}
                    </div>
                    <p className="font-body text-xs text-zinc-300 mt-1 max-w-md italic">
                      &ldquo;{activeHoveredNode.shortHook}&rdquo;
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3 text-zinc-400 font-mono text-xs">
                  <Activity className="w-4 h-4 text-[#b91c1c]" />
                  <span>SECTOR OBSERVATION: Awaiting node examination. Hover a node or select a theme above.</span>
                </div>
              )}

              {activeHoveredNode && (
                <button
                  type="button"
                  onClick={() => handleNodeClick(activeHoveredNode)}
                  data-cursor="button"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#b91c1c] hover:bg-red-700 text-white font-mono text-xs tracking-widest uppercase transition-all shadow-lg self-start sm:self-auto"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>OPEN DOSSIER</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* View Mode 2: Dossier List (Accessible / Editorial View) */}
        {viewMode === 'dossier' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {UNIVERSE_NODES.map((node, idx) => {
              const isActive = isNodeActive(node);
              return (
                <div
                  key={node.id}
                  onClick={() => handleNodeClick(node)}
                  data-cursor="view"
                  className={`p-6 rounded-sm bg-[#090b0d] border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'border-white/15 hover:border-[#b91c1c]'
                      : 'border-white/5 opacity-40'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3">
                    <span>RECORD 0{idx + 1}</span>
                    <span className="text-[#b91c1c]">{node.runtime}</span>
                  </div>

                  {node.bengaliTitle && (
                    <div className="font-light text-zinc-400 text-xs mb-1">
                      {node.bengaliTitle}
                    </div>
                  )}

                  <h3 className="font-cinematic text-xl font-bold text-white uppercase tracking-wider mb-1">
                    {node.title}
                  </h3>

                  <div className="font-mono text-xs text-zinc-400 tracking-wider mb-3">
                    {node.genre}
                  </div>

                  <p className="font-body text-xs text-zinc-300 leading-relaxed font-light mb-4">
                    {node.shortHook}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {node.themes.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-white/5 text-[9px] font-mono tracking-widest text-zinc-400 uppercase"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
