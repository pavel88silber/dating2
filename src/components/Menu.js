import React from 'react';
import { createRoot } from "react-dom/client";
import { Container, Card, Row, Col, Button, Alert, Breadcrumb, Form, Nav, Navbar, NavDropdown, FormControl } from 'react-bootstrap';
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <Navbar bg="light" expand="lg" className='menuText'>
        <Container fluid>
          <Navbar.Brand href="#">
            <Link to="/" className='menuLinks'>Dating</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <Nav.Link as={Link}to="/" className='menuLinks'>Home
                {/* <Link to="/" className='menuLinks'>Home</Link> */}
              </Nav.Link>
              <Nav.Link>
                <Link to="/favorite" className='menuLinks'>Favorite</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/message" className='menuLinks'>Messages</Link>
              </Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        
    )
}