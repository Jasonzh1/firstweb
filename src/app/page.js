'use client'
import React, { useState } from 'react';

import CustomCursor from "./Components/animatedCursor";
import Sidebar from "./Components/sidebar";

export default function Home() {
  const [location, setLocation] = useState('Home');

  return (
    <main className="flex flex-row h-dvh bg-slate-800">
      <Sidebar />
      <CustomCursor />
    </main>
  );
}
