import React, {useState} from 'react'
import 'boxicons'
import "./Navbar.css"
import { Link} from 'react-router-dom' 
import { useDispatch, useSelector } from 'react-redux'
import { showCart, showMenu, quantity } from '../../store/features/productSlice'
import { setShowCart, toggleMenu } from '../../store/features/productSlice'
import { filterProducts } from '../../store/features/productSlice'
import ShoppingCartNav from '../ShoppingCart/ShoppingCartNav'




export default function Navbar() {
    const quantit = useSelector(quantity)
    const showCartBool = useSelector(showCart)
    const showMenuBool = useSelector(showMenu)
    const dispatch = useDispatch()

    const toggleMenuButton = () => {
        dispatch(toggleMenu())
    }
    const showCartButton = () => {
        dispatch(setShowCart())
    }
    
  
 
 
  return (
    <>
    {showCartBool &&  <ShoppingCartNav showCartButton={showCartButton}/>}
    <div className='top-navigation '>

    <h1 id='logo'><Link to='/'>nj</Link></h1>
     <ul className='left-menu flex'>
        <li onClick={showCartButton} className='nav-icon'>
             <Link  to='#'><box-icon name='shopping-bag'></box-icon></Link>
             <span>({quantit})</span>
        </li> 
    </ul>
       
     </div>
 
    <header className='flex entire-navigation'>
      <div></div>
      <button onClick={toggleMenuButton} className='mobile-nav-toggle'
         aria-controls='primary-navigation'
         aria-expanded={showMenuBool}>
            <span className='sr-only'>Menu</span>
        </button>
      <nav className='nav'>
          <ul data-visible={showMenuBool} id="primary-navigation" className='primary-navigation flex'>
              <li className='active'>
                  <Link to="/products" onClick={() => dispatch(filterProducts(null))}>Shop All</Link>
              </li>
              <li  className='active'>
                  <Link to="/products" onClick={() => dispatch(filterProducts('jewels'))} >Jewels</Link>
              </li>
              <li className='active'>
                  <Link to="/products" onClick={() => dispatch(filterProducts('shoes'))} >Shoes</Link>
              </li>
              <li  className='active'>
                  <Link to="/products" onClick={() => dispatch(filterProducts('dress'))}  >Dresses</Link>
              </li>
          </ul>
         
      </nav>
      {showMenuBool && <div onClick={toggleMenuButton} className='overlay'></div>}
    
      
      </header>


     
     
      

    </>
  )
}