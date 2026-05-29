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
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Research Direction</h2>
          <p className="text-muted-foreground text-lg">
            My academic work focuses on the intersection of systems thinking and emerging security challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {researchAreas.map((area, index) => (
            <div
              key={area.title}
              className="p-6 rounded-lg border border-border bg-background/50 hover:border-accent/50 transition-all duration-500 opacity-100 translate-y-0"
            >
              <h3 className="font-bold text-foreground mb-2">{area.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
