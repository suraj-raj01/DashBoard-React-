import { useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
const SearchByName = () => {
    const myNav1 = useNavigate();
    const [name, setName] = useState("");
    const [mydata, setMydata] = useState([]);
    const mySearch = (e) => {
        let stdname = e.target.value;
        setName(stdname);
        let url = `http://localhost:3000/Student/`
        axios.get(url).then((res) => {
            setMydata(res.data);
            console.log(res.data);
        });
    }
    const ans = mydata.map((key) => {
        const str = key.name.toUpperCase();
        const status = str.includes(name.toUpperCase());
        if(status){
        return (
            <>
                <tr>
                    <td>{key.id}</td>
                    <td>{key.rollno}</td>
                    <td>{key.name.toUpperCase()}</td>
                    <td>{key.city}</td>
                    <td>{key.fees + ".00₹"}</td>
                </tr>
            </>
        )
    }
    })
    const jump1 = () => {
        myNav1("/insert");
    }
    const jump2 = () => {
        myNav1("/update");
    }
    const search = () =>{
        myNav1("/search")
    }
    return (
        <div style={{ backgroundColor: '', width: '100%', height: '100%', textAlign: 'center', color: 'black', borderRadius: '10px', padding: '15px 20px' }}>
            <h2>SEARCH DATA</h2><br />
            {/* <input id="search" type='text' placeholder='enter rollno...' value={rollno} onChange={(e) => {
                setRollno(e.target.value)
            }} />
            <button id="search-btn" onClick={mySearch}>Search</button><br /> */}
            <div id="search_div">
            <Form className="d-flex">
                <Form.Control id="search_form"
                    className="me-2"
                    aria-label="Search"
                    placeholder='Enter student name....'
                    value={name} 
                    onChange={mySearch}
                />
                <Button variant="outline-info">Search</Button>      
            </Form>
            <Nav.Link id="searchbyname" onClick={search}>Search by rollno ⇨</Nav.Link>    
            </div>
            <br />
            <Table striped bordered hover id='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Rollno</th>
                        <th>Student Name</th>
                        <th>ADDRESS</th>
                        <th>Fees</th>
                    </tr>
                </thead>
                <tbody>
                    {ans}
                </tbody>
                <button id="jump-btn1" onClick={jump1}>⟪</button>
                <button id="jump-btn2" onClick={jump2}>⟫</button>
            </Table>
        </div>
    )
}
// for search in json we have to run command url/?name="value".
export default SearchByName;