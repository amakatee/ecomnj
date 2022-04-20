import React from 'react'
import './Products.css'
import formatCurrency from '../../utils/FormatCurrency'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'



export default function ProductItem(props) {
   const { name, price, id, imageURL} = props
 



  return (
    <motion.div 
     animate={{ opacity: 1 }}
     initial={{ opacity: 0 }}
     exit={{ opacity: 0}}
     layout>
     <Link to={`product/${id}`}>
        <div className='cart'>
        
            <div className='img-container'>
               <img src={imageURL[0]}></img>
                
                </div>
            <div>
                <div className='carts-description flex'>
                 
                     <h4 className='cart-name'>{name}</h4>
                     <h4 className='cart-price'>₽ {price}</h4>
                    
                </div>
            </div>
        </div>
        </Link>
    </motion.div>
  )
}