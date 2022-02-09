import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer";
import React, { useState } from "react";
import AddItem from "./components/AddItem";

function App() {
  const products = [
    {
      name: "IPhone X Max ",
      price: 99999,
      quantity: 0,
    },
    {
      name: "Redmi Note 10 ",
      price: 9999,
      quantity: 0,
    },
  ];
  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const reset = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const remove = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({ name: name, price: price, quantity: 0 });
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar 
        productList={productList}/>
      <main className="container mt-5">
        <AddItem addItem={addItem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          remove={remove}
        />
      </main>
      <Footer totalAmount={totalAmount} reset={reset} />
    </>
  );
}

export default App;
