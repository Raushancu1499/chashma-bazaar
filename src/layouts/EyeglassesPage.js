import Filter from '@/components/Filter'
import ProductShowcase from '@/components/ProductShowcase'
import React from 'react'

const EyeglassesPage = () => {
  return (
    <div>
      <img src='/images/eyeglasses_photo.png' alt='eyeglasses'/>
      <div className='flex'>
        <Filter/>
        <ProductShowcase/>
      </div>
    </div>
  )
}

export default EyeglassesPage
