import React from 'react'
            function Productitemskeleton() {
  const skeleton = Array.from({ length: 20 });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {skeleton.map((_, index) => (
        <div
          key={index}
          className="border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 ease-in p-4"
        >
          <div className="w-full h-80 bg-gray-200 animate-pulse rounded-md"></div>
          <div className='bg-gray-200 animate-pulse h-5 w-1/3 mt-4 rounded-md' > </div>

          <div className='flex justify-between mt-4'>
             <div className='bg-gray-200 animate-pulse rounded-md h-5 w-1/4'></div>
              <div className='bg-gray-200 animate-pulse rounded-md h-5 w-1/4'></div>
             </div>
 <div className='mt-6 bg-gray-200 animate-pulse rounded-md h-4 w-1/4'></div>
        
        </div>
      ))}
    </div>
  );
}

export default Productitemskeleton;
