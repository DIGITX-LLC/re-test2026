'use client';

import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid Pattern with Enhanced Visibility */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808025_1px,transparent_1px),linear-gradient(to_bottom,#80808025_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)] pointer-events-none" />

      {/* Enhanced Gradient Orbs with Increased Opacity */}
      <div className="absolute top-[-10%] left-[20%] w-[800px] h-[800px] bg-red-900/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[10%] w-[700px] h-[700px] bg-zinc-700/30 blur-[80px] rounded-full pointer-events-none mix-blend-screen" />
      
      {/* Center Glow for Depth */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        
        {/* Centered Content */}
        <div className="z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
          >
            Turn AI Code into <br />
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-red-900/20 blur-xl rounded-lg"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-700 to-red-900 drop-shadow-sm">
                Shippable Products
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed text-balance font-light"
          >
             AI writes code fast, but <span className="text-white font-medium">speed isn't quality</span>. We bridge the gap between <span className="italic text-zinc-300">Code Complete</span> and <span className="italic text-zinc-300">Release Ready</span>—ensuring your product is secure, bug-free, and trusted by users.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/schedule" passHref>
              <Button size="lg" className="group text-base h-14 px-8 shadow-red-900/20 shadow-lg">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#services" passHref>
              <Button size="lg" variant="outline" className="text-base h-14 px-8 border-zinc-700 hover:bg-white/5 hover:border-zinc-600 backdrop-blur-sm">
                Our Expertise
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
