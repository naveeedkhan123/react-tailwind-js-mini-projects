import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Product from "./components/pages/Product";
import Contact from "./components/pages/Contact";
import RootLayout from "./components/common/RootLayout";
import Login from "./components/pages/Login";
import Error404 from "./components/pages/Error404";
import ProductDetail from "./components/pages/ProductDetail";
import ProductApi from "./components/pages/ProductApi";

function App () {
  return (
    <>
    <BrowserRouter>
       <Routes>

<Route element={<RootLayout/>}>
        
          <Route path='/' element = {<Home/>} />

          <Route path='/about-us' element = {<About/>} />

          <Route path='/product' element = {<Product/>} />

   <Route path='/contact' element = {<Contact/>} />

   <Route path="*" element = {<Error404/>} />

   <Route path="/product-api" element = {<ProductApi/>} />

<Route path='/product-details/:pid' element= {<ProductDetail/>} />
<Route path='/product-details/api/:pid' element= {<ProductDetail apiProduct/>} />

    </Route>

     <Route path='/login' element = {<Login/>} />

       </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App
