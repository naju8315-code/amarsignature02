/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isSupported, setIsSupported] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // High performance, direct hardware accelerated motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Buttery-smooth spring physics for the trailing outer ring
  const springConfig = { damping: 28, stiffness: 240, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only premium fine-pointers (mice, trackpads) should show the custom cursor
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsSupported(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsSupported(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  const [magneticTarget, setMagneticTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!isSupported) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (magneticTarget) {
        try {
          const rect = magneticTarget.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          
          // Magnetic pull: drag the cursor coordinates slightly towards center
          const pullFactor = 0.35; // 35% magnetic gravity
          const targetX = centerX + (e.clientX - centerX) * pullFactor;
          const targetY = centerY + (e.clientY - centerY) * pullFactor;
          
          mouseX.set(targetX);
          mouseY.set(targetY);
        } catch (err) {
          mouseX.set(e.clientX);
          mouseY.set(e.clientY);
        }
      } else {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.cursor-pointer') ||
        target.closest('[role="button"]') ||
        window.getComputedStyle(target).cursor === 'pointer'
          ? (target.closest('button') || target.closest('a') || target.closest('.cursor-pointer') || target.closest('[role="button"]') || target) as HTMLElement
          : null;

      if (interactiveEl) {
        setIsHovered(true);
        setMagneticTarget(interactiveEl);
      } else {
        setIsHovered(false);
        setMagneticTarget(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, [isSupported, isVisible, magneticTarget, mouseX, mouseY]);

  // If the device does not employ a fine cursor (touchscreens / mobile), do not render
  if (!isSupported) {
    return null;
  }

  return (
    <div id="custom-cursor-layer" className="fixed inset-0 pointer-events-none z-[999999] overflow-hidden select-none">
      {/* Hide original browser pointer standard style, custom styled classes are injected via standard CSS */}
      <style>{`
        @media (pointer: fine) {
          body, a, button, input, select, textarea, [role="button"], .cursor-pointer {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Trailing Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          backgroundColor: isHovered ? 'rgba(232, 201, 106, 0.12)' : 'rgba(232, 201, 106, 0.0)',
          border: isHovered ? '2px solid rgba(232, 201, 106, 0.9)' : '1px solid rgba(232, 201, 106, 0.45)',
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          width: { type: 'spring', damping: 25, stiffness: 300 },
          height: { type: 'spring', damping: 25, stiffness: 300 },
          backgroundColor: { duration: 0.2 },
          border: { duration: 0.15 },
          opacity: { duration: 0.25 },
        }}
      />

      {/* Instant Inner Focal Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-luxury-gold rounded-full pointer-events-none mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { type: 'spring', damping: 15, stiffness: 350 },
          opacity: { duration: 0.15 },
        }}
      />
    </div>
  );
}
