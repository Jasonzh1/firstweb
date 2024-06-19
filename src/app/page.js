'use client'
import React from 'react';

import Sidebar from "./sidebar";
import AnimatedCursor from 'react-animated-cursor';

export default function Home() {
  return (
    <main className="flex flex-row h-dvh bg-slate-700">
      <Sidebar />
      <AnimatedCursor 
        innerSize={20}
        outerSize={8}
        color='30, 41, 59'

        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',]}
          />
    </main>
  );
}
