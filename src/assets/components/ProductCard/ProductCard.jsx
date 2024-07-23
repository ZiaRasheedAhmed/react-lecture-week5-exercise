import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {
  const navigate = useNavigate();
    const {itemsEntry} = props;
  return (
    <div className='main-div'>
      <h1 onClick={()=>navigate("/product-details/"+itemsEntry.id)}>{itemsEntry.title}</h1>
      <h3>$ {itemsEntry.price}</h3>
    </div>
  )
}

export default ProductCard
