import React from 'react';
import { createRoot } from "react-dom/client";
import { Container, Card, Row, Col, Button, Alert, Breadcrumb, Form } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import users from "./userstest";
// import usertestObj  from './usertestObj';
// const userArr =[];

export default function Thumbnail() {
    // const usr = Object.values(usertestObj);
    // for (const val in usr) {
    //     userArr.push(val);
    // }
    // console.log('test => ' + userArr)



    return (
            <ul>
                {users.map((user, index)=>
                <li className='cardBody' key={index}>
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

