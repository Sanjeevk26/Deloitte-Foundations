import React, { Component } from 'react';
import './ProductsTable.styles.css';
const products = [
    {id:1,pname:'Apple',pdesc:'Kashmiri Apple',price:120,quantity:100},
    {id:2,pname:'Apple',pdesc:'Kashmiri Apple',price:120,quantity:100},
    {id:3,pname:'Apple',pdesc:'Kashmiri Apple',price:120,quantity:100},
    {id:4,pname:'Apple',pdesc:'Kashmiri Apple',price:120,quantity:100},
    {id:5,pname:'Apple',pdesc:'Kashmiri Apple',price:120,quantity:100},
]
 

function handleButtonClick(params){
    alert(" Rs Please");
}
 
export default function ProductsTable({ products, onProductClick }) {
    return products && products.length > 0 ? (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.pname}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td><button className= "button" onClick={() => onProductClick(product)}>Click</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <>
        <h3>No data found</h3>
      </>
    );
  }