'use client'
import React, { useState } from 'react';

import CustomCursor from "./Components/animatedCursor";
import Sidebar from "./Components/sidebar";
import ContentBar from './Components/contentbar';

export default function Home() {
  const [location, setLocation] = useState('Home');

  return (
    <main>
      <Sidebar />
      <CustomCursor />
      <ContentBar />
    </main>
  );
}
