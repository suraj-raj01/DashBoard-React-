import { Link, Outlet } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";


import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
function myClick() {
    setTimeout(
        function () {
            document.getElementById('navbar').style.display = 'block';
            document.getElementById('layout').style.display = 'block';
            document.getElementById('footer').style.display = 'block';
        }, 700);
}
myClick();

const Layout = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({});

    const [userid, setUserid] = useState("");
    const [pwd, setPwd] = useState("");

// ---------------------for registration-------------------------
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

// -------------------------for login----------------------------
    const [showlogin, setShowlogin] = useState(false);
    const handleCloselogin = () => setShowlogin(false);
    const handleShowlogin = () => setShowlogin(true);
    
// useNavigate is basically used for the jump one page to another page
    const mynav = useNavigate();
// -----------------------------------------------------------
    // handle Register code
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput(values => ({ ...values, [name]: value }))
        console.log(input);
    }

    const handleSubmit = () => {
        let url = "http://localhost:3000/Customer";
        axios.post(url, input).then((res) => {
            setShow(false);
            toast.success("You are Succesfully Registered!!!");
        })
    }
// -----------------------------------------------------------
    // Login form handle code
    const handleLogin = () => {
        let api = `http://localhost:3000/Customer?userid=${userid}`
        axios.get(api).then((res) => {
            if (res.data.length >= 1) {
                if (res.data[0].password == pwd) {
                    localStorage.setItem("uname", res.data[0].name)
                    localStorage.setItem("uemail", res.data[0].email)
                    toast.success("Welcome Mr. " + res.data[0].name.toUpperCase())
                    mynav("/home");
                    setShowlogin(false)
                }
                else {
                    toast.error("Wrong Password!!");
                }
            }
            else {
                toast.error("Invalid Username!!")
            }

        })
    }

    // --------------this function helps jump to another page---------------
        function searchData() {
        navigate("/search");
        toast.success("Search Data here...");
    }

    return (
        <>
            <div>
            {/* -------------------------------Navbar Code-------------------------------------- */}
                <Navbar expand="lg" id='navbar'>
                    <Container fluid>
                        <Navbar.Brand as={Link} to="home" style={{ fontWeight: 'bold' }}>FEES MANAGEMENT</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '300px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="home">Home</Nav.Link>
                                <Nav.Link as={Link} to="insert">Insert</Nav.Link>
                                <Nav.Link as={Link} to="search">Search</Nav.Link>
                                <Nav.Link as={Link} to="update">Update</Nav.Link>
                                <Nav.Link as={Link} to="display">Display</Nav.Link>
                            </Nav>
                            <div style={{ display: 'flex' }}>
                                <Nav.Link as={Link} to="/" onClick={handleShowlogin}><i className="pi pi-sign-in"></i></Nav.Link>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <Nav.Link as={Link} to="/" onClick={handleShow}><i className="pi pi-user-plus"></i></Nav.Link>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Nav.Link as={Link} target="_blank" to="https://github.com/suraj-raj01/DashBoard-React-.git"><i className="pi pi-github"></i></Nav.Link>
                                &nbsp;&nbsp;&nbsp;
                                <Nav.Link as={Link} target="_blank" to="https://www.linkedin.com/in/suraj-kumar-1965b0296/"><i className="pi pi-linkedin"></i></Nav.Link>
                            </div>
                            
                            {/* <Form className="d-flex">
                                <Form.Control
                                    className="me-2"
                                    aria-label="Search"
                                    placeholder="Search"
                                    type="search"
                                />
                                <Button variant="outline-info" onClick={searchData}>Search</Button>
                            </Form> */}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div id='layout'>
                    <Outlet />
                </div>
                {/*<hr />*/}

{/* ------------------------------------footer pate----------------------------------- */}
                <div id="footer" style={{ margin: '5px 0px', fontWeight: '500', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <Row>
                        <Col ></Col>
                        <Col xs={12}>
                            <p>CRUD-Application Created by @_surajkumar <br />Everythig is reserved by Copyright ©myfeesmanagement.com
                            </p></Col>
                        <Col></Col>
                    </Row>
                </div>
            </div>

{/* ------------------------------------------------------------------------------------ */}
          
            {/* // Register modal code */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>User Registration Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter name</Form.Label>
                            <Form.Control
                                type="text" name="name" onChange={handleInput} autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email" name="email" onChange={handleInput}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter UserID</Form.Label>
                            <Form.Control
                                type="text" name="userid" onChange={handleInput}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter Password</Form.Label>
                            <Form.Control
                                type="password" name="password" onChange={handleInput}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="info" onClick={handleSubmit}>
                        Registered
                    </Button>
                </Modal.Footer>
            </Modal>

{/* --------------------------------------------------------------------------------------------- */}
            {/* // Login Data modal code */}

            <Modal show={showlogin} onHide={handleCloselogin}>
                <Modal.Header closeButton>
                    <Modal.Title>User Login Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter Userid</Form.Label>
                            <Form.Control
                                type="text" name="userid" value={userid} onChange={(e) => { setUserid(e.target.value) }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter Password</Form.Label>
                            <Form.Control
                                type="password" name="password" value={pwd} onChange={(e) => { setPwd(e.target.value) }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleCloselogin}>
                        Close
                    </Button>
                    <Button variant="info" onClick={handleLogin} >
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </>
    )
}
export default Layout;