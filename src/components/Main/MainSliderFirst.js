import { motion } from 'framer-motion'
import React from 'react'
import { useRef, useEffect, useState } from 'react'


export default function MainSliderFirst({firstImg}) {
    const sliderImageArr= [firstImg[1], firstImg[2], firstImg[3],  firstImg[4],  firstImg[5],  firstImg[6]]
    const [width, setWidth] = useState(0)
    const carousel = useRef()
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
      
    },[])
  return (
    <div>
        <motion.div ref={carousel} className='main-carousel'>
            <motion.div 
             drag='x'
             dragConstraints={{right : 0, left: -width}}
             className='main-inner-carousel'>
                {sliderImageArr.map(img => {
                    return (
                        <motion.div className='main-item'>
                            <div key={img} className='main-img-cont'>
                              <img src={img}></img>
                            </div>
                        </motion.div>
                        
                    )
                })}
            </motion.div>
        </motion.div>

    </div>
  )
}
