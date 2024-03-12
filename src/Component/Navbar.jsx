import React, { useState } from 'react'
import { navLinks } from './constant/words'
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
             
           const [menuItem , setMenuItem] = useState({
            items: ''
           })
           
           const handleMenu = () => {
               
           } 

  return (
    <section className='navbar'>
       <div className=" lg:flex hidden nav_container bg-slate-200 flex flex-1 justify-between items-center m-20">
        <div>
          <h1 className=' text-3xl font-extrabold text-amber-400 font-poppins'>JEY<span className='text-black font-serif'>LAN</span> </h1>
        </div>
        <div className='items-link'>
                <ul className='flex items-center text-xl font-poppins '>
                  {navLinks.map(nav => (
                    <li className='mx-10' key={nav.id}>
                      {nav.title}
                    </li>
                  ))}
                </ul>
        </div>
        <div>
          <button className='bg-blue-500 p-2 lg:w-[150px] w-auto font-sans rounded-xl text-2xl text-white'>Contact</button>
        </div>
       </div>
        {/* nav bar for small screen */}
                
        <div  className='lg:hidden flex justify-between m-5 items-center'>
              <div className=''>
                     <h1 className=' text-xl font-extrabold text-amber-400 font-poppins'>JEY<span className='text-black font-serif'>LAN</span> </h1>

              </div>
              <div>
              
                    <TiThMenu />      
                
              </div>
         
        </div>
        
    </section>
  )
}

export default Navbar