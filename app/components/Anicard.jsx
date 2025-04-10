import React, { useContext } from 'react';
import { anicardcontext } from '../context/Anicardprovider';

const Anicard = () => {
    const data = useContext(anicardcontext); // Fetch data from context

    return (
        <div className="flex flex-wrap w-[100%]  gap-[20px] text-white">
            {data.map((item, index) => (
                <div key={index} className="anicard flex flex-col">
                    <div
                        className="carddd h-[250px] w-[270px] bg-center bg-cover rounded-t-3xl"
                        style={{ backgroundImage: `url(${item.url})` }}
                    ></div>
                    <div className="h-[150px] w-[270px]  rounded-b-3xl flex flex-col gap-3 px-[30px] py-[5px]"
                        style={{ backgroundColor: `${item.color}` }}>
                        <h1 className='text-[20px]'>{item.name}</h1>
                        <p className='text-[15px]'>Lorem, ipsum dolor si amet consectetur <br /> adipisicing elit. Eveniet, est!</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Anicard;
