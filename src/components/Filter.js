'use client'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"  
import Image from 'next/image'
import MultiRangeSlider from "multi-range-slider-react";
import { Checkbox } from "@/components/ui/checkbox"

const Filter = ({className}) => {

    const [priceFilter, setPriceFilter] = useState({
        minValue:100,
        maxValue:20000,
        min:100,
        max:20000
    });
    const styleOptions = [
        {style:'Full Frame', img:'/images/styles/full_frame.svg', value:'full_frame'},
        {style:'Half Frame', img:'/images/styles/half_frame.svg', value:'half_frame'},
        {style:'Rimless', img:'/images/styles/rim_less.svg', value:'rim_less'},
    ];
    const shapeOptions = [
        {shape:'Aviator', img:'/images/shapes/aviator_shape.svg', value:'aviator_shape'},
        {shape:'Cateye', img:'/images/shapes/cat_eye_shape.svg', value:'cat_eye_shape'},
        {shape:'Clubmaster', img:'/images/shapes/club_master_shape.svg', value:'club_master_shape'},
        {shape:'Hexagon', img:'/images/shapes/hexagon_shape.svg', value:'hexagon_shape'},
        {shape:'Oval', img:'/images/shapes/oval_shape.svg', value:'oval_shape'},
        {shape:'Rectangle', img:'/images/shapes/rectangle_shape.svg', value:'rectangle_shape'},
        {shape:'Round', img:'/images/shapes/round_shape.svg', value:'round_shape'},
        {shape:'Square', img:'/images/shapes/sqaure_shape.svg', value:'sqaure_shape'},
        {shape:'Wayfarer', img:'/images/shapes/way_farer_shape.svg', value:'way_farer_shape'},
    ];
    const colorsOptions = [
        { name: "Black", colorClass: "bg-black", value: "black" },
        { name: "Blue", colorClass: "bg-blue-500", value: "blue" },
        { name: "Brown", colorClass: "bg-yellow-800", value: "brown" },
        { name: "Floral", colorClass: "bg-gradient-to-br from-pink-400 to-purple-600", value: "floral" },
        { name: "Gold", colorClass: "bg-yellow-500", value: "gold" },
        { name: "Green", colorClass: "bg-green-500", value: "green" },
        { name: "Grey", colorClass: "bg-gray-500", value: "grey" },
        { name: "Gunmetal", colorClass: "bg-gray-700", value: "gunmetal" },
        { name: "Maroon", colorClass: "bg-red-800", value: "maroon" },
        { name: "Multicolor", colorClass: "bg-gradient-to-br from-green-400 to-blue-500", value: "multicolor" },
        { name: "Mustard", colorClass: "bg-yellow-400", value: "mustard" },
        { name: "Peach", colorClass: "bg-pink-300", value: "peach" },
        { name: "Pink", colorClass: "bg-pink-500", value: "pink" },
        { name: "Purple", colorClass: "bg-purple-600", value: "purple" },
        { name: "Red", colorClass: "bg-red-500", value: "red" },
        { name: "Silver", colorClass: "bg-gray-300", value: "silver" },
        { name: "Tortoise", colorClass: "bg-amber-800", value: "tortoise" },
        { name: "Transparent", colorClass: "bg-white border border-gray-300", value: "transparent" },
        { name: "Turquoise", colorClass: "bg-teal-400", value: "turquoise" },
        { name: "White", colorClass: "bg-white border", value: "white" },
        { name: "White Transparent", colorClass: "bg-white border border-dashed", value: "whitetransparent" },
        { name: "Wine", colorClass: "bg-red-900", value: "wine" },
        { name: "Wooden", colorClass: "bg-yellow-700", value: "wooden" },
        { name: "Yellow", colorClass: "bg-yellow-500", value: "yellow" },
    ];
    const [showMoreOptions, setShowMoreOptions] = useState({
        color:false, 
        collection:false,
    });
    const materialOptions = [
        {name:'Acetate', value:'acetate'},
        {name:'Metal', value:'metal'},
        {name:'Plastic', value:'plastic'},
        {name:'Wood', value:'wood'},
    ];
    const collectionOptions = [
        { name: "Bamboo Eyeglasses", value: "bamboo_eyeglasses" },
        { name: "Color Blind Glasses", value: "color_blind_glasses" },
        { name: "Color Changing Frames", value: "color_changing_frames" },
        { name: "Computer Glasses", value: "computer_glasses" },
        { name: "Economy Eyeglasses", value: "economy_eyeglasses" },
        { name: "Flash Sale", value: "flash_sale" },
        { name: "Kids Eyeglasses", value: "kids_eyeglasses" },
        { name: "Play Eyeglasses", value: "play_eyeglasses" },
        { name: "Premium Eyeglasses", value: "premium_eyeglasses" },
        { name: "Reading Glasses", value: "reading_glasses" },
    ];

  return (
    <div className={cn('min-w-80', className)}>
      <h1 className='text-black text-xl p-4 border-b font-medium'>Filter</h1>
      <Accordion type="multiple" collapsible defaultValue={['shop','range','style', 'shape', 'colors', 'material', 'collections']}>
        <AccordionItem value="shop">
            <AccordionTrigger className='p-4'>SHOP FOR</AccordionTrigger>
            <AccordionContent className='px-4 grid grid-cols-3 gap-2 text-textmid'>
            <button className='w-full py-1 border rounded hover:border-primary m-2 flex flex-col justify-center items-center gap-2'>
                <div className='w-6 h-6 relative'><Image className='absolute' fill alt='men' src={'/images/man_icon.svg'}/></div>
                <p>Men</p>
            </button>
            <button className='w-full py-1 border rounded hover:border-primary m-2 flex flex-col justify-center items-center gap-2'>
                <div className='w-6 h-6 relative'><Image className='absolute' fill alt='women' src={'/images/woman_icon.svg'}/></div>
                <p>Women</p>
            </button>
            <button className='w-full py-1 border rounded hover:border-primary m-2 flex flex-col justify-center items-center gap-2'>
                <div className='w-6 h-6 relative'><Image className='absolute' fill alt='kids' src={'/images/child_icon.svg'}/></div>
                <p>Kids</p>
            </button>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="range">
            <AccordionTrigger className='p-4'>PRICES</AccordionTrigger>
            <AccordionContent className='px-4 py-8 text-textmid'>
                <p>{`$${priceFilter.minValue} - ${priceFilter.maxValue}`}</p>
                <MultiRangeSlider style={{border:"none", boxShadow:'none',padding:'15px 10px'}} min={100} max={20000} step={50} minValue={priceFilter.min} maxValue={priceFilter.max} onInput={setPriceFilter} label={false} ruler={false} barLeftColor={"#d5d5d5"} barRightColor={"#d5d5d5"} barInnerColor={`#04fbd4`}/>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="style">
            <AccordionTrigger className='p-4'>STYLES</AccordionTrigger>
            <AccordionContent className='px-4 grid grid-cols-3 gap-2 text-textmid'>
                {styleOptions.map((style, index)=>{
                    return (
                        <button key={index} className='w-full py-1 border rounded hover:border-primary m-2 flex flex-col justify-center items-center gap-2'>
                            <div className='w-11 h-6 relative'><Image className='absolute' fill alt={style.value} src={style.img}/></div>
                            <p>{style.style}</p>
                        </button>
                    )
                })}
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="shape">
            <AccordionTrigger className='p-4'>SHAPES</AccordionTrigger>
            <AccordionContent className='px-4 grid grid-cols-3 gap-2 text-textmid'>
                {shapeOptions.map((shape, index)=>{
                    return (
                        <button key={index} className='w-full py-1 border rounded hover:border-primary m-2 flex flex-col justify-center items-center gap-2'>
                            <div className='w-11 h-6 relative'><Image className='absolute' fill alt={shape.value} src={shape.img}/></div>
                            <p>{shape.shape}</p>
                        </button>
                    )
                })}
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="colors">
            <AccordionTrigger className='p-4'>FRAME COLORS</AccordionTrigger>
            <AccordionContent className='px-4 flex flex-col gap-2 pl-8 text-textmid'>
                {colorsOptions.map((color, index) => {
                    if(showMoreOptions.color || index < 5){
                        return (
                            <label key={index} className="flex items-center space-x-2 cursor-pointer">
                                <Checkbox className='border-gray-400'/>
                                <span className={`w-6 h-6 rounded-full ${color.colorClass} shadow-md`}/>
                                <span className="text-sm text-gray-700">{color.name}</span>
                            </label>
                        )
                    }
                })}
                <button onClick={()=>{setShowMoreOptions((prev)=>{return {...prev, color:!prev.color}})}} className='text-blue-400 hover:underline'>{showMoreOptions.color?"- Show less":"+ Show more"}</button>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="material">
            <AccordionTrigger className='p-4'>Material</AccordionTrigger>
            <AccordionContent className='px-4 flex flex-col gap-2 pl-8 text-textmid'>
                {materialOptions.map((material, index) => {
                    return (
                        <label key={index} className="flex items-center space-x-2 cursor-pointer">
                            <Checkbox className='border-gray-400'/>
                            <span className="text-sm text-gray-700">{material.name}</span>
                        </label>
                    )
                })}
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="collections">
            <AccordionTrigger className='p-4'>Collections</AccordionTrigger>
            <AccordionContent className='px-4 flex flex-col gap-2 pl-8 text-textmid'>
                {collectionOptions.map((collection, index) => {
                    if(showMoreOptions.collection || index < 5){
                        return (
                            <label key={index} className="flex items-center space-x-2 cursor-pointer">
                                <Checkbox className='border-gray-400'/>
                                <span className="text-sm text-gray-700">{collection.name}</span>
                            </label>
                        )
                    }
                })}
                <button onClick={()=>{setShowMoreOptions((prev)=>{return {...prev, collection:!prev.collection}})}} className='text-blue-400 hover:underline'>{showMoreOptions.collection?"- Show less":"+ Show more"}</button>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
    </div>
  )
}

export default Filter
