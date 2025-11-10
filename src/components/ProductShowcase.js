import { cn } from '@/lib/utils'
import React from 'react'

const ProductShowcase = ({className=''}) => {
  return (
    <div className={cn('flex-grow', className)}>
      product showcase
    </div>
  )
}

export default ProductShowcase
