import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Showreel from './components/Showreel';
import SelectedWorks from './components/SelectedWorks';
import CinematicUniverse from './components/CinematicUniverse';
import AboutDirector from './components/AboutDirector';
import CraftServices from './components/CraftServices';
import FilmmakingProcess from './components/FilmmakingProcess';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ProjectDetailModal from './components/ProjectDetailModal';
import ProjectInquiryModal from './components/ProjectInquiryModal';
import { FilmProject } from './types';
import { FILM_PROJECTS } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<FilmProject | null>(null);
  const [isReelModalOpen, setIsReelModalOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [inquiryCraftFocus, setInquiryCraftFocus] = useState<string | undefined>(undefined);

  // Handle escape key to close open modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedProject) setSelectedProject(null);
        if (isReelModalOpen) setIsReelModalOpen(false);
        if (isInquiryModalOpen) setIsInquiryModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, isReelModalOpen, isInquiryModalOpen]);

  const handleOpenInquiry = (craftTitle?: string) => {
    setInquiryCraftFocus(craftTitle);
    setIsInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#060708] text-[#e5e5e5] font-body relative selection:bg-[#b91c1c]/40 selection:text-white">
      {/* 35mm Subtle Film Grain Global Layer */}
      <div className="film-grain" aria-hidden="true" />

      {/* Custom Cinematic Interactive Cursor */}
      <CustomCursor />

      {/* Primary Cinematic Navigation */}
      <Navigation
        onOpenReel={() => setIsReelModalOpen(true)}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Main Sections */}
      <main id="main-content">
        {/* 01 — Cinematic Hero Opening Viewport */}
        <Hero onOpenReel={() => setIsReelModalOpen(true)} />

        {/* 02 — Showreel Player Section */}
        <Showreel
          isModalOpen={isReelModalOpen}
          setIsModalOpen={setIsReelModalOpen}
        />

        {/* 03 — Selected Works Film Archive Gallery */}
        <SelectedWorks onSelectProject={(project) => setSelectedProject(project)} />

        {/* 04 — Cinematic Universe Database / Investigation Board */}
        <CinematicUniverse onSelectProject={(project) => setSelectedProject(project)} />

        {/* 05 — The Filmmaker Profile & Philosophy */}
        <AboutDirector />

        {/* 06 — Services & Directorial Craft Pillars */}
        <CraftServices onOpenInquiry={handleOpenInquiry} />

        {/* 07 — 7-Phase Filmmaking Production Cycle */}
        <FilmmakingProcess />

        {/* 08 — End-Credits Style Contact Section */}
        <ContactSection
          onOpenInquiry={() => handleOpenInquiry()}
          onOpenReel={() => setIsReelModalOpen(true)}
        />
      </main>

      {/* 09 — Minimal Dark Colophon & Footer */}
      <Footer />

      {/* Project Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(project) => setSelectedProject(project)}
        allProjects={FILM_PROJECTS}
      />

      {/* Project Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        initialCraft={inquiryCraftFocus}
      />
    </div>
  );
}
