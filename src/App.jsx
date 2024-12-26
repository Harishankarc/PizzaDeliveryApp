import Navbar from "./components/Navbar";
import {Routes, Route,BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import Deals from "./pages/Deals";
import { useState } from "react";
import Details from "./pages/Details";
import Favorate from "./pages/Favorate";
import Cart from "./pages/Cart";
export default function App(){
  const [searchItem, setSearchItem] = useState('');
  return(
    <>
      <BrowserRouter>
        <Navbar setSearchItem={setSearchItem}/>
        <Routes>
          <Route path='/' element={<Home setSearchItem={setSearchItem}/>} />
          <Route path='/*' element={<Error />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/favorate' element={<Favorate />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/details/:id' element={<Details setSearchItem={setSearchItem}/>} />
          <Route path='/deals' element={<Deals searchItem={searchItem} setSearchItem={setSearchItem}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}