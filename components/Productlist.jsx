import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Productlist() {
    const [productlist, setptoductlist] =useState([])


    useEffect(()=> {
const fetchproductlist = async () => {
  try{
    const res = await axios.get('https://dummyjson.com/products')
    console.log(res.data)
  
  }
}
fetchproductlist()
    },[])

  return (
    <div>

    </div>
  )
}

export default Productlist