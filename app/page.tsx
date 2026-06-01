'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import { SplineSceneBasic } from '@/components/ui/spline-scene-demo';
import About from '@/components/about';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Research from '@/components/research';
import LabNotes from '@/components/lab-notes';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <div className="px-4 py-16 md:px-8 md:py-20">
        <SplineSceneBasic />
      </div>
      <About />
      <Skills />
      <Projects />
      <Research />
      <LabNotes />
      <Contact />
      <Footer />
    </div>
  );
}
