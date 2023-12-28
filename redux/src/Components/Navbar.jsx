import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Navbar = () => {
  
  const cartItems=useSelector((state)=>state.cart)

  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
        <h3>Redux Practice</h3>
        <div style={{display:"flex",justifyContent:"space-around",width:"100px"}}>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
        </div>
        <div>
            <span>
               Added Item's: {cartItems.length}
            </span>
        </div>

    </div>
  )
}
