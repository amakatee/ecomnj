import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../store/features/productSlice'


export default function CartItemNav ({item}) {
  const dispatch = useDispatch()
  const increment = () => {
    dispatch(addToCart(item)) 
  }

  const decrement = () => {
    dispatch(removeFromCart(item.id))
  }

 
  return (
    <div>
        <div className='shopping-cart-item flex'>
        <div className='shopping-cart-img'>
            <img width="3rem" src={item.imageURL[0]}></img>
        </div>
        <div className='shopping-cart-desc flex '>
            <h1 className='total-h1'><span className='desc-span'>name: </span>{item.name}</h1>
            <h1 className='total-h1'><span className='desc-span'>price: </span> {item.price}</h1> 
            <h1 className='total-h1'><span className='desc-span'>quantit: </span>{item.quantity} </h1>
            <h1 className='total-h1'><span className='desc-span'>size: </span>{item.size} </h1>
            <h1 className='total-h1'><span className='desc-span'>color: </span>{item.color} </h1>
            <div className='flex'>
            <button onClick={increment} className='nav-remove-add'>+</button>
            <button onClick={decrement}  className='nav-remove-add'>-</button>
            </div>
           
        </div>
        </div> 
    </div>
  )
}
