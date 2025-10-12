import React from 'react'

function Payment() {
    return (
        <div className=' lg:w-1/3 md:w-1/2 sm:w-1/2 shadow-md p-5 h-80 rounded-xl mr-auto ml-10 mt-4 '>
            <h1 className='font-bold'>Choose Payment Method </h1>
            <div className='mt-4 '>
                <label>
                    <input type='radio' name='payment' />
                    <span className='space-x-4 ml-2'>card payment</span>
                </label>
            </div>
            <div >
                <label>
                    <input type='radio' name='payment' />
                    <span className='ml-2'>cash payment</span>
                </label>
            </div>
<hr className='mt-4 '></hr>

            <div className='flex justify-between  mt-4'>
                <span className='font-semibold'>  total </span>
                <span className='font-semibold'> $252</span>
            </div>
            <div className='flex justify-between   mt-4'>
                <span className='text-red-500 font-bold text-lg'> Subtotal</span>
                <span className='text-red-500 font-bold text-lg'> $2522</span>
            </div>

            <div className='mt-6 text-center text-white '>
 <button className='bg-red-500 p-3 rounded-xl shadow-[6px_7px_black] 
 transition-shadow hover:shadow-[1px_2px_black] font-bold 
 ease-in duration-200 w-full'>
    Proceed To Checkout
</button>
            </div>
           

        </div>
    )
}

export default Payment