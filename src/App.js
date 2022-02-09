import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js';
import Footer from './components/Footer';
import React,{useState} from 'react';

function App() {
  const products=[
    {
      name: "IPhone X Max ",
      price: 99999,
      quantity:0,
    },
    {
      name: "Redmi Note 10 ",
      price: '9999',
      quantity:0,
    }
  ]
  let [productList , setProductList] = useState(products)

  const incrementQuantity=(index)=>{
    let newProductList=[...productList]
    newProductList[index].quantity++
    setProductList(newProductList);
  }
  const decrementQuantity=(index)=>{
    let newProductList=[...productList]
    newProductList[index].quantity >0 ? newProductList[index].quantity-- :newProductList[index].quantity= 0
    setProductList(newProductList);
  }

  return (
    <>
        <Navbar/>
        <main className='container mt-5'>
        <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/> 
        </main>
        <Footer/>
    
    </>
  );
}

export default App;
