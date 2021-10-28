import { Container, Navbar, Nav } from 'react-bootstrap'
import logo from "assets/images/logo.png"
import { CartWidget } from './CartWidget'
import "style/NavBar.css"


export const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <div className="logo">
                        <a href="#home" title="COMFORTTIME" rel="home">
                            <img src={logo} alt=""/>
                        </a>
                    </div>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Productos</Nav.Link>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                    </Nav>

                    <CartWidget/>

                </Container>
            </Navbar>
        </div>
    )
}