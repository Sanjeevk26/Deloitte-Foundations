import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';
function Layout() {
    return (
        <>
         <Navbar />
        <Container fluid>
        <main>
            <Outlet />
        </main>
        </Container>
        <Footer />
        </>
     );
}
 
export default Layout;
