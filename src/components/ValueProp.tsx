'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Code, LayoutGrid, ShieldCheck, Users, Rocket } from 'lucide-react';

export const ValueProp = () => {
  return (
    <section id="about" className="relative py-24 bg-black overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Don't Just Build. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-700 to-red-900">Release with Confidence.</span>
            </h2>
            
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              The gap between "works on my machine" and "ready for users" is where products fail. We are the quality gate that transforms raw code into a polished, secure, and scalable product.
            </p>

            <ul className="space-y-5">
              {[
                { title: 'From Code to Product', desc: 'We handle the rigorous testing needed to ship.' },
                { title: 'Eliminate Release Anxiety', desc: 'Deploy knowing your critical paths are covered.' },
                { title: 'User-Centric Quality', desc: 'Ensuring the experience matches the promise.' }
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 p-1 rounded-full bg-zinc-900 border border-zinc-800 text-red-500 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">{item.title}</h4>
                    <p className="text-sm text-zinc-500">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Visual - Bento Grid Style */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 to-zinc-500/10 rounded-3xl blur-2xl opacity-50" />
            
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
                  <Code size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Code Integrity</h3>
                <p className="text-sm text-zinc-400">Ensuring the codebase is maintainable, logical, and robust.</p>
              </div>

              {/* Card 2 */}
              <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-colors group sm:translate-y-8">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <Users size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">User Ready</h3>
                <p className="text-sm text-zinc-400">Validating workflows against real-world user behavior.</p>
              </div>

              {/* Card 3 */}
              <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-colors group sm:-translate-y-8">
                 <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Production Safe</h3>
                <p className="text-sm text-zinc-400">Security and compliance checks before you hit deploy.</p>
              </div>

               {/* Card 4 */}
               <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-colors group">
                 <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4 group-hover:scale-110 transition-transform">
                  <Rocket size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Launch Speed</h3>
                <p className="text-sm text-zinc-400">Faster time-to-market with automated verification pipelines.</p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
