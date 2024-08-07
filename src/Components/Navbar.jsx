import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <nav>
        <div className="container">
            <div className="menu_logo ">
            <img className=' p-6' src=" public/images/logo.png" alt="img" />

                 <ul className=' flex justify-center items-center gap-[120px] mt-[-45px]'>
           <NavLink
             to="/"className={({ isActive, }) => isActive ?<NavLink className=' text-2xl text-black font-bold' to='#' > Home</NavLink>
             :<NavLink className=' text-2xl text-black font-bold' to='#' > Home</NavLink>
             }>Home</NavLink>

            <NavLink
             to="/About"className={({ isActive, }) => isActive ?<NavLink className=' text-2xl text-black font-bold' to='#' > About</NavLink>
             :<NavLink className=' text-2xl text-black font-bold' to='#' > About</NavLink>
             }>About</NavLink>
             
             <NavLink
             to="/Shop"className={({ isActive, }) => isActive ?<NavLink className=' text-2xl text-black font-bold' to='#' > Shop</NavLink>
             :<NavLink className=' text-2xl text-black font-bold' to='#' > Shop</NavLink>
             }>Shop</NavLink>

             <NavLink
             to="/Contact"className={({ isActive, }) => isActive ?<NavLink className=' text-2xl text-black font-bold' to='#' > Contact</NavLink>
             :<NavLink className=' text-2xl text-black font-bold' to='#' > Contact</NavLink>
             }> Contact</NavLink>

            <NavLink
             to="/Journal"className={({ isActive, }) => isActive ?<NavLink className=' text-2xl text-black font-bold' to='#' > Journal</NavLink>
             :<NavLink className=' text-2xl text-black font-bold' to='#' > Journal</NavLink>
             }> Journal</NavLink>


 </ul>
 </div>
 <div className="container p-5">
 <NavLink to='#'> <h2 className=' uppercase mt-5'>jahidul isdlam</h2></NavLink>
    <ul className=' flex justify-center items-center mt-[-25px]'>
        <li> <NavLink to='#'> <input className=' w-[301px] h-[30px] text-[#000] border-2 border-solid ml-[850px]' type="text" placeholder=' Search Products' /></NavLink></li>
         <li className=' ml-[25px]'> <NavLink to='#' > <img src=" public/images/sape.png" alt="img" /></NavLink></li>
         <li className=' ml-[25px]'> <NavLink to='#' > <img src=" public/images/path.png" alt="img" /></NavLink></li>
         <li className=' ml-[25px]'> <NavLink to='#' > <img src=" public/images/path1.png" alt="img" /></NavLink></li>
    </ul>
 </div>
 </div>
 </nav>


 </>
  )
}

export default Navbar