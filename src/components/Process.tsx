'use client';

import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useRef, MouseEvent } from 'react';
import { CheckCircle2, ClipboardList, Code2, Flag, Rocket, Search } from 'lucide-react';
import { clsx } from 'clsx';

const steps = [
  {
    id: '01',
    title: 'Audit',
    desc: 'Deep dive into your current codebase and architecture to identify technical debt and risk areas.',
    icon: <Search size={24} />,
  },
  {
    id: '02',
    title: 'Strategy',
    desc: 'Designing a custom QA roadmap tailored to your stack, timeline, and business goals.',
    icon: <ClipboardList size={24} />,
  },
  {
    id: '03',
    title: 'Test Design',
    desc: 'Creating comprehensive test cases, automation scripts, and data sets for full coverage.',
    icon: <Code2 size={24} />,
  },
  {
    id: '04',
    title: 'Execution',
    desc: 'Running rigorous manual and automated test suites across all environments and devices.',
    icon: <CheckCircle2 size={24} />,
  },
  {
    id: '05',
    title: 'Validation',
    desc: 'Verifying fixes, ensuring zero regression, and validating performance under load.',
    icon: <Flag size={24} />,
  },
  {
    id: '06',
    title: 'Release',
    desc: 'Green-lighting your product for a confident, bug-free launch to your users.',
    icon: <Rocket size={24} />,
  },
];

function ProcessCard({ step, index }: { step: any, index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isEven = index % 2 === 0;

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className={clsx(
      "flex items-center justify-between w-full mb-8 lg:mb-24 relative",
      isEven ? "flex-row" : "flex-row-reverse"
    )}>
      {/* Spacer for the other side */}
      <div className="hidden lg:block w-5/12" />

      {/* Center Point */}
      <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black border border-zinc-700 z-20 flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.3)]">
        <div className="w-3 h-3 bg-red-600 rounded-full" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0.3, scale: 0.95, filter: 'grayscale(100%)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'grayscale(0%)' }}
        viewport={{ once: false, amount: 0.5, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onMouseMove={handleMouseMove}
        className={clsx(
          "group relative w-[85%] lg:w-5/12 bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 ml-12 lg:ml-0 transition-all duration-500",
          // Active State Styles (applied via whileInView prop, but we can also use CSS classes if needed for more complex things)
          "hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(220,38,38,0.1)]"
        )}
      >
        {/* Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(153, 27, 27, 0.15),
                transparent 80%
              )
            `,
          }}
        />

        <div className="flex items-start justify-between mb-6">
          <div className="p-3 rounded-xl bg-black/50 border border-white/5 text-zinc-400 group-hover:text-white transition-colors group-hover:border-red-900/30 group-hover:text-red-500 shadow-inner">
            {step.icon}
          </div>
          <span className="text-4xl font-bold text-white/5 group-hover:text-red-900/20 transition-colors">
            {step.id}
          </span>
        </div>

        <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-red-50 transition-colors">{step.title}</h4>
        <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
          {step.desc}
        </p>
      </motion.div>
    </div>
  );
}

export const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-32 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-red-700 font-semibold tracking-wide uppercase text-sm mb-3">Our Process</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Path to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Production</span>
          </h3>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A rigorous, battle-tested framework ensuring your software survives the real world.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Central Line Track */}
          <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-zinc-800/50 h-full rounded-full overflow-hidden">
            {/* Filling Beam */}
            <motion.div 
              style={{ height }}
              className="w-full bg-gradient-to-b from-red-500 via-red-600 to-transparent origin-top relative"
            >
              {/* Glowing Head of the Beam */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-12 bg-red-500 blur-md transform translate-y-1/2" />
              {/* Dropping Particle Effect Texture */}
              <motion.div 
                className="absolute inset-0 w-full h-full bg-[url('/noise.png')] opacity-20"
                animate={{ backgroundPositionY: [0, 1000] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>

          <div className="flex flex-col space-y-0">
            {steps.map((step, i) => (
              <ProcessCard key={step.id} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
