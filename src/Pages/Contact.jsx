import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <>
    <div className="container">
    <div className="contact w-[1260px] h-[400px] bg-[#FF8225] mt-[25px] p-5">
      <h2 className=' text-black text-2xl font-bold mt-[100px] ml-[150px]'>MENU</h2>
      <li className=' ml-[150px]'> <Link to='/'>Home</Link></li>
      <li className=' ml-[150px]'> <Link to='/About'>About</Link></li>
      <li className=' ml-[150px]'> <Link to='/Shop'>Shop</Link></li>
      <li className=' ml-[150px]'> <Link to='/Contact'>Contact</Link></li>
      <li className=' ml-[150px]'> <Link to='/Journal'>Journal</Link></li>
      <div className=' mt-[-153px] ml-[180px]'>
    <h2 className='  text-black text-2xl font-bold ml-[150px]'>SHOP</h2>
      <p className=' ml-[150px]'>Category 1</p>
      <p className=' ml-[150px]'>Category 2</p>
      <p className=' ml-[150px]'>Category 3</p>
      <p className=' ml-[150px]'>Category 4</p>
      <p className=' ml-[150px]'>Category 5</p>

    </div>
    <div className=' mt-[-153px] ml-[350px]'>
    <h2 className='  text-black text-2xl font-bold ml-[150px]'>HELP</h2>
      <p className=' ml-[150px]'>Privacy Policy</p>
      <p className=' ml-[150px]'>Terms & Conditions</p>
      <p className=' ml-[150px]'>Special E-shop</p>
      <p className=' ml-[150px]'>Shipping</p>
      <p className=' ml-[150px]'>Secure Payments</p>

    </div>
    <div className=' mt-[-153px] ml-[570px]'>
    <h2 className='  text-black text-2xl font-bold ml-[150px]'>(+01772)353905</h2>
      <p className=' ml-[150px]'>jahidulislamwebbd@gmail.com</p>
      <p className=' ml-[150px]'>575 Crescent Ave. Quakertown, PA 18951</p>
    

    </div>
    <div className=' mt-[-80px] ml-[950px]'>
    <h2 className='  text-black text-2xl font-bold ml-[150px]'>OREBI</h2>
    
    </div>
    <div className=' flex mt-[200px] gap-[25px] ml-[150px]'>
    <Link to='https://www.facebook.com/profile.php?id=100083385545891'> <BsFacebook /> </Link>
    <Link to='https://www.linkedin.com/checkpoint/lg/login?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F&fromSignIn=true&errorKey=challenge_global_internal_error&pageInstance=urn%3Ali%3Apage%3Acheckpoint_lg_uasLogin%3BxDN03bakSJCOV1cwaXVZwA%3D%3D&controlId=d_checkpoint_lg_floe_member_login_screen-login_submit_button'> <FaLinkedin /></Link>
    <Link to='https://www.instagram.com/jahidulislamwebbd/?hl=en'> <AiFillInstagram /> </Link>
    </div>
    <div className='ml-[780px] mt-[-20px]'>
    <p className=''>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>

    </div>
    
    </div>
    </div>
   
    
    
    </>
  )
}

export default Contact