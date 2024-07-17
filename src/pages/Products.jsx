import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [items, setItems] = useState([]);
  const [searchedArrayItems, setSearchedArrayItems] = useState([]);
  const fetchAPI = () => {
    const response = axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response);
        const data = response.data;
        setItems(data);
      })
      .catch((error) => {
        console.log("Error!");
      })
      .finally(() => {
        console.log("Finally!!!");
      });
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
      <table>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
            </tr>
      {items.map((itemsEntry) => {
        return <tr>
            <td>{itemsEntry.id}</td>
            <td>{itemsEntry.title}</td>
            <td>{itemsEntry.price}</td>
        </tr>
      })}
       </table>
    </div>
  );
};

export default Products;
