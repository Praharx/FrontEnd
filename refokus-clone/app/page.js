"use client"

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";
import Footer from "./components/Footer"; 

export default function Home() {
  useEffect(() => {
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default();
    });

   // cleanup phase
    return () => {
      if (scroll) scroll.destroy();
    };
  });


  return (
    <>
     <div className="bg-zinc-900 pb-[0.1px]">
     <Navbar />
     <Work />
     <Stripes />
     <Products />
     <Marquees />
     <Cards />
     <Footer />
     </div>
    </>
  )
}
