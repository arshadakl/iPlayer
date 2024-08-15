
import React, { useEffect, useState } from 'react'
import { Card } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Movie_API } from '@/api/Api'
import { filterMoviesByGenre } from '@/utils/Services'

function ScrollCards({ isPortrait, title,genres }) {
    const [movies,setMovies] = useState([])
    const getMovie = async()=>{
        const Data = await Movie_API()
        console.log(Data);
        
        setMovies(filterMoviesByGenre(Data,genres))
    }
    useEffect(() => {
        getMovie()
    }, [])
    
    return (
        <div className={`lg:w-10/12 mx-auto md:py-5 ${title=="New & Trending" && "py-5" } h-full `} >
            <div className='flex justify-between my-2 md:mx-0 mx-3'>
                <h1 className='font-reithb md:text-2xl text-xl  text-white'>{title}</h1>
                <h1 className='font-reithm  md:text-sm text-xs text-white hover:text-bbcpink cursor-pointer transition-all duration-150'>View all</h1>
            </div>
            <div className='w-full bg-black'>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full relative"
                >
                    <CarouselContent className="mx-1 font-reithm">
                        {movies && movies.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/3 basis-2/4 lg:basis-1/4 hover:scale-105 transition-all duration-200">
                                <div className="p-1 ">
                                    <Card className="rounded-none border-none bg-transparent ">
                                        <div className={`relative border-[3px] border-transparent hover:border-white transition-all duration-200  aspect-[] ${isPortrait ? "aspect-[9/16]" : "aspect-[16/9]"}`}>
                                            <img
                                                className="w-full h-full object-cover"
                                                src={item.thumbnail}
                                                alt={item.title}
                                            />
                                        </div>
                                    </Card>
                                    <p className='text-white mt-2 text-sm'>{item.title}</p>
                                    
                                </div>
                                
                            </CarouselItem>
                        ))}
                    </CarouselContent>





                    <div className="absolute right-4 top-[50%] flex space-x-2">
                        <CarouselPrevious className="relative left-0 right-0 top-0 bottom-0 md:h-14 md:w-14  bg-white/50 border-none hover:bg-white/80" />
                        <CarouselNext className="relative left-0 right-0 top-0 bottom-0 md:h-14 md:w-14 bg-white/50 hover:bg-white/80 border-none" />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default ScrollCards