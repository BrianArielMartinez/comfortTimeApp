import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import logo from "../image/logo.png"



export const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <div>
                        <a href="#home" title="COMFORTTIME" rel="home">
                        <img src={logo} alt=""/>
                        </a>
                    </div>
                    {/* <Navbar.Brand href="#home">ComfortTimeTienda</Navbar.Brand> */}
                    <Nav className="me-left">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Productos</Nav.Link>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                    </Nav> 
                </Container>
            </Navbar>
        </div>
    )
}