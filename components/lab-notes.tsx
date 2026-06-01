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
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="rounded-[2rem] border border-border bg-background/70 dark:bg-slate-950/70 p-8 md:p-12 backdrop-blur-xl shadow-2xl shadow-black/10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-accent font-semibold">Lab Notes</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Technical insights</h2>
          </div>

          <div className="space-y-6">
            {insights.map((insight, index) => (
              <div
                key={insight.title}
                className="rounded-[1.75rem] border border-white/10 dark:border-white/10 bg-white/10 dark:bg-slate-900/80 p-6 shadow-xl shadow-slate-900/10 transition-all duration-500"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-foreground text-lg">{insight.title}</h3>
                  <span className="text-xs uppercase tracking-[0.35em] text-accent font-semibold">Note</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{insight.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
