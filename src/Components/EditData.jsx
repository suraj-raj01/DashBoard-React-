import {useParams} from "react-router-dom";
import axios from "axios";
import {useState,useEffect} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditData = () =>{
    const {id} = useParams();
    const [mydata,setMydata] = useState({});
    const loadData = (()=>{
        let url = `http://localhost:3000/Student/${id}`;
        axios.get(url).then((res)=>{
            setMydata(res.data);
        })
    })
    useEffect(() => {
        loadData();
    }, []);
    const handleInput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setMydata(values=>({...values,[name]:value}));
    }
    const handleSubmit = () =>{
        let url = `http://localhost:3000/Student/${id}`;
        console.log(mydata);
        axios.put(url,mydata).then((res)=>{
//         console.log(res.data);
//         alert("data updated!!!");
                toast.success("Data edited Successfully!!!");
        })
    }

    return(
        <>
            <div style={{
                backgroundColor: '',
                width: '100%',
                height: '100%',
                textAlign: 'center',
                color: 'black',
                borderRadius: '10px',
                display: 'flex',
                flexDirection:'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <h2> EDIT STUDENT DATA </h2>
                <div style={
                    {
                        height:'480px',
                        width:'600px',
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center',
                        justifyContent:'center'
                    }
                }>
                    {/*Enter Rollno <input type="text" name="rollno" value={mydata.rollno} onChange={handleInput}/>*/}
                    {/*<br/>*/}
                    {/*Enter Rollno <input type="text" name="name" value={mydata.name} onChange={handleInput}/>*/}
                    {/*<br/>*/}
                    {/*Enter Rollno <input type="text" name="city" value={mydata.city} onChange={handleInput}/>*/}
                    {/*<br/>*/}
                    {/*Enter Rollno <input type="text" name="fees" value={mydata.fees} onChange={handleInput}/>*/}
                    {/*<br/>*/}
                    {/*<button onClick={handleSubmit}> Data Save</button>*/}

                    <Form id='form' style={{width: '400px', color: 'black'}}>
                        <br/>

                        <Form.Group className="mb-3">
                            <Form.Control type="text" name='rollno'  value={mydata.rollno} onChange={handleInput} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="text" name='name' value={mydata.name} onChange={handleInput} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="text" name='city' value={mydata.city} onChange={handleInput} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="text" name='fees' value={mydata.fees} onChange={handleInput} />
                        </Form.Group>
                        <br/>
                        <Button variant="primary" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}
export default EditData;