import './Products.css'
import ProductItem from './ProductItem'
import { allProductsFiltered } from '../../store/features/productSlice'
import { useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'



export default function Products() {
  const products = useSelector(allProductsFiltered)
 
 
  return (
    <div>
      
      <motion.div layout className='carts'>
        <AnimatePresence>
        { products.map(product => {
         return <ProductItem key={product.id} id={product.id} imageURL={product.imageURL}  product={product}  name={product.name} price={product.price} />
        })}
        </AnimatePresence>
       
      </motion.div>

      
       
    </div>
  )
}