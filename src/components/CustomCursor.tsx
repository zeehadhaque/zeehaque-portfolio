import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'view' | 'play'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch-only devices to avoid intrusive cursor
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor');
        if (type === 'view') {
          setCursorVariant('view');
          setCursorText('VIEW');
        } else if (type === 'play') {
          setCursorVariant('play');
          setCursorText('PLAY');
        } else if (type === 'link' || type === 'button') {
          setCursorVariant('hover');
          setCursorText('');
        } else {
          setCursorVariant('default');
          setCursorText('');
        }
      } else if (target.closest('button, a, input, textarea, select')) {
        setCursorVariant('hover');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full border border-[#e5e5e5]/40 text-center uppercase tracking-widest pointer-events-none backdrop-blur-[1px]"
        animate={{
          x: position.x - (cursorVariant === 'view' || cursorVariant === 'play' ? 36 : cursorVariant === 'hover' ? 24 : 10),
          y: position.y - (cursorVariant === 'view' || cursorVariant === 'play' ? 36 : cursorVariant === 'hover' ? 24 : 10),
          width: cursorVariant === 'view' || cursorVariant === 'play' ? 72 : cursorVariant === 'hover' ? 48 : 20,
          height: cursorVariant === 'view' || cursorVariant === 'play' ? 72 : cursorVariant === 'hover' ? 48 : 20,
          backgroundColor: cursorVariant === 'view' || cursorVariant === 'play' 
            ? 'rgba(185, 28, 28, 0.85)' 
            : cursorVariant === 'hover' 
              ? 'rgba(255, 255, 255, 0.12)' 
              : 'transparent',
          borderColor: cursorVariant === 'view' || cursorVariant === 'play' 
            ? 'rgba(255, 255, 255, 0.4)' 
            : cursorVariant === 'hover' 
              ? 'rgba(255, 255, 255, 0.6)' 
              : 'rgba(255, 255, 255, 0.3)',
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.5,
        }}
      >
        {cursorText ? (
          <span className="font-mono text-[10px] font-semibold text-white tracking-widest drop-shadow">
            {cursorText}
          </span>
        ) : (
          <div className={`rounded-full ${cursorVariant === 'hover' ? 'w-1 h-1 bg-white' : 'w-1.5 h-1.5 bg-[#b91c1c]'}`} />
        )}
      </motion.div>
    </div>
  );
}
