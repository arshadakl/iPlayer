
import React from 'react'
import { BiMoviePlay } from "react-icons/bi";
import { Button } from '../ui/button';


function Hero({main_hero}) {
    return (
        <div className={` ${main_hero ? "md:h-[80vh] h-full" : "h-[50vh]"} container relative `}>
            <div className={`md:h-full  text-white flex md:flex-row flex-col-reverse  ${!main_hero &&"border-t-[1px] border-zinc-500/50"} `}>
                <div className="flex h-full justify-center md:flex-row flex-col md:items-start items-center  md:w-1/3 w-full">
                    <div className='md:h-3/4 h-full flex flex-col justify-center md:w-4/5 w-full md:text-start text-center  z-50 '>
                        <h1 className='font-reithb text-4xl '>The Jetty</h1>
                        <p className='text-sm font-reithl text-zinc-400'>What if the truth destroys you? Dark secrets spark shocking consequences in a sleepy town</p>
                        <h3 className='my-4 font-reithb'>What if the truth destroys you?</h3>
                        <div className='flex gap-3 md:justify-start justify-center w-full h-14'>
                            <Button className={`bg-white cursor-pointer rounded-none h-full flex items-center justify-center ${ main_hero ? "w-3/6":"w-full" } group hover:scale-110 font-reithb hover:bg-white/95 transition-all duration-200 text-black`}>
                                <span className='flex md:text-lg text-base items-center justify-center mx-auto group-hover:scale-[0.90] transition-transform duration-150'>
                                    <img src="/icons/play-bt.svg" className='w-10' />
                                    {main_hero ?  "Watch now" : "Explore collection"}
                                </span>
                            </Button>
                           { main_hero && <Button className={`bg-[#202224] text-white  cursor-pointer rounded-none h-full flex items-center justify-center w-2/6  group hover:scale-110 font-reithb hover:bg-white/95 transition-all duration-200 hover:text-black`}>
                                <span className='flex md:text-lg text-base  items-center gap-2 justify-center mx-auto group-hover:scale-[0.90] transition-transform duration-150'>
                                    <BiMoviePlay size={24} />
                                    Trailer
                                </span>
                            </Button>}


                        </div>
                    </div>

                </div>
                <div className=' md:w-2/3 w-full mask h-full relative object-cover'>
                    <img className='w-full mx-auto' src="https://ichef.bbci.co.uk/images/ic/1248x702/p0jg4gf9.jpg" alt="" />
                    <div className='bottomShad w-full absolute bottom-0  bg-black h-10 md:hidden'></div>
                   {!main_hero && <div className='mask-y w-full absolute bottom-0 rotate-180 bg-black h-28'></div>}
                </div>
                {main_hero && <div className='absolute  bottom-5 hidden md:block left-0 w-full bottomShad pt-12 bg-red-100'>
                    <div className="flex justify-center gap-3">
                        {Array(4).fill().map((_, index) => (
                            <div key={index} className="border-[3px] border-transparent hover:border-white transition-all duration-200">
                                <img
                                    className="mx-auto w-52"
                                    src="https://ichef.bbci.co.uk/images/ic/1248x702/p0jg4gf9.jpg"
                                    alt={`Image ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>}
            </div>

        </div>
    )
}

export default Hero