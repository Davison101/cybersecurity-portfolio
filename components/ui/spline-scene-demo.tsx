'use client'

import { motion } from "framer-motion"
import { SplineScene } from "@/components/ui/spline"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
 
export function SplineSceneBasic() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <Card className="w-full min-h-[620px] bg-card/80 dark:bg-card/95 relative overflow-hidden border border-border shadow-2xl shadow-black/10">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="currentColor"
      />
      
      <div className="flex h-full flex-col md:flex-row">
        {/* Left content */}
        <motion.div 
          className="flex-1 p-8 md:p-12 lg:p-16 relative z-10 flex flex-col justify-center space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <span className="text-xs tracking-widest font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 uppercase font-semibold">
              Cybersecurity Architect
            </span>
          </motion.div>

          <motion.div className="space-y-4" variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-slate-950 dark:text-white">
              <span className="block text-slate-900 dark:text-slate-100">
                Architect of
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300">
                Secure Systems
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-light">
              Design resilient infrastructure, enforce security policies, and develop AI-powered defense systems for the next generation of digital risk.
            </p>
          </motion.div>

          <motion.div className="flex flex-col gap-4 sm:flex-row sm:items-center pt-4" variants={itemVariants}>
            <Link
              href="#projects"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:from-blue-600 hover:to-cyan-600"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background/95 px-8 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:border-accent hover:bg-accent/5 dark:bg-slate-950/80"
            >
              Let's Connect
            </Link>
          </motion.div>

        </motion.div>

        {/* Right content */}
        <motion.div 
          className="flex-1 relative hidden md:flex items-center justify-center p-8 lg:p-12"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl opacity-50" />
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full relative z-10 rounded-[2rem] overflow-hidden"
          />
        </motion.div>
      </div>
    </Card>
  )
}
