'use client'
import React, { useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"  
import Link from 'next/link';
import Image from 'next/image';

const EyeGlasses = () => {

    const [eyeglasses, setEyeglasses] = useState([
        {name:"Seventh Street",mrp:12980, price:6989, image:"/trendingEyeGlasses/SeventhStreet.png"},
        {name:"Tommy Hilfiger",mrp:12290, price:6299, image:"/trendingEyeGlasses/TommyHilfiger.png"},
        {name:"IDEE",mrp:5980, price:2990, image:"/trendingEyeGlasses/IDEE.png"},
        {name:"Scott",mrp:11490, price:5990, image:"/trendingEyeGlasses/Scott.png"},
        {name:"Velocity",mrp:5089, price:2990, image:"/trendingEyeGlasses/Velocity.png"},
        {name:"Velocity",mrp:5540, price:2990, image:"/trendingEyeGlasses/Velocity2.png"},
        {name:"Miyami",mrp:10980, price:5490, image:"/trendingEyeGlasses/Miyami.png"},
    ]);

  return (
    <div className='w-full flex items-center flex-col gap-8 px-16 mt-24'>
      <h3 className='text-textsemidark font-semibold text-xl'>Trending Eyeglasses</h3>
      <Carousel opts={{align: "start",loop:true}} className='w-11/12'>
        <CarouselContent className="-ml-4">
            {eyeglasses.map((item, index)=>{
                return (
                  <CarouselItem
                    key={index}
                    className="basis-1/3 pl-4 flex flex-col text-textmid text-sm items-center"
                  >
                    <Link
                      href={"/"}
                      className="w-96 h-52 relative flex justify-center items-center overflow-hidden hover:bg-white"
                    >
                      <Image fill className='absolute hover:scale-110 transition-all duration-30' src={item?.image} alt={item?.name}/>
                    </Link>
                    <div className="flex flex-col text-lg text-textsemidark font-medium items-center justify-center">
                      {item?.name.toUpperCase()}
                      <div className="flex gap-2 items-center">
                        {item?.price}
                        <div className="text-textmid text-sm line-through">
                          MRP{item?.mrp}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
            })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default EyeGlasses
