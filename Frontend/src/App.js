import React from "react";
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/cart"
import Payment from "./pages/payment"
import Help from "./pages/help"

function App() {
  return (
    <BRouter>
    <Routes>
    <Route exact path="/cart" element={<Cart />} />
    <Route exact path="/payment" element={<Payment />} />
    <Route exact path="/help" element={<Help />} />
    </Routes>
    </BRouter>
   
  );
}

export default App;
