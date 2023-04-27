import React from "react";

import { useState, useEffect } from "react";

import Button from 'react-bootstrap/Button';

import MyForm from "../containers/form/form";

function ReactApp(props) {
    const [data, setData] = useState('');
    const [check, setCheck] = useState(0);


    useEffect(() => {

    }, [data])
    const getData = (e) => {
        setCheck(check + 1);
        e.preventDefault();


    }
    const handleData = (e) => {

        setData(e.target.value);

    }
    return (
        <>
            <div className="split left">


                <div className="form-wrapper">
                    <strong> ENTER SCHEMA</strong>
                    <br />
                    <br />
                    <form>
                        <textarea placeholder='Enter Schema' rows={30} cols={40} onChange={(e) => setData(e.target.value)}></textarea>
                        <br />
                        <br />
                        <br />
                        <Button variant="dark" onClick={getData}>Submit</Button>
                    </form>
                </div>
            </div>
            <div className="split right ">

                <div className="form-wrapper">

                    {

                        check ?
                            <>
                                <h1> ENTER USER DETAILS</h1>
                                <MyForm Schema={data} />
                            </>
                            :
                            <h1>FORM WILL BE RENDERED HERE</h1>
                    }
                </div>

            </div>
        </>
    )
}

export default ReactApp;