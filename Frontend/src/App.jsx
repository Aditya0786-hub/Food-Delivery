import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Login from './components/login/Login'
import PlaceOrder from './pages/place order/PlaceOrder'
import Footer from './components/Footer/Footer'

const App = () => {

  const[showlogin,setshowlogin] = useState(false);

  return (
    <div className='app'>
      {!showlogin?<></>:<Login setshowlogin={setshowlogin}/>}
      <Navbar setshowlogin={setshowlogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

