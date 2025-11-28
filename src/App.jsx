import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Navbar from './Components/Navbar'
import { useEffect } from 'react'
const App = () => {

  const getLocation = async ()=>{
    navigator.geolocation.getCurrentPosition(pos=>{
const {latitude,longitude} = pos.coords
console.log(latitude,longitude)
    })
  }
  useEffect(()=>{
    getLocation()
  },[])


  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
