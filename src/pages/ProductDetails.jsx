import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const params = useParams();
    useEffect(() => {
        console.log(params);
    }, [params]);
  return (
    <div>
      <h1>Product Details Page</h1>
    </div>
  )
}

export default ProductDetails
