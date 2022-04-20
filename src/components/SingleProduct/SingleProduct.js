import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import "./SingleProduct.css"
import SingleProductDesc from './SingleProductDesc'
import SingleProductSlider from './SingleProductSlider'


export default function SingleProduct() {
   const { productId } = useParams()
   const product = useSelector(state => state.products.products.find(product => product.id === Number(productId)))




  return (
      <>
      <div className='sing'>
        <div className='sing-slider'>
         <SingleProductSlider product={product} />
         </div>
         <div className='sing-desc'>
         <SingleProductDesc product={product} />
         </div>
      </div>
   

   </>
     
  )
}
