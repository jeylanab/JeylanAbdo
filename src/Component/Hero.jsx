import React from 'react'
import  jeylan  from '../Asset/jeylan.png'


const Hero = () => {
  return (
    <div className=''>
      <div className='lg:flex block sm:ml-5 lg:m-40 items-center justify-between'>
        <div className=''>
              <h2 className='lg:text-4xl text-xl font-mono'>Hello My Name is</h2> 
              <h1 className='  lg:text-8xl text-4xl font-extrabold'>Jeylan <span className='text-lime-400 font-extrabold'>Abdo</span> </h1>
              <p className=' mt-[20px]'>"Turning ideas into reality isn't just my job; <br /> it's my calling. I thrive on transforming concepts into impactful  creations, <br /> injecting every project with a touch of innovation that sets it apart."</p>
          </div>
          <div className=' sm:mt-[50px]'>
            <img src={jeylan} alt="" className=' rounded-xl lg:w-[290px] lg:h-[400px] w-[200px]   bg-slate-500' />
          </div>
      </div>
        
    </div>
  )
}

export default Hero