import React from 'react';
import { createRoot } from "react-dom/client";
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Row, Col, Button, Alert, Breadcrumb, Form } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

import users from "./userstest";

export default function Thumbnail() {
    return (
            <ul>
                {users.map(user=>
                <li className='cardBody'>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img src={user.image}/>
                    <Card.Body>
                        <Card.Title>{user.firstName}</Card.Title>
                        <Card.Text>{user.lastName}</Card.Text>
                        <Card.Text>{user.age}</Card.Text>
                        <Button variant="primary">
                            message__
                            {user.firstName}
                        </Button>
                    </Card.Body>
                    </Card>
                </li>
                )}
            </ul>

    )
}

