'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent, useState, Suspense } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { LeadCaptureModal } from './LeadCaptureModal';
import { clsx } from 'clsx';

const plans = [
  {
    name: 'Vibe Coders',
    price: 'From $999',
    period: '/release',
    desc: 'Perfect for MVPs & small apps (Web or Mobile).',
    features: [
      'Manual Functional Testing',
      'Critical Path Verification',
      'AI Code Logic Review',
      'Basic UX/UI Polish',
      'Single Platform Focus',
    ],
    highlight: false,
  },
  {
    name: 'Scaleup',
    price: 'From $2,499',
    period: '/month',
    desc: 'Ongoing QA for growing Web & Mobile products.',
    features: [
      'End-to-End Automation',
      'Cross-Browser/Device Cloud',
      'API & Integration Testing',
      'CI/CD Pipeline Setup',
      'Regression Cycles',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'Full-scale coverage for complex ecosystems.',
    features: [
      'Security & Pen Testing',
      'Load & Scalability Testing',
      '24/7 Real-time Monitoring',
      'Dedicated QA Squad',
      'Custom SLA & Compliance',
    ],
    highlight: false,
  },
];

function PricingCard({ plan, index, onSelect }: { plan: any, index: number, onSelect: (planName: string) => void }) {
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
      className={clsx(
        "group relative p-8 rounded-3xl border transition-all duration-300 flex flex-col h-full",
        plan.highlight 
          ? "bg-zinc-900/60 border-red-900/30" 
          : "bg-zinc-900/20 border-white/5 hover:border-white/10"
      )}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(153, 27, 27, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      {plan.highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-600 rounded-full text-xs font-medium text-white shadow-lg shadow-red-900/20">
          Most Popular
        </div>
      )}

      <div className="relative z-10 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-zinc-400 text-sm mb-6">{plan.desc}</p>
        
        <div className="mb-8 flex items-baseline">
          <span className="text-3xl font-bold text-white">{plan.price}</span>
          {plan.period && <span className="text-zinc-500 text-sm ml-1">{plan.period}</span>}
        </div>

        <ul className="space-y-4 mb-8 flex-1">
          {plan.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-start text-sm text-zinc-300">
              <Check className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <Button 
            variant={plan.highlight ? 'primary' : 'outline'} 
            className="w-full group"
            onClick={() => onSelect(plan.name)}
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <section id="pricing" className="py-24 bg-black relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-red-700 font-semibold tracking-wide uppercase text-sm mb-3">Pricing</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Flexible Plans for <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Every Stage</span>
          </h3>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Whether you're an early-stage startup or an established enterprise, we have a QA solution that fits your scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index} 
              plan={plan} 
              index={index} 
              onSelect={setSelectedPlan}
            />
          ))}
        </div>
      </div>

      <Suspense fallback={null}>
        <LeadCaptureModal 
          isOpen={!!selectedPlan}
          onClose={() => setSelectedPlan(null)}
          planName={selectedPlan || ''}
        />
      </Suspense>
    </section>
  );
};
