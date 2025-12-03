'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent } from 'react';
import { 
  Activity, 
  ShoppingCart, 
  Server, 
  Cpu, 
  Globe, 
  Banknote 
} from 'lucide-react';

const industries = [
  {
    title: 'FinTech',
    desc: 'Secure transactions, compliance (PCI-DSS, SOC2), and high-frequency trading reliability.',
    icon: <Banknote size={24} />,
  },
  {
    title: 'HealthTech',
    desc: 'HIPAA compliance, patient data integrity, and mission-critical system uptime.',
    icon: <Activity size={24} />,
  },
  {
    title: 'E-Commerce',
    desc: 'Checkout flow validation, load testing for Black Friday spikes, and global payment gateways.',
    icon: <ShoppingCart size={24} />,
  },
  {
    title: 'SaaS Platforms',
    desc: 'Multi-tenancy isolation, subscription logic, and zero-downtime release cycles.',
    icon: <Server size={24} />,
  },
  {
    title: 'AI & ML',
    desc: 'Model validation, data pipeline integrity, and removing bias from automated decisions.',
    icon: <Cpu size={24} />,
  },
  {
    title: 'IoT & Edge',
    desc: 'Device-cloud synchronization, real-time data processing, and firmware update testing.',
    icon: <Globe size={24} />,
  },
];

function IndustryCard({ industry, index }: { industry: any, index: number }) {
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
      className="group relative bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:bg-zinc-900/60 transition-colors duration-300"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(153, 27, 27, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-800/50 border border-white/5 text-red-500 group-hover:text-red-400 group-hover:scale-110 transition-all duration-300">
          {industry.icon}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-50 transition-colors">
          {industry.title}
        </h3>
        
        <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
          {industry.desc}
        </p>
      </div>
    </motion.div>
  );
}

export const Industries = () => {
  return (
    <section id="industries" className="lg:py-24 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-red-700 font-semibold tracking-wide uppercase text-sm mb-3">Industries</h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Quality Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Every Scale</span>
          </h3>
          <p className="text-zinc-400 text-sm px-2 lg:text-xl max-w-2xl mx-auto">
            From high-frequency trading to life-saving medical devices, we understand the specific nuances of your domain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

