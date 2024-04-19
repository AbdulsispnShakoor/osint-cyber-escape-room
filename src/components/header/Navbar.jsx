import React, { useState } from 'react'
import logo from '../../assets/images/logo-company.png';
import logo_01 from '../../assets/images/logo-0234234234.png'
import logo_02 from '../../assets/images/logo_3 24353534543.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [toggle , setToggle] = useState(false);


    const handleToggle = () =>{
        setToggle(!toggle)
    }

  return (
   <header className='sticky top-0 z-[100] bg-[#001632] shadow-2xl'>
  {/* lg+ */}
  <div className="px-4 lg:px-24 py-8 text-white">
    <div className="px-4 mx-auto sm:px-6 lg:px-8">
      <nav className="relative flex items-center justify-between flex-wrap gap-4 h-auto lg:h-20 transition-all ease-in duration-300">
      {/* <div className="lg:absolute lg:-translate-x-.6/4 lg:inset-y-5 lg:left-1/2"> */}
      <div className="">
          <div className="flex-shrink-0 flex items-center gap-2">
            <a href="https://gentiumcyber.com/" target='_blank' className="flex">
              <img className="w-auto h-12 lg:h-16" src={logo_01} alt="gentium uk cyber" />
            </a>
            <a href="https://www.wolfmind.nl/" target='_blank'  className="flex">
              <img className="w-auto h-12 lg:h-16" src={logo_02} alt="wolf mind" />
            </a>
          </div>
        </div>
        <div className="hidden lg:flex lg:items-center flex-wrap lg:space-x-3">
          <Link to="/"  className="text-base font-medium "> Home </Link>
          <Link to="/about"  className="text-base font-medium "> About </Link>
          <Link to="/services"  className="text-base font-medium"> Services </Link>
          <Link to="/cyberEscapeRooms"  className="text-base font-medium"> Cyber Escape Rooms</Link>
          <Link to="/playOpShadowTrace"  className="text-base font-medium"> Play Op Shadow Trace</Link>
          <Link to="/whyOsint?"  className="text-base font-medium"> Why Osint?</Link>
          <Link to="/contact"  className="text-base font-medium"> Contact</Link>
        </div>  
        <div onClick={handleToggle}>
        {
            toggle?   <button type="button" className="inline-flex p-2 text-white border transition-all duration-200 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="#ffffff" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button> :     <button type="button" className="inline-flex p-2 ml-5 border text-white transition-all duration-200 rounded-md lg:hidden">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        }
        </div>
    
        <div className="hidden lg:flex lg:items-center lg:space-x-10">
            {/* <button className="serch_icon">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="49" height="49" stroke="white"/>
                <path d="M32.6 34L26.3 27.7C25.8 28.1 25.225 28.4167 24.575 28.65C23.925 28.8833 23.2333 29 22.5 29C20.6833 29 19.146 28.3707 17.888 27.112C16.63 25.8533 16.0007 24.316 16 22.5C16 20.6833 16.6293 19.146 17.888 17.888C19.1467 16.63 20.684 16.0007 22.5 16C24.3167 16 25.8543 16.6293 27.113 17.888C28.3717 19.1467 29.0007 20.684 29 22.5C29 23.2333 28.8833 23.925 28.65 24.575C28.4167 25.225 28.1 25.8 27.7 26.3L34 32.6L32.6 34ZM22.5 27C23.75 27 24.8127 26.5627 25.688 25.688C26.5633 24.8133 27.0007 23.7507 27 22.5C27 21.25 26.5627 20.1877 25.688 19.313C24.8133 18.4383 23.7507 18.0007 22.5 18C21.25 18 20.1877 18.4377 19.313 19.313C18.4383 20.1883 18.0007 21.2507 18 22.5C18 23.75 18.4377 24.8127 19.313 25.688C20.1883 26.5633 21.2507 27.0007 22.5 27Z" fill="white"/>
                </svg>
            </button> */}

          <Link to="/contact"> <button className='gradient_btn'>Play Now</button></Link>
        </div> 
      </nav>
    </div>
  </div>
  {
    toggle ?  
    <nav className="py-4 bg-white lg:hidden ">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
      <div className="mt-6">
        <div className="flex flex-col space-y-4">
          <Link to="/"  className="text-base font-medium "> Home </Link>
          <Link to="/about"  className="text-base font-medium "> About </Link>
          <Link to="/services"  className="text-base font-medium"> Services </Link>
          <Link to="/cyberEscapeRooms"  className="text-base font-medium"> Cyber Escape Rooms</Link>
          <Link to="/playOpShadowTrace"  className="text-base font-medium"> Play Op Shadow Trace</Link>
          <Link to="/whyOsint?"  className="text-base font-medium"> Why Osint?</Link>
          <Link to="/contact"  className="text-base font-medium"> Contact</Link>
        </div>
        <hr className="my-4 border-gray-200" />
        <div className="flex flex-col space-y-8">
        <div className="flex space-x-4">
            {/* <button className="serch_icon">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="#046BEE" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="49" height="49" stroke="white"/>
                <path d="M32.6 34L26.3 27.7C25.8 28.1 25.225 28.4167 24.575 28.65C23.925 28.8833 23.2333 29 22.5 29C20.6833 29 19.146 28.3707 17.888 27.112C16.63 25.8533 16.0007 24.316 16 22.5C16 20.6833 16.6293 19.146 17.888 17.888C19.1467 16.63 20.684 16.0007 22.5 16C24.3167 16 25.8543 16.6293 27.113 17.888C28.3717 19.1467 29.0007 20.684 29 22.5C29 23.2333 28.8833 23.925 28.65 24.575C28.4167 25.225 28.1 25.8 27.7 26.3L34 32.6L32.6 34ZM22.5 27C23.75 27 24.8127 26.5627 25.688 25.688C26.5633 24.8133 27.0007 23.7507 27 22.5C27 21.25 26.5627 20.1877 25.688 19.313C24.8133 18.4383 23.7507 18.0007 22.5 18C21.25 18 20.1877 18.4377 19.313 19.313C18.4383 20.1883 18.0007 21.2507 18 22.5C18 23.75 18.4377 24.8127 19.313 25.688C20.1883 26.5633 21.2507 27.0007 22.5 27Z" fill="white"/>
                </svg>
            </button> */}

           <Link className='gradient_btn text-white'>Play Now</Link>
        </div> 
        </div>
      </div>
    </div>
  </nav> : ''
  }
 
</header>
  )
}

export default Navbar
