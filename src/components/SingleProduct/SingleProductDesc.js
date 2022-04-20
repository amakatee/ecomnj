import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/features/productSlice.js'

export default function SingleProductDesc({product}) {
    const {name, price, description, sizes, colors} = product
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [sizeValue, setSizeValue] = useState("S")
    const [colorValue, setColorValue] = useState()
    const dispatch = useDispatch()

    const tapSize = (size) => {
        setSizeValue(size)
    }

    const tapColor = (color) => {
        setColorValue(color)
    }

    const showDetail1 = () => {
        setShow1(show1 => !show1)
    }
    const showDetail2 = () => {
        setShow2(show2 => !show2)
    }
  
   
    const onAdd = () => {
        dispatch(addToCart({...product, size:sizeValue, color: colorValue}))
    }
    const canSave = [colorValue, sizeValue].every(Boolean)
   
 


  return (
 <>
    <div className='productDesc'>
        <div className='desc-header'>
            <h2 className='desc__title'>{name}</h2>
            <p className='desc__price'>₽ {price}</p>
        </div>
        
        <p className='desc-main'>{description}</p>
        <div className='color-size'>
            <div className='color__container column'>
                <h4 className='desc_icon_title'>Color: {colorValue} </h4>
            <div className='colorIcon__container' >
                {colors.map(color => (
                    <div onClick={() => tapColor(color)} className={color === colorValue ? "colorIcon active_color" : "colorIcon"} style={{backgroundColor:color}}></div>
                ))}
            </div>
                
            </div>
           
            <div className='size__container column'>
                <h4 className='desc_icon_title'>Size: {sizeValue} </h4>
            <div className='sizeIcon__container' >
               {sizes.map(size => (
                   <div onClick={() => tapSize(size)} className={size === sizeValue ? 'sizeIcon active_icon' : 'sizeIcon'}>{size}</div>
               ))}
    
            </div>
                
            </div>
        </div>
        <button disabled={!canSave} onClick={onAdd} className='desc__addToCart'>Add To Cart</button>
        <div className='desc__details'>
            <div className='first__collapse'>
                <h1 className='show_title' onClick={showDetail1}>Composition and care</h1>
                {show1 &&
                 <p className='detail_paragraph'>kdjnvfjksdnlvjsdlvjlsdje</p>}
               
            </div>
            <div className='second__collapse'>
                <h1 className='show_title' onClick={showDetail2}>Composition and care</h1>
                {show2 &&
                 <p className='detail_paragraph'>kdjnvfjksdnlvjsdlvjlsdje</p>}
            </div>

        </div>
        


       
    </div>
   
    
 </>
  )
}
