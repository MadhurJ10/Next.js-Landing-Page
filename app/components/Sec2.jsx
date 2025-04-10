import React from 'react'
import Button from './Button'


const Sec2 = () => {
    return (
        <div className='px-[50px] py-[40px] flex flex-col gap-[20px]'>
            <p className='text-2xl leading-[30px] '>NiceAtNoon is een fijnschalige design studio voor merken die de <br />
                hoofden en de harten van hun publiek willen veroveren. Geobsedeerd <br />
                door de magie van design, geloven we sterk in de kracht van <br />
                'story-driven design'; het geeft jouw unieke merkverhaal <br />
                geloofwaardigheid, zeggingskracht en een niet te negeren <br />
                aantrekkingskracht. Raak en verbind jouw doelgroepen als nooit <br />
                tevoren!</p>
            <Button inner={"Click Me"} />
            <div className='flex flex-col items-center gap-[50px]'>
                <h6>Cases</h6>
                <div className='flex flex-col items-center'>
                    <h1 className='font-[apercumid] text-[110px] leading-[90px] font-semibold'>HEAD TURNING </h1>
                    <h1 className='font-[apercumid] text-[110px] leading-[90px] font-semibold'>PROJECTS</h1>
                    {/* <div className='w-[20px] h-[70px] bg-amber-300'>hdbhbkj</div> */}
                    <h4 className='bg-[#F4C727] px-[20px] py-[12px] rounded-2xl mt-[-15px] ml-[400px] rotate-[-18deg]'>Gotta see 'm all</h4>
                </div>
                <div className='flex justify-end mt-[-60px] px-[40px] ml-[84%]'>
                    <Button inner={"All Projects"} />
                </div>
            </div>
        </div>
    )
}

export default Sec2
