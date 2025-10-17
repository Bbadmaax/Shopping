
import React, { useEffect, lazy , Suspense } from "react";
import Productitemskeleton from "../skeleton/Productitemskeleton";

const Productitem = lazy(()=> import("./Productitem"));

//redux import 
import { useDispatch, useSelector } from "react-redux";
import { fetchdata } from "../Redux/ProductslistSlice";


function Productlist() {
  
  const dispatch = useDispatch()
  const {productlists, loading, error} = useSelector((state)=> state.productsStatelist)


  useEffect(()=> {
    dispatch(fetchdata())
  },[dispatch])

  console.log({productlists, loading, error})

if (loading) return < Productitemskeleton/>
  return (
      <Suspense fallback={< Productitemskeleton/>}>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
    {productlists.map((product)=> (
    
      < Productitem 
      key={product.id}
      product={product}
      />
     
    ))}
    </div>
      </Suspense>
  );
}

export default Productlist;
