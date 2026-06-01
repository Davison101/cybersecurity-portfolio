'use client';

import { useEffect, useState, useRef } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const tags = [
    'Implementation-first',
    'Systems thinker',
    'Build, test, refine',
    'Documentation-focused',
    'Architecture-aware',
    'Research-oriented',
  ];

  return (
    <section id="about" className="py-20 px-6 border-t border-border" ref={ref}>
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="rounded-[2rem] border border-border bg-background/70 dark:bg-slate-950/80 p-8 md:p-12 backdrop-blur-xl shadow-2xl shadow-black/10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-6">
              <div className="space-y-4 max-w-2xl">
                <p className="text-sm uppercase tracking-[0.35em] text-accent font-semibold">About</p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Human-centered security leadership with a systems mindset.</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I&apos;m entering my final year at ZUCT with a focus on practical security implementation rather than theory alone. My work centers on designing secure network architectures, hardening infrastructure, and building governance workflows that scale.
                </p>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My foundation is in Cisco networking—VLANs, Layer 3 switching, ASA firewalls, DMZ segmentation, and access control lists. I approach each project as a system: understanding threat models, designing layered defenses, and documenting decisions for maintainability.
                </p>
                <p>
                  I&apos;m increasingly focused on AI security, adversarial machine learning, LLM governance, and deterministic policy enforcement. As AI becomes infrastructure, the questions shift: How do we enforce safety deterministically? How do we audit decisions? How do we build governance that scales?
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/10 text-sm font-medium text-foreground backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-1 shadow-xl shadow-slate-900/10">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
                alt="AI-designed cybersecurity concept"
                className="h-full w-full object-cover rounded-[1.75rem]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute left-6 bottom-6 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white backdrop-blur-xl">
                Visual concept inspired by AI-driven network security design.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
