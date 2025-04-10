'use client';
import React, { useEffect } from 'react'
import Nav from './components/Nav';
import Sec1 from './components/Sec1';
import Sec1moving from './components/Sec1moving';
import Sec2 from './components/Sec2';
import Sec3 from './components/Sec3';
import Sec4 from './components/Sec4';
import Sec5 from './components/Sec5';
import Sec6 from './components/Sec6';
import Footer from './components/Footer';
import gsap from 'gsap';


const page = () => {
  useEffect(() => {
    gsap.to(".rotateimg", {
      rotate: 360, // Complete one full rotation
      duration: 5, // Duration of one rotation in seconds
      repeat: -1, // Infinite repetition
      ease: "linear", // Smooth and consistent motion
    });
  }, []);
  return (
    <div className='font-[apercureg] h-screen overflow-x-clip'>
      <Nav />
      <Sec1 />
      <Sec1moving />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Sec6 />
      <Footer />
    </div>
  )
}

export default page