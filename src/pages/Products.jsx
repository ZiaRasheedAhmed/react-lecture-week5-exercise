import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../assets/components/ProductCard/ProductCard";

const Products = () => {
  const [items, setItems] = useState([]);
  const [searchedArrayItems, setSearchedArrayItems] = useState([]);
  const fetchAPI = async () => {
    // Without async await //
    // const response = axios
    //   .get("https://fakestoreapi.com/products")
    //   .then((response) => {
    //     console.log(response);
    //     const data = response.data;
    //     setItems(data);
    //   })
    //   .catch((error) => {
    //     console.log("Error!");
    //   })
    //   .finally(() => {
    //     console.log("Finally!!!");
    //   });
    
    // With async await 
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
  setItems(response.data);
    } catch (error) {
      console.log("Error!!!", error);
    }
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <div>
      <h1>Product Page</h1>
      <input type="text" placeholder="Search by Title" onChange={(e)=>{
        const search = e.target.value;
        const searchedItem = items.filter((item)=>{
            return item.title.toLowerCase().includes(search.toLowerCase());
        })
        setSearchedArrayItems(searchedItem);
        console.log(searchedItem);
      }} />
      {items.map((itemsEntry) => {
        return <ProductCard itemsEntry = {itemsEntry} key={itemsEntry.id} />
      })}
    </div>
  );
};

export default Products;
