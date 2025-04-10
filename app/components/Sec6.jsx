'use client';
import React, { useEffect } from 'react'
import Button from './Button'
import gsap from 'gsap'


const Sec6 = () => {
  useEffect(() => {
    gsap.to(".smilediv", {
      rotate: 360, // Complete one full rotation
      duration: 8, // Duration of one rotation in seconds
      repeat: -1, // Infinite repetition
      ease: "linear", // Smooth and consistent motion
    })
  }, []);

  return (

    <div className='px-[50px] py-[40px] flex flex-col gap-[20px]'>
      <p className='text-2xl leading-[30px] '>NiceAtNoon is fris, jong en een tikkeltje eigenzinnig. Wars van jargon en <br />
        allergisch voor bureau blabla, gaan we lekker samen aan de slag met <br />
        jouw merk. En dat moet vooral leuk zijn! Want plezier nemen we serieus. <br />
        Vanuit daar ontstaat enthousiasme, trots en het zelfvertrouwen om <br />
        jouw merk de uitstraling te geven die het verdient.</p>
      <Button inner={"Contact"} />
      <div className='flex flex-col items-center gap-[50px]'>
        <h6>Our belief</h6>
        <div className='flex flex-col items-center'>
          <h1 className='font-[apercumid] text-[110px] leading-[90px] font-semibold'>BRAND JUST</h1>
          <h1 className='font-[apercumid] text-[110px] leading-[90px] font-semibold'>WANT</h1>
          <h1 className='font-[apercumid] text-[110px] leading-[90px] font-semibold'>TO HAVE FUN</h1>
          {/* <div className='w-[20px] h-[70px] bg-amber-300'>hdbhbkj</div> */}
          {/* <h4 className='bg-[#F4C727] px-[20px] py-[12px] rounded-2xl mt-[-15px] ml-[400px] rotate-[-18deg]'>Gotta see 'm all</h4> */}
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT4DPUdJH757cFucyvlJEIrX9lKvOOUUtW1Dcb0Uge1Mqe981Hz" alt="" className='smilediv px-[20px] py-[12px] h-[150px] mt-[-110px] ml-[720px] -z-10' />
        </div>
      </div>
    </div>
  )
}

export default Sec6
