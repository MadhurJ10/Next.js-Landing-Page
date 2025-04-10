'use client';
import React, { useEffect, useRef } from 'react'
import Button from './Button'
import gsap from 'gsap';

const Sec1 = () => {
    useEffect(() => {
        gsap.from(".sec1lft", {
            x: -100,
            duration: 2,
            delay: 1,
            opacity: 0
        })
        gsap.from(".sec1ryt", {
            x: 100,
            duration: 2,
            delay: 1,
            opacity: 0
        })
    }, []);
    return (
        <div className='px-[50px] py-[60px] flex justify-between'>
            <div className='sec1lft flex'>
                <h1 className='font-[montel] text-8xl'>Turning <br /> heads and <br /> conquering <br /> hearts </h1>
                <img className='rotateimg h-[70px] mt-[310px] ml-[-200px]' src="https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/645505004e4ec0e72b8fc921_webclip-niceatnoon.webp" alt="" />
            </div>
            <div className='sec1ryt flex flex-col justify-end gap-[20px]'>
                <p>NiceAtNoon is een boutique design <br /> studio gespecialiseerd in branding en <br /> webdesign.</p>
                <Button inner={"Click me"} />

            </div>
        </div>
    )
}

export default Sec1
