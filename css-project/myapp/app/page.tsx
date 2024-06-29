"use client"

import { gsap } from "gsap";
import { useEffect } from "react";

export default function Home() {

  useEffect(()=>{
     const tl = gsap.timeline();
     const tl2 = gsap.timeline();
     const tl3 = gsap.timeline();
      tl.from("#nav h2",{
        y: -50,
        duration: 0.2,
        delay: 0.2,
        opacity: 0
      })
      tl.to("#nav h2",{
        y:0,
        duration: 0.4,
        delay: 0.1,
        opacity: 1,
        stagger: 0.3
      })
      tl2.from("#text h1",{
        x: -100,
        duration:0.4,
        delay: 0.4,
        opacity: 0,
        stagger: 0.2
      })
      tl2.to("#text h1",{
        x:0,
        duration: 1,
        opacity: 1,
        stagger: 0.4
        
      })
      tl3.from("#text img",{
        
        duration:0.4,
        delay: 0.4,
        opacity: 0,
        stagger: 0.2
      })
      tl3.to("#text img",{
        
        duration: 1,
        opacity: 1,
        stagger: 0.4
        
      })
      

  }, [])
  return (
    <div className="bg-black min-h-screen">
      <div className="flex justify-between items-center uppercase mt-6">
        <div id="nav" className="w-30 text-3xl flex justify-center "><h2>Franseco Gioioc</h2></div>
        <div id="nav" className="flex gap-10">
          <h2>Instagram</h2>
          <h2>Gallery</h2>
          <h2>Contact</h2>
        </div>
      </div>
      <div className="uppercase text-[18vh] w-full  relative leading-[150px]" id="text">
       <h1 className="absolute top-64 left-40 z-50">Hola! I'm</h1>
       <h1 className="absolute top-96 left-72 z-50" >Franseco</h1>
       <h1 className="absolute top-[500px] left-[500px] z-50">Gioioc</h1>
       
        <img className="absolute top-20 w-[300px] left-[670px] rotate-[30deg] " src="https://images.unsplash.com/photo-1716983971353-4441f9883040?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" alt="sun" />
        <img className="absolute top-20 w-[300px] left-[650px] rotate-12" src="https://images.unsplash.com/photo-1717044901088-21523025027d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D" alt="flower" />
        <img className="absolute top-20 w-[300px] left-[600px]" src="https://images.unsplash.com/photo-1716839358026-e857bad29a05?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D" alt="lava" />
       
       </div>
    </div>
  );
}
