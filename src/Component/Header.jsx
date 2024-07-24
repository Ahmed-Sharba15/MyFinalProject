import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <header class="bg-black border-b border-gray-700">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      
        <nav class="flex items-center justify-between h-16 lg:h-20">
            <div class="flex-shrink-0">
                <a href="#" title="" class="flex">
               <h1> <span className='text-cyan-500 '> <b> Carwo fashion</b> </span></h1>
                </a>
            </div>

            <button type="button" class="inline-flex p-2 text-white transition-all duration-200 rounded-md md:hidden focus:bg-gray-800 hover:bg-gray-800">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            <div class="hidden md:flex md:items-center md:space-x-10">
                <Link to="/" title="" class="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> <span className='text-cyan-500 '> Home</span> </Link>

                <Link to="/ManCloths" title="" class="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70">  <span className='text-cyan-500 '> ManCloths</span> </Link>

                <a href="#" title="" class="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Resources </a>

                <a href="#" title="" class="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Pricing </a>
            </div>
        </nav>

       
       
    </div>
</header>

    </div>
  )
}

export default Header