import { useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
const Search = () => {
    const myNav1 = useNavigate();
    const [rollno, setRollno] = useState("");
    const [mydata, setMydata] = useState([]);
    const mySearch = () => {
        let url = `http://localhost:3000/Student?rollno=${rollno}`
        axios.get(url).then((res) => {
            setMydata(res.data);
        });
    }
    const ans = mydata.map((key) => {
        return (
            <>
                <tr>
                    <td>{key.id}</td>
                    <td>{key.rollno}</td>
                    <td>{key.name}</td>
                    <td>{key.city}</td>
                    <td>{key.fees+" INR"}</td>
                </tr>
            </>
        )
    })
    const jump1 = () => {
        myNav1("/insert");
    }
    const jump2 = () => {
        myNav1("/update");
    }
    return (
        <div style={{ backgroundColor: '', width: '100%', height: '100%', textAlign: 'center', color: 'black', borderRadius: '10px', padding: '15px 20px' }}>
            <h2>SEARCH DATA</h2><br />
            {/* <input id="search" type='text' placeholder='enter rollno...' value={rollno} onChange={(e) => {
                setRollno(e.target.value)
            }} />
            <button id="search-btn" onClick={mySearch}>Search</button><br /> */}

            <Form className="d-flex">
                <Form.Control style={{ width: '300px' }}
                    className="me-2"
                    aria-label="Search"
                    placeholder='Enter rollno...'
                    value={rollno} onChange={(e) => {
                        setRollno(e.target.value)
                    }}
                />
                <Button variant="outline-info" onClick={mySearch}>Search</Button>
            </Form>
            <hr />
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
export default Search;