"use client";

import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";
import { FloatingShapes } from "./FloatingShapes";
import { ParticleField } from "./ParticleField";

export function GlobalCanvas() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    setIsMounted(true);
    
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    // Fade out canvas as user scrolls past first section
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      // Start fading at 50% of viewport, fully faded at 100%
      const fadeStart = viewportHeight * 0.5;
      const fadeEnd = viewportHeight;
      
      if (scrollY <= fadeStart) {
        setScrollOpacity(1);
      } else if (scrollY >= fadeEnd) {
        setScrollOpacity(0);
      } else {
        const progress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        setScrollOpacity(1 - progress);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Don't render until mounted (avoids hydration issues)
  if (!isMounted) {
    return null;
  }

  // Don't render 3D canvas if user prefers reduced motion
  if (prefersReducedMotion) {
    return (
      <div 
        className="fixed top-0 left-0 right-0 pointer-events-none" 
        style={{ zIndex: 1, height: "100vh", opacity: scrollOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      </div>
    );
  }

  // Hide completely when scrolled past hero
  if (scrollOpacity === 0) {
    return null;
  }

  return (
    <div 
      className="fixed top-0 left-0 right-0 pointer-events-none" 
      style={{ zIndex: 1, height: "100vh", opacity: scrollOpacity }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="w-full h-full"
      >
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: "default" }}
          onCreated={() => setIsLoaded(true)}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={0.3} />
            <ParticleField count={280} size={0.015} spread={10} />
            <FloatingShapes />
          </Suspense>
        </Canvas>
      </motion.div>
    </div>
  );
}
