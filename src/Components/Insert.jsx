import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Insert = () => {
    const myNav1 = useNavigate();
    const [input, setInput] = useState({});
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput((values) => ({ ...values, [name]: value }))
        console.log(input)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let api = "http://localhost:3000/Student";
        axios.post(api, input).then((res) => {
            console.log(res.data);
            toast.success("Data edited Successfully!!!");
        })
    }
    const jump1 = () => {
        myNav1("/home");
    }
    const jump2 = () => {
        myNav1("/search");
    }
    return (
        <>
            <Container style={{ height: '100%', display: 'flex', alignItems: 'start', justifyContent: 'center', backgroundColor: '', borderRadius: '10px' }}>
                <Form id='form' style={{ width: '400px', color: 'black' }}>
                    <br />
                    <center><h2 style={{ padding: '0px 20px' }}>INSERT DATA</h2></center><br />
                    <Form.Group className="mb-3">
                        <Form.Control type="text" name='id' placeholder="student id" value={input.id} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="text" name='rollno' placeholder="student rollno" value={input.rollno} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="text" name='name' placeholder="student name" value={input.name} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="text" name='city' placeholder="student city" value={input.city} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="text" name='fees' placeholder="student fees" value={input.fees} onChange={handleInput} />
                    </Form.Group>
                    <br />
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                    <button id="jump-btn1" onClick={jump1}>⟪</button>
                    <button id="jump-btn2" onClick={jump2}>⟫</button>
                </Form>
            </Container>
            <ToastContainer />
        </>
    )
}
export default Insert;