'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2 } from 'lucide-react';
import { useState, FormEvent, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from './Button';
import { clsx } from 'clsx';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
}

export function LeadCaptureModal({ isOpen, onClose, planName }: LeadCaptureModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const [utmParams, setUtmParams] = useState({
    source: '',
    medium: '',
    campaign: '',
  });

  // Capture UTM parameters on mount
  useEffect(() => {
    if (searchParams) {
      setUtmParams({
        source: searchParams.get('utm_source') || '',
        medium: searchParams.get('utm_medium') || '',
        campaign: searchParams.get('utm_campaign') || '',
      });
    }
  }, [searchParams]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      projectType: formData.get('projectType'),
      budget: formData.get('budget'),
      message: formData.get('message'),
      plan: planName,
    };

    // Construct mailto link with UTM data included
    const subject = `New Inquiry: ${planName} Plan`;
    let body = `Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0AProject Type: ${data.projectType}%0D%0ABudget: ${data.budget}%0D%0AMessage: ${data.message}%0D%0APlan: ${planName}`;
    
    // Append UTM tracking if available
    if (utmParams.source || utmParams.medium || utmParams.campaign) {
      body += `%0D%0A%0D%0A--- Marketing Source ---%0D%0ASource: ${utmParams.source}%0D%0AMedium: ${utmParams.medium}%0D%0ACampaign: ${utmParams.campaign}`;
    }
    
    window.location.href = `mailto:info@re-test.dev?subject=${subject}&body=${body}`;
    
    setIsSubmitting(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl max-w-lg w-full pointer-events-auto overflow-hidden">
              <div className="p-6 md:p-8 relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Get Started with {planName}</h3>
                  <p className="text-zinc-400">Tell us a bit about your project so we can hit the ground running.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all"
                      placeholder="jane@company.com"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-zinc-300 mb-1">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all appearance-none"
                      >
                        <option value="Web App">Web App</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="Both">Both</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-zinc-300 mb-1">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all appearance-none"
                      >
                        <option value="< $5k">&lt; $5k</option>
                        <option value="$5k - $20k">$5k - $20k</option>
                        <option value="$20k - $50k">$20k - $50k</option>
                        <option value="$50k+">$50k+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all resize-none"
                      placeholder="Tell us about your timeline or specific needs..."
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      variant="primary"
                      className="w-full justify-center group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                      ) : (
                        <>
                          Submit Inquiry
                          <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <p className="text-xs text-zinc-500 text-center mt-4">
                    We'll get back to you within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
