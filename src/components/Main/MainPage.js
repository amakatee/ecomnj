import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout'
import "./MainPage.css"
import 'boxicons'
import { useSelector } from 'react-redux'
import { productImages } from '../../store/features/productSlice'
import MainSliderFirst from './MainSliderFirst'



export default function MainPage() {
  const firstImg = useSelector(productImages)
  
  return (
    <div>
      <div className='main-page-header'>
        <div className='main-header-grid'>
          <div className='main-img-cont grid-col-span-4'>
             <img  src='https://i.pinimg.com/564x/60/bd/09/60bd09d9f25a27aa2ec9b9afcc675b78.jpg'></img>
             <Link className='main-header-btn' to='/products' > Shop Now</Link>
          </div>
          <div className='main-img-cont'>
             <img src='https://i.pinimg.com/564x/e0/b9/8a/e0b98a2809ac3eec8331995720dae658.jpg'></img>
          </div>
          <div className='main-img-cont'>
             <Link to='products/product/1'><img src={firstImg[0]}></img></Link>
          </div>
          
          
        </div>
        <Link   to='/products'>
        <box-icon className='arrow-button' color="#ffffff" name='arrow-back' rotate='180' ></box-icon>
          </Link>
      </div>
      <div className='main-cond'>
        <div>
          <h1 className='main-cond-title'>Easy Returns</h1>
          <p className='main-cond-desc'>FREE 14 DAY RETURNS ON REGULAR PRICED DOMESTIC ORDERS.</p>
        </div>
        <div>
          <h1 className='main-cond-title'>Sale Items</h1>
          <p className='main-cond-desc'>REGULAR PRICED ITEMS BOUGHT USING PROMOTIONAL CODES ARE ELIGIBLE FOR EXCHANGE OR STORE CREDIT. JEWELRY & SALE ITEMS ARE FINAL SALE. </p>
        </div>
        <div>
          <h1 className='main-cond-title'>Free Shippings</h1>
          <p className='main-cond-desc'>ENJOY FREE SHIPPING ON ALL ORDERS. NO EXTRA CHARGE AT CHECKOUT.</p>
        </div>
      </div>
   
      <div className='first-slider'>
        <Link to="/products" className='main-slider-desc' > SUMMER ESSENTIALS</Link>
        <MainSliderFirst firstImg={firstImg}/>
      </div>

     
        <Layout />
    </div>
  )
}
