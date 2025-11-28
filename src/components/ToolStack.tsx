'use client';

import { motion } from 'framer-motion';

const tools = [
  "Selenium", "Cypress", "Playwright", "Appium", "Jira", 
  "Jenkins", "GitHub Actions", "Docker", "Kubernetes", 
  "Postman", "JMeter", "Python", "TypeScript", "Java", "AWS"
];

export const ToolStack = () => {
  return (
    <section className="py-12 bg-black border-y border-white/5 overflow-hidden">
      <div className="max-w-[100vw]">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
          aria-hidden="true"
        >
          {/* Repeat 4 times to ensure smooth loop on wide screens */}
          {[...tools, ...tools, ...tools, ...tools].map((tool, index) => (
            <div
              key={index}
              className="inline-block mx-8 text-4xl md:text-6xl font-bold text-zinc-800 uppercase tracking-tighter select-none hover:text-zinc-700 transition-colors"
            >
              {tool}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

