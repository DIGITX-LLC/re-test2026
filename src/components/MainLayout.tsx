'use client';

import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  // Remove top padding on /schedule page to avoid gap
  const isSchedule = pathname === '/schedule';
  
  return (
    <main className={clsx("min-h-screen relative z-10", !isSchedule && "pt-16")}>
      {children}
    </main>
  );
};

