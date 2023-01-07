import React,{useState} from 'react';
import "./styles/signUp.css"
import Axios from 'axios';
import { useNavigate } from "react-router-dom";


 const SignUp = () => {
    const [usernameSignUp, setusernameSignUp] = useState('')
    const [passwordSignUp, setpasswordSignUp] = useState('')
    const navigate= useNavigate()
   
        const onSubmit = async (e) => {
          e.preventDefault()
          const post = {
            username: usernameSignUp,
            password: passwordSignUp
        }
          try {
            const res = await Axios.post('http://localhost:4000/SignUp', post)
            console.log(res)
            navigate("/LogIn")
          } catch (e) {
            alert(e)
          }
        }
    
   
    return (
        <div className='login'>
            <form>
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" onChange={(e) => {
                    setusernameSignUp(e.target.value);
                }} placeholder="Enter Username" name="username" value={usernameSignUp} required />
                <br></br>
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" onChange={(e) => {
                    setpasswordSignUp(e.target.value);
                }} placeholder="Enter Password" name="password" value={passwordSignUp} required />


                <button onClick={onSubmit}>SignUp</button>

               </form>
           </div>

)
            }
export default SignUp;