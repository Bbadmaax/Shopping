
import axios from "axios";
import React, { useEffect, useState } from "react";
import Productitem from "./Productitem";
import Productitemskeleton from "../skeleton/Productitemskeleton";


function Productlist() {
  const [productlists, setproductlists] = useState("")
  const [loading,setloading] = useState(true)

useEffect(()=> {
const fetchdata = async () => {
try {
setloading(true)
  const res = await axios.get(`https://dummyjson.com/products`)
  console.log(res.data.products)
  
  setTimeout(()=> {
 setproductlists(res.data.products)
  setloading(false)
  },2000)
 
}catch (errr) {
  setloading(false)
}
 


}
fetchdata()
},[])

if(loading) return < Productitemskeleton/>
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
    {productlists.map((product)=> (
      < Productitem 
      key={product.id}
      product={product}
      />
    ))}
    </div>
  );
}

export default Productlist;
