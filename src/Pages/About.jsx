import React from 'react'
const About = () => {
  return (
    <>
   <div className="container">
    <div className="heder">
      <img className=' w-[450px] h-[700px] mt-[140px] relative' src=" public/images/heders.png" alt="img" />
      <h2 className=' text-2xl text-black font-bold absolute mt-[-195px] ml-28'>Phones Sale</h2>
      <div className=' flex mt-[-150px] ml-[45px] absolute'>
                <h3 className=' text-2xl text-black gap-4'>Up to</h3>
                <h2 className=' text-4xl text-black font-bold gap-5'>30%</h2>
                <h3 className=' text-[#000] font-bold gap-5'>sale for all phones!!</h3>     
       </div>
      <div className=' mt-[-160px] absolute ml-[120px]'>
      <a className=' w-[180px] h-[50px] bg-black text-white flex justify-center items-center border border-solid hover:bg-[#12E2A3] rounded-xl mt-[80px] mr-[100px]' href="#">Shop Now</a>

      </div>
    </div>
    <div className=' w-[780px] h-[320px] bg-[#979797] mt-[-700px] ml-[500px]'>
      <h2 className=' text-2xl text-black font-bold p-6'>Electronics Sale</h2>
      <div className='  flex p-6'>

      <h3 className=' text-2xl text-black gap-4'>Up to</h3>
       <h2 className=' text-4xl text-black font-bold gap-5'>70%</h2>
       <h3 className=' text-[#000] font-bold gap-5'>sale for all electronics!!</h3>  

      </div>
      <div className=' mt-[-60px] p-6'>
      <a className=' w-[180px] h-[50px] bg-black text-white flex justify-center items-center border border-solid hover:bg-[#12E2A3] rounded-xl mt-[80px] mr-[100px]' href="#">Shop Now</a>
      </div>
      <div className=' mt-[-286px] ml-[550px]'>
        <img className=' w-[300px] h-[320px]' src=" public/images/cloke.png" alt="img" />
      </div>
    </div>
    <div className=' w-[780px] h-[320px] bg-[#979797] mt-14 ml-[500px]'>
      <h2 className=' text-2xl text-black font-bold p-6'>Furniture Offer</h2>
      <div className='  flex p-6'>

      <h3 className=' text-2xl text-black gap-4'>Up to</h3>
       <h2 className=' text-4xl text-black font-bold gap-5'>50%</h2>
       <h3 className=' text-[#000] font-bold gap-5'>sale for all furniture items!</h3>  

      </div>
      <div className=' mt-[-60px] p-6'>
      <a className=' w-[180px] h-[50px] bg-black text-white flex justify-center items-center border border-solid hover:bg-[#12E2A3] rounded-xl mt-[80px] mr-[100px]' href="#">Shop Now</a>
      </div>
      <div className=' mt-[-286px] ml-[550px]'>
        <img className=' w-[300px] h-[320px]' src=" public/images/image1.png" alt="img" />
      </div>
    </div>

    </div>     
    
    </>
  )
}

export default About