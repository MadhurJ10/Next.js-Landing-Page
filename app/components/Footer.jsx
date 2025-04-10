import React, { useEffect } from 'react'
import Button from './Button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Footer = () => {
    useEffect(() => {
        gsap.from(".footerimg", {
            y: 200,
            scrollTrigger: {
                trigger: ".footer",
                scroller: "body",
                markers: false,
                start: "top 20%",
            }
        })
    }, []);
    return (
        <div className='footer h-[] w-[100%] bg-black  flex text-white flex-col gap-[100px] overflow-y-hidden'>
            <div className='mt-[80px] flex w-[100%] justify-between px-[50px]'>
                <div className='left flex flex-col gap-[30px]'>
                    <h1 className='text-5xl'>Let's turn some heads!</h1>
                    <Button inner={"contact"} />
                </div>
                <div className='right flex flex-row gap-[50px] text-[11px]'>
                    <div className='flex flex-col gap-[4px]'>
                        <h2 className='text-[20px] font-[montel]'>SOCIALS</h2>
                        <a href="">INSTAGRAM</a>
                        <a href="">LINKDIN</a>
                    </div>
                    <div className='flex flex-col gap-[4px]'>
                        <h2 className='text-[20px] font-[montel]'>SITEMAP</h2>
                        <a href="">HOME</a>
                        <a href="">PROJECTS</a>
                        <a href="">OVER</a>
                        <a href="">CONTACT</a>

                    </div>
                    <div className='flex flex-col gap-[4px]'>
                        <h2 className='text-[20px] font-[montel]'>INFO</h2>
                        <a href="">PRIVACY</a>
                        <a href="">COOKIE</a>
                        <a href="">hhehehe</a>
                    </div>
                </div>
            </div>

            {/* <div className=" h-screen bg-[url('https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1.png')]"></div> */}
            <img className='footerimg' src="https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1.png" alt="" />
        </div>
    )
}

export default Footer
