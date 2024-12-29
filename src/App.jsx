import Navbar from "./components/Navbar";
import {Routes, Route,BrowserRouter,Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import Deals from "./pages/Deals";
import { useState,useEffect } from "react";
import Details from "./pages/Details";
import Favorate from "./pages/Favorate";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import supabase from '../src/supabaseClient'
import ConfirmEmailPage from "./pages/ConfirmEmailPage";

export default function App(){
  const [searchItem, setSearchItem] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (sessionData?.session) {
        setUser(sessionData.session.user);
      }
    };

    checkSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        setUser(session.user);
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
      }
    });

    return () => {
      const authListener = supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
          setUser(session.user);
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
        }
      });
      
      return () => {
        authListener.subscription.unsubscribe();
      };
    };
  }, []);



  return(
    <>
      <BrowserRouter>
        <Navbar setSearchItem={setSearchItem}/>
        <Routes>
          {user ? <Route path='/' element={<Home setSearchItem={setSearchItem} />} /> : <Route path='/' element={<Login />} />}
          <Route path='/*' element={<Error />} />
          <Route path='/login' element={user ? <Navigate to="/profile" /> : <Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/favorate' element={<Favorate />} />
          <Route path='/confirmEmail' element={<ConfirmEmailPage />} />
          <Route path='/signup' element={user ? <Navigate to="/profile" /> : <SignUp />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/details/:id' element={<Details setSearchItem={setSearchItem}/>} />
          <Route path='/deals' element={<Deals searchItem={searchItem} setSearchItem={setSearchItem}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}