import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import Payment from './Payment';
function Cartitem() {


  const products = [
    {
      "id": 1,
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": 9.99,
      "discountPercentage": 10.48,
      "rating": 2.56,
      "stock": 99,
      "tags": [
        "beauty",
        "mascara"
      ],
      "brand": "Essence",
      "sku": "BEA-ESS-ESS-001",
      "weight": 4,
      "dimensions": {
        "width": 15.14,
        "height": 13.08,
        "depth": 22.99
      },
      "warrantyInformation": "1 week warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 3,
          "comment": "Would not recommend!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Eleanor Collins",
          "reviewerEmail": "eleanor.collins@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very satisfied!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Lucas Gordon",
          "reviewerEmail": "lucas.gordon@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Eleanor Collins",
          "reviewerEmail": "eleanor.collins@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 48,
      "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "5784719087687",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
    },
    {
      "id": 2,
      "title": "Eyeshadow Palette with Mirror",
      "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      "category": "beauty",
      "price": 19.99,
      "discountPercentage": 18.19,
      "rating": 2.86,
      "stock": 34,
      "tags": [
        "beauty",
        "eyeshadow"
      ],
      "brand": "Glamour Beauty",
      "sku": "BEA-GLA-EYE-002",
      "weight": 9,
      "dimensions": {
        "width": 9.26,
        "height": 22.47,
        "depth": 27.67
      },
      "warrantyInformation": "1 year warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Savannah Gomez",
          "reviewerEmail": "savannah.gomez@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Awesome product!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Christian Perez",
          "reviewerEmail": "christian.perez@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Poor quality!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Nicholas Bailey",
          "reviewerEmail": "nicholas.bailey@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 20,
      "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "9170275171413",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
    },
    {
      "id": 3,
      "title": "Powder Canister",
      "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      "category": "beauty",
      "price": 14.99,
      "discountPercentage": 9.84,
      "rating": 4.64,
      "stock": 89,
      "tags": [
        "beauty",
        "face powder"
      ],
      "brand": "Velvet Touch",
      "sku": "BEA-VEL-POW-003",
      "weight": 8,
      "dimensions": {
        "width": 29.27,
        "height": 27.93,
        "depth": 20.59
      },
      "warrantyInformation": "3 months warranty",
      "shippingInformation": "Ships in 1-2 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Would buy again!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Alexander Jones",
          "reviewerEmail": "alexander.jones@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Elijah Cruz",
          "reviewerEmail": "elijah.cruz@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Very dissatisfied!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Avery Perez",
          "reviewerEmail": "avery.perez@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 22,
      "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "8418883906837",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp"
    }
  ];


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
              < input type='number' min={1}
                className='border w-10  shadow-[4px_4px_black] 
                rounded-md hover:shadow-[2px_2px_black]
                 transition-shadow duration-200 ease-in'
              />
              <buttton className="text-red-500"> <FaRegTrashAlt /> </buttton>
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