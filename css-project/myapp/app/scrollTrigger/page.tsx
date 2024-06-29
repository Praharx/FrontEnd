'use client'

import gsap from 'gsap';
import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

function Page() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#main'),
      smooth: true,
    });

    
    
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div id="main">
      <div id="page1" className='w-screen h-screen bg-cyan-500 flex justify-center items-center'>
        <div className='h-24 w-24 bg-red-400'></div>
      </div>
      <div id="page2" className='w-screen h-screen bg-slate-700 flex justify-center items-center'>
        <div className='h-24 w-24 bg-red-400'></div>
      </div>
      <div id="page3" className='w-screen h-screen bg-indigo-200 flex justify-center items-center'>
        <div className='h-24 w-24 bg-red-400'>f</div>
      </div>
    </div>
  )
}

export default Page;