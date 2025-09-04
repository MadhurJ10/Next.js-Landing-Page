'use client';
import React, { useContext } from 'react';
import { anicardcontext } from '../context/Anicardprovider';
import gsap from 'gsap';

const Anicard = () => {
    const data = useContext(anicardcontext); // Fetch data from context

    const handleMouseEnter = (index) => {
        // Target both elements for animation
        gsap.to([`.carddd-${index}`, `.cardddd-${index}`], {
            borderRadius: '70px', // Apply rounded corners
            duration: 0.5,
        });
    };

    const handleMouseLeave = (index) => {
        // Revert animation for both elements
        gsap.to([`.carddd-${index}`, `.cardddd-${index}`], {
            borderRadius: '0px', // Reset rounded corners
            duration: 0.5,
        });
    };

    return (
        <div className="flex flex-wrap w-[100%] gap-[20px] text-white">
            {data.map((item, index) => (
                <div
                    key={index}
                    className="anicard flex flex-col "
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                >
                    <div
                        className={`carddd-${index} carddd h-[250px] w-[270px] bg-center bg-cover rounded-t-3xl`}
                        style={{ backgroundImage: `url(${item.url})` }}
                    ></div>
                    <div
                        className={`cardddd-${index} cardddd h-[150px] w-[270px] rounded-b-3xl flex flex-col gap-3 px-[30px] py-[5px]`}
                        style={{ backgroundColor: `${item.color}` }}
                    >
                        <h1 className="text-[20px]">{item.name}</h1>
                        <p className="text-[15px]">
                            Lorem, ipsum dolor si amet consectetur <br /> adipisicing elit. Eveniet,
                            est!
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Anicard;
