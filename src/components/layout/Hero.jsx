
import React from 'react'
import { Button } from '../ui/button'
import { BiMoviePlay } from "react-icons/bi";


function Hero() {
    return (
        <div className='h-screen container'>
            <div className='h-full text-white flex   '>
                <div className="flex justify-center items-start  w-1/3">
                    <div className='h-3/4 flex flex-col justify-center w-4/5'>
                        <h1 className='font-reithb text-4xl '>The Jetty</h1>
                        <p className='text-sm font-reithl text-zinc-400'>What if the truth destroys you? Dark secrets spark shocking consequences in a sleepy town</p>
                        <h3 className='my-4 font-reithb'>What if the truth destroys you?</h3>
                        <div className='flex gap-3 justify-start w-full h-14'>

                            <Button className="bg-white cursor-pointer rounded-none h-full flex items-center justify-center w-3/6 group hover:scale-110 font-reithb hover:bg-white/95 transition-all duration-200 text-black">
                                <span className='flex text-lg items-center justify-center mx-auto group-hover:scale-[0.90] transition-transform duration-150'>
                                    <img src="/icons/play-bt.svg" className='w-10' />
                                    Watch now
                                </span>
                            </Button>
                            <Button className="bg-[#202224] text-white  cursor-pointer rounded-none h-full flex items-center justify-center w-2/6  group hover:scale-110 font-reithb hover:bg-white/95 transition-all duration-200 hover:text-black">
                                <span className='flex text-lg items-center gap-2 justify-center mx-auto group-hover:scale-[0.90] transition-transform duration-150'>
                                <BiMoviePlay size={24} />
                                    Trailer
                                </span>
                            </Button>

                    
                        </div>
                    </div>

                </div>
                <div className='w-2/3 mask'>
                    <img className='w-full mx-auto' src="https://ichef.bbci.co.uk/images/ic/1248x702/p0jg4gf9.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero