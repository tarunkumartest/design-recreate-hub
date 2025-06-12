import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Work } from '@/components/Work';
import { Contact } from '@/components/Contact';

export default function Index() {
  return (
    <div 
      className="w-full min-h-screen relative overflow-x-hidden bg-[#FBF8CC]"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <Header />
      
      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  );
}
