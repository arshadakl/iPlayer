
import React from 'react'
import { Card } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const carouselItems = [
    { title: "High Country", image: "path_to_high_country_image.jpg" },
    { title: "Crazy Rich Asians", image: "path_to_crazy_rich_asians_image.jpg" },
    { title: "Interview with the Vampire", image: "path_to_interview_with_vampire_image.jpg" },
    { title: "Canada's Drag Race: Canada vs The World", image: "path_to_drag_race_image.jpg" },
    { title: "Panorama", image: "path_to_panorama_image.jpg" },
    { title: "Panorama", image: "path_to_panorama_image.jpg" },
    { title: "Panorama", image: "path_to_panorama_image.jpg" },
    { title: "Panorama", image: "path_to_panorama_image.jpg" },
    { title: "Panorama", image: "path_to_panorama_image.jpg" },
    { title: "Panorama", image: "path_to_panorama_image.jpg" },
    { title: "Panorama", image: "path_to_panorama_image.jpg" },
]

function ScrollCards({ isPortrait, title }) {
    return (
        <div className='lg:w-10/12 mx-auto py-5  h-full ' >
            <div className='flex justify-between my-2'>
                <h1 className='font-reithb text-2xl  text-white'>{title}</h1>
                <h1 className='font-reithm  text-sm text-white hover:text-bbcpink cursor-pointer transition-all duration-150'>View all</h1>
            </div>
            <div className='w-full bg-black'>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full relative"
                >
                    <CarouselContent>
                        {carouselItems.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                                <div className="p-1">
                                    <Card className="rounded-none border-none bg-transparent">
                                        <div className={`relative aspect-[] ${isPortrait ? "aspect-[9/16]" : "aspect-[16/9]"}`}>
                                            <img
                                                className="w-full h-full object-cover"
                                                src={"https://ichef.bbci.co.uk/images/ic/1248x702/p0jg4gf9.jpg"}
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
                        <CarouselPrevious className="relative left-0 right-0 top-0 bottom-0 h-14 w-14 bg-white/50 border-none hover:bg-white/80" />
                        <CarouselNext className="relative left-0 right-0 top-0 bottom-0 h-14 w-14 bg-white/50 hover:bg-white/80 border-none" />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default ScrollCards