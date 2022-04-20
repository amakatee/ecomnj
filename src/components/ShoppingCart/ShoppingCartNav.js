import React from 'react'
import {  cartItems, quantity } from '../../store/features/productSlice'
import "./ShoppingCart.css"
import { useSelector } from 'react-redux'
import CartItemNav from './CartItemNav'
import { Link } from 'react-router-dom'



export default function ShoppingCartNav({showCartButton}) {
  const cartProducts = useSelector(cartItems)
  const totalQuantity = useSelector(quantity)

  console.log(cartProducts)
  const total = cartProducts.reduce((sum, item) => {
    return sum + item.totalPrice * item.quantity
  }, 0)
  const shipping = total > 10000 || total === 0 ? 0 : 200
  const completeTotal = total + shipping


  return (
    <div>
        <div className="overlay"></div>
        <div className="nav__shopping-cart">
              <div  className='nav-shopping-cart grid'>
                <div onClick={showCartButton} className='x-button'> <box-icon name='x'></box-icon></div>
             
               
  {totalQuantity === 0 ? <div> Cart is currently Empty !</div> : 
   <div className='shopping-cart-slide grid'>
    
      
   {cartProducts.map(item => {
     return <CartItemNav key={item.id} item={item} />
   } )}
   
  
</div> }
            
 
 
  <div className='shopping-cart-total'>
      
      <h1 className='cart-total total-h1'><span className='desc-span'>Price:</span>{total} </h1>
      <h1 className='cart-total total-h1'><span className='desc-span'>Shipping: </span>{shipping}</h1>
      <h1 className='total total-h1'><span className='desc-span'>Total: </span>{completeTotal}</h1>
      <div className='flex checkout-btn-cont'>
     
      </div>
      <div><Link onClick={showCartButton} to="/products" className='checkout-btn' >Check out</Link></div>
  </div>
</div>


        </div>
        </div>
  )
}
