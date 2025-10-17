import React from 'react'
import { Link } from 'react-router-dom'

function Productitem({ product }) {
  return (
    <Link to={`/Product-detail/${product.id}`}>
      <div className="border border-lg shadow-sm hover:shadow-lg
       transtion-shadow duration-200 ease-in">

        <img src={product.thumbnail} className='max-w-full object-cover' />
        <p className="p-4">  {product.title}</p>
        <div className="flex justify-between items-center">
          <p className="p-4 font-bold text-blue-500"> ${product.price} </p>
          <p className="p-4">
            {product.stock > 0 ? <span >{product.stock}-in stock</span>
              : <span> -out stock</span>}
          </p>
        </div>
        <div className="p-4">

          <span className="text-orange-300">{"★".repeat(Math.round(product.rating))} </span>
          <span className="text-gray-300">{"★".repeat(Math.round(5 - product.rating))} </span>
        </div>

      </div>
    </Link>
  )
}

export default Productitem



