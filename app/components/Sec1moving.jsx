
import React, { useEffect } from 'react';
import Card from './Card';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Sec1moving = () => {
  useEffect(() => {
    gsap.to(".card", {
      transform: "translateX(-110%)",
      duration: 2.5,
      ease: "slow(0.7,0.7,false)",
      scrollTrigger: {
        trigger: ".carddiv", // Element that triggers the animation (could be '.h-screen' or parent container)
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 60%",
        scrub: 2,
      },
    });
  }, []);

  return (
    <div className="carddiv h-screen flex items-center gap-[15px] overflow-hidden relative">
      <Card className="card" />
    </div>
  );
};

export default Sec1moving;
