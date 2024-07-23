import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Categories from '../pages/Categories'
import Products from '../pages/Products'
import ProductDetails from '../pages/ProductDetails'
import User from '../pages/User'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Error from '../pages/Error'
import ProtectedRoute from './ProtectedRoute'
import Cart from '../pages/Cart'

const RoutesPaths = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product-details/:productID?' element={<ProductDetails/>}/> 
         {/* ? show its an optional parameter means if productId isnt passed so it will rout on Product Details Page */}
         <Route path='/cart' element={<ProtectedRoute ><Cart/></ProtectedRoute>}/>
         <Route path='/user' element={<User/>}>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<SignUp/>}/>
         </Route>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default RoutesPaths
