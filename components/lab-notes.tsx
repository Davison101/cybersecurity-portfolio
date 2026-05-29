'use client';

import { useEffect, useState, useRef } from 'react';

const insights = [
  {
    title: 'Why Segmentation Matters',
    excerpt: 'Network segmentation is not just a best practice—it is the foundation of defense in depth. A single compromised endpoint in a flat network can laterally move to critical systems in seconds. Proper VLAN design, combined with stateful firewall rules, creates multiple breakpoints that force attackers to work harder.',
  },
  {
    title: 'Why Rule Order Matters in ACLs',
    excerpt: 'ACL rules are evaluated top-down, and the first match wins. A permissive rule early in the list can accidentally allow traffic meant to be denied by a later rule. Always order ACLs explicitly: deny bad, then allow good. Document why each rule exists.',
  },
  {
    title: 'Why Governance Must Be Deterministic in AI Systems',
    excerpt: 'As AI systems mediate critical decisions, non-deterministic behavior becomes a liability. If an LLM gateway approves a request one moment and denies it the next based on internal state, the system is not trustworthy. Deterministic policy must be the substrate; AI enhances, not replaces, it.',
  },
];

export default function LabNotes() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleItems(new Array(insights.length).fill(true));
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
    <section id="lab-notes" className="py-20 px-6 border-t border-border" ref={ref}>
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Lab Notes</h2>

        <div className="space-y-6">
          {insights.map((insight, index) => (
            <div
              key={insight.title}
              className="p-6 rounded-lg border border-border bg-card/50 hover:border-accent/50 transition-all duration-500 opacity-100 translate-y-0"
            >
              <h3 className="font-bold text-foreground mb-3">{insight.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{insight.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
