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
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About</h2>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I&apos;m entering my final year at ZUCT with a focus on practical security implementation rather than theory alone. My work centers on designing secure network architectures, configuring enterprise firewalls, and implementing security governance workflows that scale.
          </p>

          <p>
            My foundation is in Cisco networking—VLANs, Layer 3 switching, ASA firewalls, DMZ segmentation, and access control lists. I approach each project as a system: understanding threat models, designing layered defenses, and documenting decisions for maintainability. Security isn&apos;t just policy; it&apos;s architecture.
          </p>

          <p>
            I&apos;m increasingly focused on AI security—adversarial machine learning, LLM governance, deterministic policy enforcement, and secure mediation layers. As AI systems become infrastructure, the questions change: How do we enforce safety deterministically? How do we audit AI decisions? How do we build governance that scales?
          </p>
        </div>

        {/* Identity Tags */}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-card border border-border text-foreground rounded-lg text-sm font-mono hover:border-accent transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
