import React from 'react'
import Unclickbutton from './Unclickbutton'
import Button from './Button'


const Sec4 = () => {
    return (
        <div className='h-screen px-[50px]'>
            <div className='flex flex-col gap-[0px]'>
                <h4>Salud</h4>
                <h3 className='font-bold'>Elevate the experience</h3>
                <div className='flex flex-row gap-[10px] mt-[10px]'>
                    <Unclickbutton text={"BRAND STORY"} />
                    <Unclickbutton text={"BRAND IDENTITY"} />
                    <Unclickbutton text={"WEBDESIGN"} />
                </div>

            </div>
            <div className='h-[100%]  w-[100%] flex flex-row  justify-between mt-[20px]'>
                <div className=' h-[100%] w-[550px] '>
                    <img src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/679ce0e99c825524cbd5cd04_MAX_Header-NaN-min.avif" alt="" className='w-full h-[85%] object-cover rounded-4xl' />
                    <div className='flex flex-col gap-[0px]'>
                        <h4>Salud</h4>
                        <h3 className='font-bold'>Elevate the experience</h3>
                        <div className='flex flex-row gap-[10px] mt-[10px]'>
                            <Unclickbutton text={"BRAND IDENTITY"} />
                            <Unclickbutton text={"WEBDESIGN"} />
                        </div>

                    </div>
                    <div className='h-[50px] w-[100%] bg-[#E4E4E4] mt-[125px] flex items-center rounded-[10px] px-[30px] justify-between'>
                        <h1>Ook aan de slag met jouw merk?</h1>
                        <Button inner={"Let's Meet"} />

                    </div>

                </div>
                <div className=' h-[100%] w-[550px] '>
                    <img src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/67c757e3e0ed29c25c121862_CLIENSKIN_Header_N%40N-min.avif" alt="" className='w-full h-[100%] object-cover rounded-4xl' />
                    <div className='flex flex-col gap-[0px]'>
                        <h4>Salud</h4>
                        <h3 className='font-bold'>Elevate the experience</h3>
                        <div className='flex flex-row gap-[10px] mt-[10px]'>
                            <Unclickbutton text={"BRAND IDENTITY"} />
                            <Unclickbutton text={"WEBDESIGN"} />
                            <Unclickbutton text={"BRAND CARE"} />
                            <Unclickbutton text={"BRAND STORY"} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sec4
