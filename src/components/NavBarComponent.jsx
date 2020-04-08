import React from 'react'
import './components.styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'

function NavBarComponent() {
    return (
        <>
            <Navbar className="navbar" expand="lg">
                <Navbar.Brand href="#home" className="text1">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#chart" className="text1">DataPlots</Nav.Link>
                        <NavDropdown title="Links" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://www.google.com/" className="text1">Google</NavDropdown.Item>
                            <NavDropdown.Item href="https://react-bootstrap.github.io/" className="text1">React Bootstrap</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.youtube.com/" className="text1">YouTube</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavBarComponent
