// key  5a3525600ad90a560dadbee45af4eb51


import React from 'react';
import { createRoot } from "react-dom/client";
import { Container, Card, Row, Col, Button, Alert, Breadcrumb, Form, Nav, Navbar, NavDropdown, FormControl } from 'react-bootstrap';
// import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



export default function Wether() {
        
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Haifa&appid=5a3525600ad90a560dadbee45af4eb51')
       .then((res) => {
           return res.json()
            
           
        }
        )
        .then((data) => {
            console.log(data);
            document.querySelector('.city').textContent = data.name;
            document.querySelector('.temperature').innerHTML = Math.round((data.main.temp - 273)) +'&deg;';
            document.querySelector('.feature li').innerHTML = '<img src="https://openweathermap.org/img/wn/02d@2x.png"/>'
        })
        .catch(() => {console.log('error')})

        return (
            <>
                <p className='city'></p>
                <p className='temperature'></p>
                <ul>
                    <li className='feature'></li>
                </ul>
            </>
        )
    };