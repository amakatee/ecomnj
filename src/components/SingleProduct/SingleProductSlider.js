import React from 'react'
import { motion } from 'framer-motion'
import './SingleProduct.css'
import { useState, useEffect, useRef } from 'react'

export default function SingleProductSlider({product}) {
    const [width, setWidth] = useState(0)
    const carousel = useRef()
  

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])
  
   
  return (
     <div className='productSlider'>
         <motion.div ref={carousel} className='carousel' whileTap={{cursor: 'grabbing'}}>
             <motion.div
                drag='x' 
                dragConstraints={{ right: 0, left: -width}}
                className='inner-carousel'
                >
                 {product.imageURL.map(url => {
                     return (
                         <motion.div className='item' key={url}>
                             <div className='carrousel__imgCont'>
                                <img src={url}></img>
                             </div>
                         </motion.div>
                         
                     )
                 })}
                 
             </motion.div>
            
         </motion.div>
         

        

     </div>
    
  )
}
