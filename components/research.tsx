'use client';

import { useEffect, useState, useRef } from 'react';

const researchAreas = [
  {
    title: 'Adversarial Machine Learning',
    description: 'How do adversarial examples expose vulnerabilities in ML systems? How can we build models that remain robust under attack?',
  },
  {
    title: 'LLM Workflow Governance',
    description: 'What does it mean to govern LLM outputs at scale? Can policy enforcement be both deterministic and flexible?',
  },
  {
    title: 'Deterministic Policy Enforcement',
    description: 'How do we build security systems where every decision is auditable? What role do formal methods play in production security?',
  },
  {
    title: 'Privacy-Aware Gateways',
    description: 'How can infrastructure mediate between users and AI systems while preserving privacy and maintaining transparency?',
  },
  {
    title: 'Infrastructure Governance at Scale',
    description: 'How do we apply security principles to cloud infrastructure? What does zero-trust look like in practice?',
  },
];

export default function Research() {
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

  return (
    <section id="research" className="py-20 px-6 border-t border-border" ref={ref}>
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="rounded-[2rem] border border-border bg-background/70 dark:bg-slate-950/70 p-8 md:p-12 backdrop-blur-xl shadow-2xl shadow-black/10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-accent font-semibold">Research</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Research direction</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                My academic work focuses on the intersection of systems thinking and emerging security challenges.
              </p>
            </div>
            <div className="rounded-[1.75rem] overflow-hidden border border-white/10 bg-white/10 dark:bg-slate-900/80 shadow-xl shadow-slate-900/10">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
                alt="Research concept illustration"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {researchAreas.map((area, index) => (
              <div
                key={area.title}
                className="rounded-[1.75rem] border border-white/10 dark:border-white/10 bg-white/10 dark:bg-slate-900/80 p-6 shadow-xl shadow-slate-900/10 transition-all duration-500"
              >
                <h3 className="font-semibold text-foreground mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
