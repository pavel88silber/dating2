import React from 'react';
import { createRoot } from "react-dom/client";
import { Container, Card, Row, Col, Button, Alert, Breadcrumb, Form, Nav, Navbar, NavDropdown, FormControl } from 'react-bootstrap';
// import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Weather from './Weather';

export default function Favorite() {
    return (
        <div>
            <p>
                Favorite page
            </p>
            <Weather />
        </div>
        
    )
}