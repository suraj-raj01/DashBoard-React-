import axios from "axios";
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Update = () => {
    const myNav = useNavigate();
    const myNav1 = useNavigate();
    const [myData, setMydata] = useState([]);
    const loadData = () => {
        let url = "http://localhost:3000/Student";
        axios.get(url).then((res) => {
            // console.log(res.data);
            setMydata(res.data);
        })
    }
    //Runs only on the first render
    useEffect(() => {
        loadData();
    }, [])
    // myDel method is used to delete data
    const myDel = (myid) => {
        let url = `http://localhost:3000/Student/${myid}`;
        axios.delete(url).then((res) => {
            // console.log(res.data)
            toast.warning("Record deleted Successfully!!");
            loadData();
        })
    }
    // this function will go to the EditData page
    const myEdit = (myid) => {
        myNav(`/myedit/${myid}`)    // /myedit/101
    }
    const jump1 = () => {
        myNav1("/search");
    }
    const jump2 = () => {
        myNav1("/display");
    }
    const ans = myData.map((key) => {
        return (
            <>
                <tr>
                    <td>{key.id}</td>
                    <td>{key.rollno}</td>
                    <td>{key.name.toUpperCase()}</td>
                    <td>{key.city}</td>
                    <td>{key.fees}{".00 ₹"}</td>
                    <td>
                        <a href="#">
                            <img src="/Images/edit.png" width="22" height="22" onClick={() => { myEdit(key.id) }} />
                        </a>&nbsp;&nbsp;&nbsp;
                        <a href="#">
                            <img src="/Images/delete.png" width="25" height="25" onClick={() => { myDel(key.id) }} />
                        </a>
                    </td>
                </tr>
            </>
        )
    })

    return (
        <>
            <div style={{ backgroundColor: '', width: '100%', height: '100%', textAlign: 'center', color: 'black', borderRadius: '10px', padding: '15px 20px' }}>
                <h2 style={{ position: 'sticky', top: '15px' }}>UPDATE DATA</h2>
                <Table striped bordered hover id='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ROLL NO</th>
                            <th>NAME</th>
                            <th>ADDRESS</th>
                            <th>FEES</th>
                            <th>UPDATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ans}
                    </tbody>
                    <button id="jump-btn1" onClick={jump1}>⟪</button>
                    <button id="jump-btn2" onClick={jump2}>⟫</button>
                </Table>
            </div>
            <ToastContainer />
        </>
    )
}
export default Update;