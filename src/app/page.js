'use client'
import React, { useState } from 'react';

import CustomCursor from "./Components/animatedCursor";
import Sidebar from "./Components/sidebar";
import ContentBar from './Components/contentbar';
import PopupMsg from './Components/popup';

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
