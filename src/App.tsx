/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Games } from './components/Games';
import { Vip } from './components/Vip';
import { AppShowcase } from './components/AppShowcase';
import { Footer } from './components/Footer';

function LoadingScreen({ onComplete }: { key?: React.Key; onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 80);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center gap-8"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full" />
      
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="text-5xl font-black italic tracking-tighter text-white font-display">
          N<span className="text-emerald-500" style={{ textShadow: '0 0 30px rgba(16,185,129,0.6)' }}>SS</span>A
        </div>
        <div className="text-[10px] tracking-[0.3em] text-gray-500 text-center mt-1 uppercase">E-Sports App</div>
      </motion.div>

      {/* Progress bar */}
      <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-emerald-500 to-lime-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <span className="text-xs text-gray-600 font-mono">{Math.min(Math.round(progress), 100)}%</span>
    </motion.div>
  );
}

function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ width: `${scrollProgress}%` }}
    />
  );
}

function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed w-[300px] h-[300px] rounded-full pointer-events-none z-[60] hidden lg:block"
      style={{
        background: 'radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        willChange: 'left, top',
      }}
    />
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-[#050505] font-sans selection:bg-emerald-500/30 selection:text-white noise-overlay">
          <ScrollProgressBar />
          <CursorGlow />
          <Navbar />
          <main>
            <Hero />
            <Features />
            <Games />
            <Vip />
            <AppShowcase />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
