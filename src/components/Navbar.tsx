'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Industries', href: '#industries' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

 

  // Handle active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .filter(link => link.href.startsWith('#'))
        .map(link => link.href.substring(1));

      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (with some offset for header)
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      
      // Special case for Home/Top
      if (window.scrollY < 100) {
        current = ''; // Reset to Home
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

   // Don't render navbar on /schedule page to avoid double header
   if (pathname === '/schedule') {
    return <></>;
   }

  return (
    <>
      <div className="fixed top-6 inset-x-0 max-w-5xl mx-auto px-2 z-50 flex justify-center pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pointer-events-auto relative flex items-center justify-between w-full bg-zinc-900/60 backdrop-blur-xl border border-white/5 rounded-full px-2 py-2 shadow-2xl shadow-black/20"
        >
          {/* Logo */}
          <div className="flex-shrink-0 pl-4">
          
            <Link href="/" >
              {/* re-<span className="text-red-600 group-hover:text-red-500 transition-colors duration-300">{'{'}</span>test<span className="text-red-600 group-hover:text-red-500 transition-colors duration-300">{'}'}</span> */}
              <Image
         src="/assets/re-test-logo.svg"
            alt="re-test logo"
           width={40}
           height={40}
              className="w-26 lg:w-32 h-auto"
             />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.filter(l => l.name !== 'Home').map((link) => {
              const isAnchor = link.href.startsWith('#');
              const sectionId = isAnchor ? link.href.substring(1) : '';
              const isActive = activeSection === sectionId;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                    isActive 
                      ? "text-white bg-white/10" 
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center pr-1">
            <Link href="/schedule" passHref>
              <Button size="sm" className="hidden md:flex rounded-full px-6 bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 border-none shadow-lg shadow-red-900/20">
                Get Started
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors ml-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-24 z-40 md:hidden max-w-lg mx-auto"
          >
            <div className="bg-zinc-900/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden p-2">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-2xl text-zinc-400 hover:text-white hover:bg-white/5 font-medium transition-all"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-2">
                  <Link href="/schedule" passHref onClick={() => setIsOpen(false)}>
                    <Button className="w-full rounded-2xl bg-gradient-to-r from-red-700 to-red-900">Get Started</Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
