import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Header() {

  // kasoo qaaad products-ka redux store
  const { products } = useSelector((state) => state.shop)


  return (
    <div className='fixed top-0 left-0 right-0 bg-white backdrop-blur-lg shadow-md  z-10' >

      <div className='max-w-3xl mx-auto flex justify-between items-center p-4 '>

        <h1 className='font-bold '>Badmaax</h1>

        <nav className='flex gap-6'  >
          <Link to='/Home' className='font-semibold hover:text-pink-500'> Home</Link>
          <Link to='/about' className='font-semibold hover:text-pink-500'> About</Link>
          <Link to='/contact' className='font-semibold hover:text-pink-500'>Contact</Link>
          <Link to='/products' className='font-semibold hover:text-pink-500'>Products</Link>

          <div className=' relative'>
            <Link to='/Cart' className='font-semibold hover:text-pink-500'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span className='absolute -top-4 
               -right-1 bg-red-500
                rounded-full w-5 h-5 flex 
                self-center justify-center
                 text-white'>
                {products.length}
              </span>
            </Link>
          </div>


        </nav>
      </div>

    </div>
  )
}

export default Header