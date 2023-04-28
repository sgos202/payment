import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductsTable from "./Components/ProductsTable";
import Checkout from "./Components/Checkout/Checkout";
import SaleSummary from "./Components/SaleSummary";
import PaymentRecieved from "./Components/PaymentReceived";
import NavBar from "./NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const initialProducts = [
  { id: 1, name: "Product 1", price: 9.99 },
  { id: 2, name: "Product 2", price: 14.99 },
  { id: 3, name: "Product 3", price: 19.99 }
];

const App = () => {
  const [products, setProducts] = useState([...initialProducts]);
  const [cartItems, setCartItems] = useState([]);

  const addToSale = (product) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (itemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        quantity: updatedItems[itemIndex].quantity + 1
      };
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const updateCart = (newCartItems) => {
    setCartItems(newCartItems);
  };

  return (
    <div className="app-container row">
      <Router>
      <NavBar firstName="John" lastName="Doe" />
        <div className="main-container pt-4 pr-2 my-row"> {/* Add a class name */}
          <Switch>
            <Route exact path="/">
              <div className="row col-lg-12">
                <div className="col-lg-6 col-md-9 offset-md-2 offset-lg-2 pr-3">
                  <ProductsTable products={products} addToSale={addToSale} />
                </div>
                <div className="col-lg-4 col-md-9 pl-3 pr-0 offset-lg-0 offset-md-2">
                  <Checkout products={cartItems} updateCart={updateCart} />
                </div>
              </div>
            </Route>
            <Route exact path="/sales-summary">
              <div className="row col-lg-12">
                <div className="col-lg-6 col-md-9 offset-md-2 offset-lg-2 pr-3">
                  <SaleSummary cartItems={cartItems} />
                </div>
                <div className="col-lg-4 col-md-9 pl-3 pr-0 offset-lg-0 offset-md-2">
                  <PaymentRecieved
                    products={cartItems}
                    setCartItems={setCartItems}
                    allProducts={initialProducts}
                  />
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

//API LOGIC TODO
//###################
// export default App;

// import React, { useState, useEffect } from 'react';

// function App() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       const response = await fetch('https://otx0e1z2lg.execute-api.us-west-2.amazonaws.com/products');
//       const data = await response.json();
//       setProducts(data);
//     }
//     fetchProducts();
//   }, []);

//   async function handleCreateProduct(product) {
//     const newProduct = await createProduct(product);
//     setProducts([...products, newProduct]);
//   }

//   async function handleCreateSale(sale) {
//     const newSale = await createSale(sale);
//     // update state or perform other actions with the new sale data
//   }

//   return (
//     <div>
//       {/* render components that use the products state */}
//     </div>
//   );
// }