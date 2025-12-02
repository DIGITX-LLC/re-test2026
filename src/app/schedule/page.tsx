'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// We resolved the short link to this long URL and added ?gv=true for embedding
const GOOGLE_CALENDAR_URL = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0tszrwTsDxqjSDM1iQW3Gxo9osJsqLCqYVgLi-6Fdq7j5S12Vv_7mWy6V8-rnFTBZ9pMloEfEu?gv=true";

export default function SchedulePage() {
  return (
    <div className="h-screen w-full bg-black text-white relative flex flex-col overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <header className="relative z-10 px-6 py-4 border-b border-white/5 bg-black/50 backdrop-blur-md shrink-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <div className="text-xl font-bold tracking-tighter">
            re-<span className="text-red-600">{'{test}'}</span>
          </div>
        </div>
      </header>

      <main className="flex-1 relative z-10 container mx-auto px-4 py-6 flex flex-col min-h-0">
        <div className="grid lg:grid-cols-5 gap-8 h-full items-center">
          {/* Left Column: Context & Value Prop */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
                Schedule Your <br />
                <span className="text-red-500">Strategy Session</span>
              </h1>
              
              <p className="text-zinc-400 text-base mb-6 leading-relaxed">
                Book a free consultation with our QA architects. We'll discuss your current stack, pain points, and how to get your product release-ready.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-red-900/20 p-2 rounded-lg mr-3 border border-red-900/30">
                    <Calendar className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-0.5 text-sm">Tailored Roadmap</h3>
                    <p className="text-zinc-500 text-xs">Get a custom testing strategy aligned with your release cycles.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-900/20 p-2 rounded-lg mr-3 border border-red-900/30">
                    <Clock className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-0.5 text-sm">Zero Obligation</h3>
                    <p className="text-zinc-500 text-xs">30-minute discovery call. No hard sell, just engineering talk.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Calendar Embed */}
          <div className="lg:col-span-3  h-[400px] sm:h-[600px] lg:h-[800px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-zinc-200 rounded-3xl overflow-auto shadow-2xl h-full relative"
            >
              <iframe
                src={GOOGLE_CALENDAR_URL}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Select a Date & Time"
                className="w-full h-full"
                scrolling='yes'
              />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
