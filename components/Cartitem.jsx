import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import Payment from './Payment';

//import redux
import { useSelector, useDispatch } from 'react-redux';
import {updatedproductQuantity,RemovefromCart} from "../Redux/shopSlice"

function Cartitem() {

  const {products} = useSelector((state)=> state.shop)
  const dispatch = useDispatch()

function handleRemove(product) {
  dispatch(RemovefromCart(product))
}
 
function handleQuantityChange(product, newQuantity) {
  dispatch(updatedproductQuantity({ product, newQuantity: Number(newQuantity) }));
}


  return (
    <div className=' flex flex-col md:flex-row gap-6'>
     
 {/* Bidix - Cart Items */}
        <div className=' flex flex-1 flex-col gap-4 mt-4'>
           <h2 className='text-xl font-bold mb-5 '>
        {products.length > 0 ? "cart item" : "youre cart item is empty right now "}
      </h2>

      {products.map((product) => (
        <div key={product.id} className='flex items-start justify-between'>
          <img src={product.thumbnail} alt={product.title}
            className='w-24 h-24 object-cover'
          />
          <div className='flex flex-col justify-between flex-1'>
            <p className='font-bold '>{product.title} </p>

            <div className='flex  gap-4 items-center mt-4 space-x-3'>
              <span className='text-red-500 font-bold'> ${product.price} </span>
              <label className='font-bold'>  quantity</label>
              < input type='number'
               min={0}
               value={product.quantity}
               onChange={(e)=> handleQuantityChange(product, e.target.value)}
                className='border w-10  shadow-[4px_4px_black] 
                rounded-md hover:shadow-[2px_2px_black]
                 transition-shadow duration-200 ease-in'
              />
              <button
              onClick={() => handleRemove(product)}
               className="text-red-500">
                 <FaRegTrashAlt /> 
                  </button>
            </div>
          </div>
        </div>
      ))}
       </div>
 {/* Midig - Payment Section */}
    <Payment />

    </div>
  )
}

export default Cartitem