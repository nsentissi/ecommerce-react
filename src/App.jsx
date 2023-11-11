import './App.css'
import Header from './assets/components/Header'
import Products from './assets/components/Products'
import Navbar from './assets/components/Navbar'
import SingleProduct from './assets/components/singleProduct'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  

  return (
    <>
      <Navbar/>
      <Header/>
      <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/products/:id" element={<SingleProduct/>} />
      </Routes>
    </>
  )
}

export default App
