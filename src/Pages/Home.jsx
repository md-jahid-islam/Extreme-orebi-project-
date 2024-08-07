import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
     <div className="container">
        <div className=''>
        <h2 className=' mt-[230px] text-2xl text-black font-bold'>01</h2>
         <div className=' mt-[-65px] ml-[50px]'>
         <h3 className=' w-[3px] h-[100px] border border-solid bg-black '></h3>
          <div className=' mt-[-150px] ml-[180px]'>
            <h2 className=' text-4xl text-black font-bold'>Final Offer</h2>
            <div className=' flex mt-10'>
                <h3 className=' text-2xl text-black gap-4'>Up to</h3>
                <h2 className=' text-4xl text-black font-bold gap-5'>50%</h2>
                <h3 className=' text-[#000] font-bold gap-5'>sale for all furniture items!</h3>
            </div>
            <div>
            <li className=' w-[185px] h-[50px] bg-black text-white flex justify-center items-center mt-14 border border-solid hover:bg-slate-500 rounded-lg transition'> <Link to='#' >Shop Now</Link></li>
            <img className=' mt-[-250px] ml-[500px]' src=" public/images/headphone.png" alt="img" />

            </div>
          </div>
         </div>
         <div className=' flex justify-center items-center  mt-[100px] gap-40'>
          <h2 className=' text-[18px] text-black font-bold'>2</h2>
          <p className=' text-[16px] text-[#6D6D6D]'>Two years warranty</p>

          <h2 className=' text-[18px] text-black font-bold'> <img src=" public/images/solid1.png" alt="img" /></h2>
          <p className=' text-[16px] text-[#6D6D6D]'>Free shipping</p>
          
          <h2 className=' text-[18px] text-black font-bold'> <img src=" public/images/solid.png" alt="img" /></h2>
          <p className=' text-[16px] text-[#6D6D6D]'>Return policy in 30 days</p>
          
            </div>
        </div>
     </div>
    
    </>

  )
}

export default Home