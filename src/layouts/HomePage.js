import Footer from '@/components/Footer'
import Brands from '@/components/home/Brands'
import EyeGlasses from '@/components/home/EyeGlasses'
import SocialTrends from '@/components/home/SocialTrends'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div className='text-textdark relative'>
      <Navbar className="fixed z-10"/>
      <div className='min-h-screen w-full pt-[128px]'>
        <img src={"/images/HomePagePhoto.png"} alt='chashma-bazaar'/>
        <div className='flex flex-col gap-2 py-10 items-center bg-neutral'>
          <p className='text-xl font-bold text-[#242424]'>Welcome to Chashma Bazaar</p>
          <p className='text-textdark text-sm'>Want eyeware as cool as you??</p>
          <p className='text-textdark text-sm'>You&apos;re at the right place!</p>
          <p className='text-textdark text-sm'>We&apos;re all set to shatter eyewear myths and make eyecare exciting! Explore our hand-picked collection of stylish and affordable eyewear to look sharp and see clear!</p>
          <Link href="/" className='py-2 px-12 bg-mid hover:bg-secondary text-white font-bold mt-8 rounded-lg'>Shop Now</Link>
        </div>
        <SocialTrends/>
        <EyeGlasses/>
        <Brands/>
        <div className='p-16 flex flex-col items-center bg-[#F9F9F9] mt-24 gap-2 w-full'>
          <p className='text-textsemidark font-semibold text-xl'>Our Lens Features At A Glance</p>
          <p className='text-textmenu text-sm text-center'>Our lenses are designed keeping your comfort & versatile lifestyle in mind.<br/>Get the best of features with your lenses here at EyeMyEye!</p>
          <div className='p-8 grid grid-cols-4 w-full gap-6'>
            <div className='flex flex-col justify-center items-center'>
              <div className='h-24 w-32 relative'><Image fill src={"/images/blocks_blue_light.png"} alt='blocks blue light'/></div>
              <p className='text-textsemidark text-sm font-thin'>Blocks Blue Lightt</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div className='h-24 w-32 relative'><Image fill src={"/images/eliminates_glare.png"} alt='eliminates glare'/></div>
              <p className='text-textsemidark text-sm font-thin'>Eliminates Glare</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div className='h-24 w-32 relative'><Image fill src={"/images/blocks_uv_light.png"} alt='blocks uv light'/></div>
              <p className='text-textsemidark text-sm font-thin'>Blocks UV Light</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div className='h-24 w-32 relative'><Image fill src={"/images/resists_scratches.png"} alt='Resists Scratches'/></div>
              <p className='text-textsemidark text-sm font-thin'>Resists Scratches</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div className='h-24 w-32 relative'><Image fill src={"/images/resists_fingerprint.png"} alt='Resists Fingerprints & Smudges'/></div>
              <p className='text-textsemidark text-sm font-thin'>Resists Fingerprints & Smudges</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div className='h-24 w-32 relative'><Image fill src={"/images/repels_water.png"} alt='Repels Water & Liquids'/></div>
              <p className='text-textsemidark text-sm font-thin'>Repels Water & Liquids</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div className='h-24 w-32 relative'><Image fill src={"/images/repels_dust.png"} alt='Repels Dust Particles'/></div>
              <p className='text-textsemidark text-sm font-thin'>Repels Dust Particles</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div className='h-24 w-32 relative'><Image fill src={"/images/reduces_color.png"} alt='Reduces Color & Image Distortion'/></div>
              <p className='text-textsemidark text-sm font-thin'>Reduces Color & Image Distortion</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage
