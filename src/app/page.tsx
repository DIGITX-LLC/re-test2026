import Link from 'next/link';
import { Button } from '@/components/Button';
import { Hero } from '@/components/Hero';
import { ToolStack } from '@/components/ToolStack';
import { ValueProp } from '@/components/ValueProp';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { Industries } from '@/components/Industries';
import { Pricing } from '@/components/Pricing';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-20 bg-black">
      
      {/* Modern Hero Section */}
      <Hero />

      {/* Tool Stack Animation */}
      <ToolStack />

      {/* Value Proposition Section */}
      <ValueProp />

      {/* Services Section */}
      <Services />

      {/* Horizontal Process Section */}
      <Process />

      {/* Industries Section */}
      <Industries />

      {/* Pricing Section */}
      <Pricing />

      {/* CTA Section */}
      <Contact />
    </div>
  );
}
