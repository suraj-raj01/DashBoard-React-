import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Insert = () => {
  const myNav1 = useNavigate();
  const [input, setInput] = useState({});
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let api = "http://localhost:3000/Student";
    axios.post(api, input).then((res) => {
      console.log(res.data);
      toast.success("Data added Successfully!!!");
      myNav1("/display");
    });
  };

  const jump1 = () => {
    myNav1("/home");
  };
  const jump2 = () => {
    myNav1("/search");
  };

  return (
    <>
    <br />
      <center>
        <h2>INSERT STUDENT DATA</h2>
      </center>
      <Container
        style={{
          height: "100%",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          backgroundColor: "",
          borderRadius: "10px",
        }}
      >
        <Form id="form">
          <br />
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="id"
              placeholder="enrollment number"
              value={input.id}
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="rollno"
              placeholder="roll number"
              value={input.rollno}
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="name"
              placeholder="full name"
              value={input.name}
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="city"
              placeholder="address"
              value={input.city}
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="fees"
              placeholder="semester fees"
              value={input.fees}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <button id="btns" onClick={handleSubmit}>
              Submit
            </button>
          </Form.Group>

          <button id="jump-btn1" onClick={jump1}>
            ⟪
          </button>
          <button id="jump-btn2" onClick={jump2}>
            ⟫
          </button>
        </Form>
      </Container>
      <ToastContainer />
    </>
  );
};
export default Insert;
