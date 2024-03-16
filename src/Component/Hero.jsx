import React from 'react'
import  jeylan  from '../Asset/jeylan.png'
import '../App.css'


const Hero = () => {
  return (
    <div className=''>
      <div className='lg:flex flex lg:flex-row flex-col sm:ml-5 lg:mr-20 lg:ml-20 items-center sm:text-center lg:justify-evenly'>
        <div className=''>
              <h2 className='lg:text-4xl text-xl font-mono   secondary-font'>Hello My Name is</h2> 
              <h1 className='  lg:text-8xl text-4xl font-extrabold primary-font p-4'>Jeylan <span className='text-lime-400 font-extrabold'>Abdo</span> </h1>
              <p className=' secondary
                                      font mt-[20px]'>"Turning ideas into reality isn't just my job; <br /> it's my calling. I thrive on transforming concepts into impactful  creations, <br /> injecting every project with a touch of innovation that sets it apart."</p>
          </div>
          <div className=' sm:mt-[50px]'>
            <img src={jeylan} alt="" className=' rounded-xl lg:w-[340px] lg:h-[450px] w-[200px]' />
          </div>
      </div>
        
    </div>
  )
}

export default Hero