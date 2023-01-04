import  React,{ useState, useEffect } from 'react';
import Axios from 'axios';
import "./styles/signUp.css"

const SignUp = () => {
    const [usernameSignUp, setusernameSignUp] = useState('')
    const [passwordSignUp, setpasswordSignUp] = useState('')

    

    useEffect(() => {
        Axios.post("http://localhost:4000/SignUp", {
            username: usernameSignUp,
            password: passwordSignUp
        }).then((response) => {
            console.log(response);
        });
    })
    return (
        <div className='login'>
           
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" onChange={(e) => {
                    setusernameSignUp(e.target.value);
                }} placeholder="Enter Username" name="uname" value={usernameSignUp} required />
                <br></br>
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" onChange={(e) => {
                    setpasswordSignUp(e.target.value);
                }} placeholder="Enter Password" name="psw" value={passwordSignUp} required />


                <button onClick={SignUp}>SignUp</button>

               
           

        </div>
    )

            }

export default SignUp;