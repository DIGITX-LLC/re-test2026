'use client';

import { motion } from 'framer-motion';

export const ScrollLines = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full max-w-[1600px] mx-auto overflow-hidden">
        <div className="flex justify-between h-full w-full px-4 md:px-20 opacity-20">
            {/* 6 Vertical Lines with Animated Beams */}
            {[...Array(6)].map((_, i) => (
                <div key={i} className="relative w-[1px] h-full bg-zinc-800/30 overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-transparent via-red-500/50 to-transparent"
                        initial={{ y: -150 }}
                        animate={{ y: '120vh' }}
                        transition={{
                            duration: 7 + (i * 2) % 5, // Random-ish but deterministic duration
                            repeat: Infinity,
                            ease: "linear",
                            delay: (i * 1.5) % 4, // Staggered delays
                            repeatDelay: Math.max(1, (i * 0.5) % 3)
                        }}
                    />
                </div>
            ))}
        </div>
    </div>
  );
};

