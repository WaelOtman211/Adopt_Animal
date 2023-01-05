import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import "./styles/Login.css"
const LogIn = () => {


    const [usernameLogin, setusernameLogin] = useState('')
    const [passwordLogin, setpasswordLogin] = useState('')
    const [loginstatus, setloginstatus] = useState('')

    useEffect(() => {
        Axios.get("http://localhost:4000/LogIn", { 
            username: usernameLogin,
            password: passwordLogin
        }).then((response) => {
            if(response.data.message){
                setloginstatus(response.data.message);
            }
            else{
                setloginstatus(response.data[0].username)
            }
         
        });
    })

    return (
        <div className='login'>
           
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" onChange={(e) => {
                    setusernameLogin(e.target.value);
                }} placeholder="Enter Username" name="uname" value={usernameLogin} required />
                <br></br>
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" onChange={(e) => {
                   setpasswordLogin(e.target.value);
                }} placeholder="Enter Password" name="psw" value={passwordLogin} required />

                <button onClick={LogIn}>Login</button>
                <h1>{loginstatus}</h1>
        </div>
    )

}

export default LogIn;