import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AtmosphericAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const noiseSourceRef = useRef<AudioBufferSourceNode | null>(null);

  const startAtmosphericDrone = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, ctx.currentTime);
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      // Deep cinematic drone chords (55Hz - A1, 82.4Hz - E2, 110Hz - A2, 164.8Hz - E3)
      const frequencies = [55, 82.41, 110, 164.81];
      const gains = [0.15, 0.08, 0.05, 0.03];

      oscillatorsRef.current = frequencies.map((freq, i) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        
        osc.type = i === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        
        // Subtle detune for organic analog tape drift
        osc.detune.setValueAtTime((Math.random() - 0.5) * 6, ctx.currentTime);

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(240, ctx.currentTime);

        oscGain.gain.setValueAtTime(gains[i], ctx.currentTime);

        osc.connect(filter);
        filter.connect(oscGain);
        oscGain.connect(masterGain);

        osc.start();
        return osc;
      });

      // Subtle vinyl/tape grain hiss
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * 0.008; // Very soft
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(1200, ctx.currentTime);
      noiseFilter.Q.setValueAtTime(0.5, ctx.currentTime);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.015, ctx.currentTime);

      whiteNoise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(masterGain);
      whiteNoise.start();
      noiseSourceRef.current = whiteNoise;

      // Gentle fade-in over 2.5 seconds
      masterGain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 2.5);
      setIsPlaying(true);
    } catch (err) {
      console.warn("Web Audio autoplay prevented or not supported", err);
    }
  };

  const stopAtmosphericDrone = () => {
    if (masterGainRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      masterGainRef.current.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
      setTimeout(() => {
        try {
          oscillatorsRef.current.forEach(osc => osc.stop());
          if (noiseSourceRef.current) noiseSourceRef.current.stop();
          ctx.close();
        } catch {
          // ignore
        }
        audioCtxRef.current = null;
        setIsPlaying(false);
      }, 1200);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAtmosphericDrone();
    } else {
      startAtmosphericDrone();
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <button
      id="btn-atmospheric-audio-toggle"
      type="button"
      onClick={toggleSound}
      data-cursor="button"
      className="group flex items-center gap-2 px-2.5 py-1.5 rounded border border-white/10 bg-black/40 hover:bg-white/5 hover:border-white/25 transition-all text-xs font-mono text-[#a3a3a3] hover:text-white"
      title={isPlaying ? "Mute Atmospheric Soundscape" : "Enable Cinematic Ambient Drone"}
      aria-label="Toggle Cinematic Atmosphere Sound"
    >
      {isPlaying ? (
        <>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b91c1c] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b91c1c]"></span>
          </span>
          <Volume2 className="w-3.5 h-3.5 text-[#b91c1c]" />
          <span className="hidden sm:inline tracking-wider text-[11px]">ATMOSPHERE: ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300" />
          <span className="hidden sm:inline tracking-wider text-[11px] text-zinc-400">ATMOSPHERE: OFF</span>
        </>
      )}
    </button>
  );
}
