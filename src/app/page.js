'use client'
import React from 'react';

import CustomCursor from "./Components/animatedCursor";
import Sidebar from "./Components/sidebar";
import ContentBar from './Components/contentbar';
import PopupMsg from './Components/popup';
import IndexPage from './Components/animation';

export default function Home() {


  return (
    <main>
      <Sidebar />
      <CustomCursor />
      <ContentBar />
      <PopupMsg />
    </main>
  );
}
