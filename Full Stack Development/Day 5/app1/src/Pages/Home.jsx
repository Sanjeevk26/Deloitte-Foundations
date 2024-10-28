import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom/client';

import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import MyForm from '../Components/Form';
import ProductsTable from '../Components/ProductsTable';
import Navbar from '../Components/Navbar';
import ProductModal from '../Components/ProductModal';

// Sample products data
                              


function Home(){
    const navigate = useNavigate(); 
    const [products] = useState([
        { id: 1, pname: 'Product 1', quantity: 10, price: 50, pdesc: 'Description of Product 1' },
        { id: 2, pname: 'Product 2', quantity: 5, price: 75, pdesc: 'Description of Product 2' },
            { id: 3, pname: 'Product 3', quantity: 20, price: 30, pdesc: 'Description of Product 3' },
  ]);

// State to track selected product
const [selectedProduct, setSelectedProduct] = useState(null);

// State to control modal visibility
const [show, setShow] = useState(false);

    // Function to handle product click
    const handleProductClick = (product) => {
    setSelectedProduct(product); // Set the selected product
    setShow(true); // Show the modal
    };

// Function to handle modal close
    const handleClose = () => {
        setShow(false); // Hide the modal
    };
  
    return(<>
    <Header />
    <br></br>
    <Navbar />
    <br></br>
    <Button variant="success" onClick={()=> navigate('addProduct')}>Add Product </Button>
    <br></br>
    <ProductsTable products={products} onProductClick={handleProductClick} />
    {selectedProduct && (
    <ProductModal 
        selectedProduct={selectedProduct} 
        show={show} 
        handleClose={handleClose} 
        />
    )}
    <br></br>
    <MyForm /> 

    <br></br>
    <ProductsTable/>
    <br></br>
    <Footer />
    
    </>);
}

export default Home;
