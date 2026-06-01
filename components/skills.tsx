'use client';

import { useEffect, useState, useRef } from 'react';

const skillCategories = [
  {
    title: 'Network Security Engineering',
    description:
      'Design and implementation of secure network architectures with emphasis on segmentation, routing, and Layer 3 switching.',
    tags: ['Cisco IOS', 'VLANs', 'Layer 3', 'ACLs', 'Routing', 'Packet Tracer'],
  },
  {
    title: 'Firewall and Infrastructure Security',
    description:
      'Enterprise firewall configuration, DMZ design, hardening, access control, and security monitoring.',
    tags: ['ASA', 'DMZ Design', 'Hardening', 'Access Control', 'Syslog'],
  },
  {
    title: 'Security Operations Foundations',
    description:
      'Practical security incident handling, log analysis, and infrastructure troubleshooting.',
    tags: ['Log Analysis', 'Troubleshooting', 'Monitoring', 'Incident Response'],
  },
  {
    title: 'AI Security and Governance',
    description:
      'Adversarial robustness, LLM safety, deterministic policy enforcement, and secure gateways for AI systems.',
    tags: ['Adversarial ML', 'LLM Governance', 'Policy Enforcement', 'Secure Gateways'],
  },
  {
    title: 'Systems Architecture and Design',
    description:
      'End-to-end security system design, threat modeling, and architecture documentation.',
    tags: ['Threat Modeling', 'Architecture Design', 'Risk Assessment', 'Documentation'],
  },
  {
    title: 'Development and Implementation',
    description:
      'Security implementation through code, & automation.',
    tags: ['Python', 'Automation'],
  },
];

export default function Skills() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleItems(new Array(skillCategories.length).fill(true));
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
    <section id="skills" className="py-20 px-6 border-t border-border" ref={ref}>
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="rounded-[2rem] border border-border bg-background/60 dark:bg-slate-950/70 p-8 md:p-12 backdrop-blur-xl shadow-2xl shadow-black/10">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.35em] text-accent font-semibold">Skills</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground">Hands-on security capabilities</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              End-to-end technical skills backed by practical experience in networking, firewalls, AI governance, and security operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((skill, index) => (
              <div
                key={skill.title}
                className={`p-6 rounded-[1.75rem] border border-white/10 dark:border-white/10 bg-white/10 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg shadow-slate-900/10 transform transition-all duration-500 ${
                  visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">{skill.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-white/10 bg-background/80 text-foreground dark:bg-slate-950/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
