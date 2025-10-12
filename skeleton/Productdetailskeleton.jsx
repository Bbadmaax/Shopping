
import React from 'react'

function Productdetailskeleton() {
    return (
        <div className='p-4 mt-4'>
            <button className=' p-4 w-1/5 rounded-lg bg-gray-300 animate-pulse ml-1'></button>
            <div className=' flex justify-between gap-3 '>
                {/* Left side (image + thumbnails) */}
                <div className='w-1/2 '>
                    <div className='w-full h-80 bg-gray-300 animate-pulse  mt-4 rounded-2xl'></div>

                    <div className='grid grid-cols-4 gap-4'>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className='w-full h-10 bg-gray-300 animate-pulse mt-2 p-6 rounded-xl '>

                            </div>
                        ))}
                    </div>
                </div>
                {/* Right side (text skeletons) */}
                <div className='w-1/2  mt-2 p-3 '>
                    <div className='w-1/2/1  h-4 bg-gray-300 animate-pulse rounded-xl '></div>
                    <div className='flex justify-between items-center'>
                        <div className='w-20 h-3 bg-gray-300 animate-pulse mt-5 rounded-xl'></div>
                        <div className=' w-20 h-3 bg-gray-300 animate-pulse mt-5 rounded-xl'></div>
                    </div>

                    <div className='w-20 h-3 bg-gray-300 animate-pulse mt-8 rounded-xl '></div>
                    <div className='mt-10 h-3 w-30 bg-gray-300 animate-pulse p-5 rounded-xl'></div>
                </div>

            </div>
        </div>

    )
}

export default Productdetailskeleton