import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Form, FormControl, Image, Nav, Navbar,  Button } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Image src="../../favicon.png" width="50" height="50" rounded />
                <Navbar.Brand href="index.html">CHALLONGE!</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#torneos">Torneos</Nav.Link>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Nav>
                <Button variant="light">Iniciar Sesión</Button><pre>   </pre>
                <Button variant="warning">Registrarse</Button>
            </Container>
        </Navbar>
    );
}

export default Header;