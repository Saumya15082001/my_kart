import React from 'react';
import Product from './Product.js'

export default function ProductList(props) {
  return (
    props.productList.length >0 ?
    props.productList.map((product,i)=>{
        return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} index={i} remove={props.remove}/>
    }): <h1>No Products in Your Cart :( </h1>
  )
}
