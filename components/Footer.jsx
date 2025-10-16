import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()

  const handlelogout =()=> {
    localStorage.removeItem('currenUser')
   navigate('/login')

  }

  const currentyear = new Date().getFullYear()
  return (
    <div className='py-8 mt-4 border-t border-pink-200'>

       <button onClick={handlelogout}
        className='bg-red-500 px-2 py-1 rounded text-white mb-10 w-1/3 hover:bg-red-600'>logout shopping cart</button>

      <div className='max-w-4xl max-auto text-center'>
        <p className='mb-2'>thanks for visiting this website  </p>
        <p> badmaax &copy; {currentyear} </p>
      </div>
    </div>
  )
}

export default Footer