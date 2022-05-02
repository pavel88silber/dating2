import React from 'react';
import { createRoot } from "react-dom/client";
import { Container, Card, Row, Col, Button, Alert, Breadcrumb, Form, Nav, Navbar, NavDropdown, FormControl } from 'react-bootstrap';
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

export default function Notfoundpage() {
    return (
        <div>
            <p>
                Page not found
            </p>
            <a href='/'>Go to homepage</a>
        </div>
        
    )
}