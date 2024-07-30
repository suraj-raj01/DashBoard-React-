import axios from "axios";
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Display = () => {
    const myNav1 = useNavigate();
    const [myData, setMydata] = useState([]);
    const loadData = () => {
        let url = "http://localhost:3000/Student";
        axios.get(url).then((res) => {
            console.log(res.data);
            setMydata(res.data);
        })
    }
    useEffect(() => {
        loadData();
    }, [])
    const ans = myData.map((key) => {
        return (
            <>
                <tr>
                    <td>{key.id}</td>
                    <td>{key.rollno}</td>
                    <td>{key.name}</td>
                    <td>{key.city}</td>
                    <td>{key.fees+" INR "}</td>
                </tr>
            </>
        )
    })
    const jump1 = () => {
        myNav1("/update");
    }
    const jump2 = () => {
        myNav1("/display");
    }
    return (
        <>
            <div style={{ backgroundColor: '', width: '100%', height: '100%', textAlign: 'center', color: 'black', borderRadius: '10px', padding: '15px 20px' }}>
                <h2 style={{ position: 'sticky', top: '15px', backgroundColor: 'white' }}>DISPLAY DATA</h2>
                <Table striped bordered hover id='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ROLL NO</th>
                            <th>NAME</th>
                            <th>CITY</th>
                            <th>FEES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ans}
                    </tbody>
                    <button id="jump-btn1" onClick={jump1}>⟪</button>
                    <button id="jump-btn2" onClick={jump2}>⟫</button>
                </Table>
            </div>
        </>
    )
}
export default Display;