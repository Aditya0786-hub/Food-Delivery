import React, { useContext, useState } from 'react'
import { assets } from "../../assets/assets"
import "./Navbar.css"
import { Link } from 'react-router'
import { StoreContext } from '../Context/StoreContext'

const Navbar = ({setshowlogin}) => {

     const[menu,setmenu] = useState("home");

     const {getTotalCartAmt} = useContext(StoreContext)

  return (
    <div className='navbar'>
       <Link to="/"> <img src={assets.logo} alt="" className='logo' /> </Link>
        <ul className='navbar-menu'>
            <Link to="/" onClick={() => setmenu("home")} className={menu==="home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={() => setmenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={() => setmenu("mobile")} className={menu==="mobile"?"active":""}>Mobile-app</a>
            <a href='#footer' onClick={() => setmenu("contact")} className={menu==="contact"?"active":""}>Contact-us</a>
        </ul> 
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
               <Link to="/cart"> <img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmt()===0?"":"dot"}></div>
            </div> 
            <button onClick={() => setshowlogin(true)}>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar
