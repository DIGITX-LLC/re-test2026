'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { 
  ShieldCheck, 
  Smartphone, 
  Zap, 
  Code, 
  Database, 
  CheckCircle2,
  Rocket,
  Lock
} from 'lucide-react';
import { MouseEvent } from 'react';

function ServiceCard({ service, index }: { service: any, index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative p-8 bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-white/10 transition-all duration-300 overflow-hidden"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
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
      
      {/* Card Content */}
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center p-3 bg-black/50 rounded-xl text-red-600 mb-6 border border-white/5 group-hover:scale-110 transition-transform shadow-inner group-hover:border-red-900/30 group-hover:text-red-500">
          {service.icon}
        </div>
        <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-red-50 transition-colors">{service.title}</h4>
        <p className="text-zinc-400 leading-relaxed text-sm group-hover:text-zinc-300 transition-colors">{service.desc}</p>
      </div>
    </motion.div>
  );
}

export const Services = () => {
  return (
    <section id="services" className="bg-zinc-900/30 lg:
    py-24 border-t border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
         <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-red-900/5 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-red-700 font-semibold tracking-wide uppercase text-sm mb-3">Our Services</h2>
          <h3 className="text-2xl md:text-3xl md:text-5xl font-bold text-white mb-6">
            Services That <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-700 to-red-900">Ship Products</span>
          </h3>
          <p className="mt-4 px-2 text-xl text-zinc-400 max-w-2xl mx-auto font-light">
            We don't just find bugs; we clear the path to production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {[
            { title: 'Codebase Verification', icon: <Code />, desc: 'Deep analysis of AI-generated and human-written code for logic and structural integrity.' },
            { title: 'Security Hardening', icon: <Lock />, desc: 'Identify vulnerabilities and lock down your application before users do.' },
            { title: 'User Experience QA', icon: <CheckCircle2 />, desc: 'Manual testing to ensure the product feels right, not just functions correctly.' },
            { title: 'Load & Scalability', icon: <Database />, desc: 'Stress testing to guarantee your product survives viral growth.' },
            { title: 'Cross-Platform QA', icon: <Smartphone />, desc: 'Consistent behavior across every device and operating system your users use.' },
            { title: 'Release Pipelines', icon: <Rocket />, desc: 'Building automated CI/CD gates so you can ship safely, every time.' },
          ].map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
