import React from 'react';
import { createRoot } from "react-dom/client";
import { Container, Card, Row, Col, Button, Alert, Breadcrumb, Form, Nav, Navbar, NavDropdown, FormControl } from 'react-bootstrap';
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Message() {
    return (
        <Container>
            <Row>
                <Col>
                    <ul className='messageList'>
                        <li>Alex</li>
                        <li>Haim</li>
                        <li>Shuki</li>
                    </ul>
                </Col>
                <Col>
                    <ul className='message'>
                        <li>Hello my name is Haim, I leave in Tel Aviv</li>
                    </ul>
                </Col>
            </Row>
        </Container>
        
    )
}