import { Separator } from '@radix-ui/react-menubar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16 mb-8 bg-dark text-textwhite px-24 py-8 text-2xl flex flex-col gap-6'>
      <div className='flex items-center'>
        <div className='relative w-40 h-20'><Image fill className='absolute' alt='chashma bazaar' src={"/images/chashmabazaar_logo_white.png"}/></div>
        <p>Chashma Bazaar</p>
      </div>
      <Link href={"/"}>Home</Link>
      <Link href={"/"}>About</Link>
      <Link href={"/"}>Terms and Conditions</Link>
      <Link href={"/"}>Shipping and return policy</Link>
      <Link href={"/"}>FAQ</Link>
      <div className='w-full h-0.5 bg-green-900'></div>
      <p>	&#169; 2023 Chashma Bazaar. All rights reserved.</p>
    </div>
  )
}

export default Footer
