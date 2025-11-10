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

const Brands = () => {

    const [brands, setBrands] = useState([
        {name:"RayBan", image:"/brands/Rayban.png"},
        {name:"Oakley", image:"/brands/Oakley.png"},
        {name:"Vogue", image:"/brands/Vogue.png"},
        {name:"Gucci", image:"/brands/Gucci.png"},
        {name:"Prada", image:"/brands/Prada.png"},
        {name:"MontBlanc", image:"/brands/MontBlanc.png"},
    ])

  return (
    <div className='w-full flex items-center flex-col gap-8 px-16 mt-24'>
      <h3 className='text-textsemidark font-semibold text-xl'>Popular Brands</h3>
      <Carousel opts={{align: "start",loop:true}} className='w-11/12'>
        <CarouselContent className="-ml-4">
            {brands.map((item, index)=>{
                return (
                  <CarouselItem
                    key={index}
                    className="basis-1/3 pl-4 flex flex-col text-textmid text-sm items-center"
                  >
                    <Link
                      href={"/"}
                      className="w-72 h-60 relative flex justify-center items-center overflow-hidden hover:bg-white"
                    >
                      <Image fill className='absolute' src={item?.image} alt={item?.name}/>
                    </Link>
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

export default Brands
