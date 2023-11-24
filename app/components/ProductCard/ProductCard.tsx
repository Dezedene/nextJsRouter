import React from 'react'

import AddToCart from '../AddToCart'
// import styles from './ProductCard.module.css'


const ProductCard = () => {
  return (
    // css part
    // <div className={ styles.cardContainer }>
    // tailwind part
    <div className= 'p-4 my-3 bg-sky-300 text-white text-xl hover:bg-sky-500'>
      <AddToCart />
    </div>
  )
}

export default ProductCard