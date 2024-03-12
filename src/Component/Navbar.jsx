import React from 'react'
import {navLinks} from '../Component/constant/words'

const Navbar = () => {
  return (
    <section className='navbar'>
        <div className="navbar-container flex justify-center flex-1 bg-slate-500 p-5">
            <div>
                 <img src="" alt="" />
            </div>
            <div className='flex justify-center'>
                <ul className='justify-center flex text-2xl'>
                    {navLinks.map(link => (
                      <li className='mx-7 text-2xl font-poppins '>{link.title}</li>
                    ))}
                </ul>
           </div>

        </div>
        
    </section>
  )
}

export default Navbar