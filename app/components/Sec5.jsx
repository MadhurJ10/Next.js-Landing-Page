import React from 'react'
import Button from './Button'
import Anicard from './Anicard'
Anicard

const Sec5 = () => {
    return (
        <div className='h-screen px-[50px] mt-[25%] flex flex-col gap-[30px]'>
            <div className='flex flex-row justify-between '>
                <div className='flex flex-col gap-[25px]'>
                    <h4>Services</h4>
                    <h1 className='text-2xl'>Zo onderscheiden we je <br /> van de norm</h1>
                </div>
                <div className='flex items-end'>
                    <Button inner={"Let's Meet"} />

                </div>
            </div>
            <div className='flex flex-row w-[100%] '>
                <div className='w-[100%] flex justify-between'>
                    <Anicard />

                </div>
            </div>
        </div>
    )
}

export default Sec5
