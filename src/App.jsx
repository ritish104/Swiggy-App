import React from "react"; 
import NavBar from "./component/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Category from "./component/Category";
import Card from "./component/Card";
import Item from "./component/Item";
import { CartProvider } from "../src/component/CartContext"; 

// App component
function App() {
  return (
    <CartProvider> 
      <NavBar />
      <Category />
      <Card />
      <Item />
    </CartProvider>
  );
}

export default App;
