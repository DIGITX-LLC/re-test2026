'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const mainLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Industries', href: '#industries' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export const Footer = () => {
  const pathname = usePathname();

  // Don't render footer on /schedule page to keep it focused
  if (pathname === '/schedule') return null;

  return (
    <footer className="bg-black border-t border-white/5 relative overflow-hidden pt-12 md:pt-24 pb-12">
      {/* Background Gradients */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-900/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16 items-start text-center md:text-left">
          
          {/* Brand & Contact Column */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-3xl font-bold text-white tracking-tighter inline-block mb-6 group">
              {/* re-<span className="text-red-600 group-hover:text-red-500 transition-colors duration-300">{'{'}</span>test<span className="text-red-600 group-hover:text-red-500 transition-colors duration-300">{'}'}</span> */}
            
              <Image
         src="/assets/re-test logo.svg"
            alt="re-test logo"
           width={120}
           height={40}
              className=" md:w-30 lg:w-48 h-auto"
             />
            </Link>
            
            <div className="text-zinc-400 text-sm space-y-2 font-light">
              <p>44-70 21st St, Long Island City, NY 11101</p>
              <p>
                <a href="tel:5168474880" className="hover:text-white transition-colors">
                  (516) 847-4880
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Links (Minimal) */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            {mainLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="text-base md:text-lg font-medium text-zinc-400 hover:text-white hover:underline decoration-red-600 underline-offset-8 transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <p className="text-zinc-500 text-sm">
              &copy; {new Date().getFullYear()} re-{'{'}test{'}'}.
            </p>
            <span className="hidden md:block text-zinc-700">•</span>
            <p className="text-zinc-500 text-sm">
              A product of DigitX LLC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
