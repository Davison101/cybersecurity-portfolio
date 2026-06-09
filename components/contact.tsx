'use client';

import { useEffect, useState, useRef } from 'react';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';

const contactLinks = [
  {
    label: 'Email',
    value: 'dmapiza14@gmail.com',
    icon: Mail,
    href: 'mailto:dmapiza14@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'Davison Mapiza',
    icon: Linkedin,
    href: 'https://linkedin.com/in/davison-mapiza',
  },
  {
    label: 'GitHub',
    value: 'Davison101',
    icon: Github,
    href: 'https://github.com/Davison101',
  },
  {
    label: 'WhatsApp & Phone',
    value: '+260 976 235 760',
    icon: MessageCircle,
    href: 'https://wa.me/263976235760',
  },
];

export default function Contact() {
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
    <section id="contact" className="py-20 px-6 border-t border-border" ref={ref}>
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="rounded-[2rem] border border-border bg-background/70 dark:bg-slate-950/70 p-8 md:p-12 backdrop-blur-xl shadow-2xl shadow-black/10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-accent font-semibold">Get in touch</p>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground">Open to internships, collaboration, and technical work.</h2>
              <p className={`mt-4 text-lg text-muted-foreground transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                Let&apos;s solve real security challenges together, from network design to AI governance.
              </p>
            </div>
            <div className="rounded-[1.75rem] overflow-hidden border border-white/10 dark:border-white/10 bg-white/10 dark:bg-slate-900/80 shadow-xl shadow-slate-900/10">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"
                alt="Contact concept illustration"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`rounded-[1.75rem] border border-white/10 dark:border-white/10 bg-white/10 dark:bg-slate-900/80 p-6 transition-all duration-300 group ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground font-mono uppercase tracking-wide">
                        {link.label}
                      </p>
                      <p className="text-foreground font-medium">{link.value}</p>
                    </div>
                    <Icon
                      size={20}
                      className="text-accent group-hover:scale-110 transition-transform"
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
