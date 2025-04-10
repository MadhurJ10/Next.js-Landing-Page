'use client';
import React, { useEffect, useRef } from 'react'
import Button from './Button'
import gsap from 'gsap';





const Nav = () => {
  useEffect(() => {
    const tl = gsap.timeline()
    tl.from(".Navdiv", {
      y: -100,
      opacity: 0,
      duration: 1,
      stagger: 1
    })

  }, []);
  return (
    <div className='Navdiv flex px-[50px] py-[10px] justify-between'>
      <h1 className='Nvvv font-[montel] text-3xl font-semibold'>NiceAtNoon</h1>
      <img src="https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/645505004e4ec0e72b8fc921_webclip-niceatnoon.webp" alt="" className='rotateimg h-[40px] ml-[50px]' />
      <div className='Navbox flex gap-[20px]'>
        <Button inner={"Project"} />
        <Button inner={"Over"} />
        <Button inner={"Contact"} />
      </div>
    </div>
  )
}

export default Nav
