import React, { useContext } from 'react'
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import {Link} from 'react-router-dom'
import './Navbar.css'
import Logo from '../NavLinks/Logo';
import { ShopContext } from '../../Shop-Context/ShopContext';

export default function Navbar() {

  const {cartItems} = useContext(ShopContext)
  // console.log(favItems)

  return (
    <div className='navbar'>
      <Logo  className='logo' />
      <div className='cart-favourites'>
        <Link to='/favourites' className='favourites'>
          <BsFillHeartFill className='favourites'/>
        </Link>
          <Link to='/cart' className='cart-icon-container'>
            <BsFillCartFill className='cart'/>
            {cartItems.length > 0  
              &&
            <div className='itemCount'>{cartItems.length}</div>}
          </Link>
      </div>
    </div>
  )
}
