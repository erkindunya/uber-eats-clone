import React from 'react';
import { Navbar, Nav, Form, NavDropdown, FormControl, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppNavbar = () => {
    return (
        <Navbar bg="white" variant="light" expand="xs">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Col>
                <Link to="/"><Navbar.Brand>UberEats</Navbar.Brand></Link>
            </Col>
            <Form >
                <FormControl type="text" placeholder="Search" />
            </Form>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Deliver Now" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Deliver Now</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Schedule for later</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>

                    <NavDropdown title="Yemi" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/1">Orders</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">Favourites</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3">Wallet</NavDropdown.Item>
                        <NavDropdown.Item href="#action/4">Help</NavDropdown.Item>
                        <NavDropdown.Item href="#action/5">Account</NavDropdown.Item>
                        <NavDropdown.Item href="#action/6">Promotions</NavDropdown.Item>
                        <NavDropdown.Item href="#action/7">Eats Pass</NavDropdown.Item>
                        <NavDropdown.Item href="#action/8">Sign out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar >

    )
}

export default AppNavbar;