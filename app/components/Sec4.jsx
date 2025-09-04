'use client';
import React from 'react';
import Unclickbutton from './Unclickbutton';
import Button from './Button';
import gsap from 'gsap';

const Sec4 = () => {
    // Function to handle mouse enter
    const onenter = (index) => {
        gsap.to(`.image-${index}`, {
            borderRadius: '140px',
            duration: 0.5, // Add smooth transition
        });
        gsap.to(`.imagee-${index}`, {
            opacity: 1,
            duration: 0.5,
        })
    };

    // Function to handle mouse leave
    const onleave = (index) => {
        gsap.to(`.image-${index}`, {
            borderRadius: '0px', // Reset the borderRadius
            duration: 0.5, // Add smooth transition
        });

        gsap.to(`.imagee-${index}`, {
            opacity: 0,
        })
    };

    return (
        <div className="h-screen px-[50px]">
            <div className="flex flex-col gap-[0px]">
                <h4>Salud</h4>
                <h3 className="font-bold">Elevate the experience</h3>
                <div className="flex flex-row gap-[10px] mt-[10px]">
                    <Unclickbutton text={"BRAND STORY"} />
                    <Unclickbutton text={"BRAND IDENTITY"} />
                    <Unclickbutton text={"WEBDESIGN"} />
                </div>
            </div>
            <div className="h-[100%] w-[100%] flex flex-row justify-between mt-[20px]">
                {/* First image section */}
                <div className="h-[100%] w-[550px]">
                    <img
                        className="imagee-1 rounded-[60px] opacity-0 absolute z-10 translate-x-[100px] translate-y-[90px] h-[300px]"
                        src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/679ce3e20a6c6bdb0bcf8d90_MAX_ARTD-C02-Screen-NaN-min.avif"
                        alt="hehehe"
                    />
                    <img
                        className="image-1 w-full h-[85%] object-cover rounded-4xl relative"
                        onMouseEnter={() => onenter(1)} // Call with index 1
                        onMouseLeave={() => onleave(1)} // Call with index 1
                        src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/679ce0e99c825524cbd5cd04_MAX_Header-NaN-min.avif"
                        alt=""
                    />
                    <div className="flex flex-col gap-[0px]">
                        <h4>Salud</h4>
                        <h3 className="font-bold">Elevate the experience</h3>
                        <div className="flex flex-row gap-[10px] mt-[10px]">
                            <Unclickbutton text={"BRAND IDENTITY"} />
                            <Unclickbutton text={"WEBDESIGN"} />
                        </div>
                    </div>
                    <div className="h-[50px] w-[100%] bg-[#E4E4E4] mt-[125px] flex items-center rounded-[10px] px-[30px] justify-between">
                        <h1>Ook aan de slag met jouw merk?</h1>
                        <Button inner={"Let's Meet"} />
                    </div>
                </div>

                {/* Second image section */}
                <div className="h-[100%] w-[550px]">
                    <img
                        className="imagee-2 rounded-[60px] opacity-0 absolute z-10 translate-x-[100px] translate-y-[150px] h-[350px] w-[300px] object-cover"
                        src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/67c757ec1c7965b237f85e6f_CLIENSKIN_Logo-pattern_N%40N-min.avif"
                        alt="hehehe"
                    />
                    <img
                        className="image-2 w-full h-[100%] object-cover rounded-4xl"
                        onMouseEnter={() => onenter(2)} // Call with index 2
                        onMouseLeave={() => onleave(2)} // Call with index 2
                        src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/67c757e3e0ed29c25c121862_CLIENSKIN_Header_N%40N-min.avif"
                        alt=""
                    />
                    <div className="flex flex-col gap-[0px]">
                        <h4>Salud</h4>
                        <h3 className="font-bold">Elevate the experience</h3>
                        <div className="flex flex-row gap-[10px] mt-[10px]">
                            <Unclickbutton text={"BRAND IDENTITY"} />
                            <Unclickbutton text={"WEBDESIGN"} />
                            <Unclickbutton text={"BRAND CARE"} />
                            <Unclickbutton text={"BRAND STORY"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sec4;
