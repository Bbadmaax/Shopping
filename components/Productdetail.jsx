import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Productdetailskeleton from '../skeleton/Productdetailskeleton'


//redux import
import { Addcart}  from "../Redux/shopSlice"
import { useDispatch } from 'react-redux'

function Productdetail() {

    const [productdetails, setproductdetails] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()
    const [mainimage, setmainimage] = useState("")
    const [loading,setloading] = useState(true)
     const dispatch = useDispatch()

    useEffect(() => {
        const fetchdate = async () => {
            try {
                setloading(true)
                let { data } = await axios.get(`https://dummyjson.com/products/${id}`)
                console.log(data)

                setTimeout(()=> {
 setproductdetails(data)
                setmainimage(data.thumbnail)
                setloading(false)
                },2000)
               
            } catch (error) {
                console.log(`errror`)
                setloading(false)
            }

        }
        fetchdate()
    }, [id])

    function goback() {
        navigate("/products")
    }

    if(loading) return < Productdetailskeleton />
    if ( !productdetails.id) {
        return <div className="text-center mt-10 text-gray-500">product not found</div>
    }

   
    function handleAddCart() {
        dispatch(Addcart(productdetails))
        console.log(productdetails)
    }

    return (
        <div className='p-4 md:p-8 '>
            <button className='bg-red-500 p-4 w-1/5 
            rounded-lg text-white
             font-bold 
             border-3 border-black 
             shadow-[8px_8px_black]
             hover-shadow-[2px_2px_black]
             hover:border-2
             transtion-shadow transtion-border duration-200 ease-in-out'
                onClick={goback}>
                Go back
            </button>

            <div className='md:flex justify-between '>

                <div className=' md:w-1/2 pr-1  shadow-[2px 4px 8px black] mt-4 
                shadow-[2px_4px_bl]     
                '>
                    <img src={mainimage}
                        className='w-full h-96 rounded-lg bg-gray-300'
                    />
                    <div className='md:grid grid-cols-4 gap-4  mt-2 mb-2   w-full
                    rounded-xl bg-gray-200
                    '>
                        {productdetails.images.map((image, index) => (
                            <img key={index} src={mainimage}
                                onClick={() => setmainimage(image)}
                            />
                        ))}
                    </div>
                </div>



                <div className='p-4 '>.       
                    <div className='mt-4 font-bold '>{productdetails.title} </div>

                    <div className='flex justify-between items-center mt-4'>
                        <div className='mt-4 font-bold text-red-500'>${productdetails.price} </div>
                        <div className='mt-4'>
                            {productdetails.stock > 0 ? <span>{productdetails.stock}-inStock </span> : <span>out-stock</span>}
                        </div>
                    </div>

                    <div className='mt-4'>
                        <span className='text-orange-300'>{"✬".repeat(Math.round(productdetails.rating))} </span>
                        <span className='text-gray-200'>{"★".repeat(Math.round(5 - productdetails.rating))} </span>
                    </div>
                    <div className='mt-4 bg-red-500 w-40 p-3
                     rounded-xl text-center
                      text-white font-bold 
                       border-3 border-black 
             shadow-[8px_8px_black]
             hover-shadow-[2px_2px_black]
             hover:border-2
             transtion-shadow transtion-border duration-200 ease-in-out
                      '
                      onClick={handleAddCart}>Add to Cart</div>
                </div>



            </div>
        </div>
    )
}

export default Productdetail