import React from 'react'


function Footer() {
  

  

  const currentyear = new Date().getFullYear()
  return (
    <div className='py-8 mt-4 border-t border-pink-200'>

      

      <div className='max-w-4xl max-auto text-center'>
        <p className='mb-2'>thanks for visiting this website  </p>
        <p> badmaax &copy; {currentyear} </p>
      </div>
    </div>
  )
}

export default Footer