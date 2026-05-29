'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-8">
        {/* Eyebrow Label */}
        <div
          className={`inline-block transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-xs tracking-widest font-mono text-accent uppercase">
            Cybersecurity Student
          </span>
        </div>

        {/* Main Heading */}
        <div
          className={`space-y-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-pretty">
            Building Secure Systems, Not Just Configuring Them
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Final-year student focused on network security, infrastructure governance, and AI security architecture.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex gap-4 flex-wrap transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Link
            href="#projects"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-card transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
