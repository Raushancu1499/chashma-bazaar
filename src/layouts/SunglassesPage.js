import Filter from '@/components/Filter'
import ProductShowcase from '@/components/ProductShowcase'
import React from 'react'

const SunglassesPage = () => {
  return (
    <div>
      <img src='/images/sunglasses_photo.png' alt='sunglasses'/>
      <div className='flex'>
        <Filter/>
        <ProductShowcase/>
      </div>
    </div>
  )
}

export default SunglassesPage
