import  React,{ useState, useEffect } from 'react';
import Axios from 'axios';
import "./styles/signUp.css"

 const SignUp = () => {
    const [usernameSignUp, setusernameSignUp] = useState('')
    const [passwordSignUp, setpasswordSignUp] = useState('')
/*  const data = async ()=>{ */
   /*  Axios.post("http://localhost:4000/SignUp", {
           username: usernameSignUp,
           password: passwordSignUp
       })
       .then( (response)  => {
            console.log(response);
    
        }) 
        .catch((error) => {
            console.log(error)
        });
     */
   /*   try {
        const body = {usernameSignUp,passwordSignUp};
        console.log(body);
        const res = await fetch("http://localhost:4000/SignUp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        console.log(res);
      } catch (err) {
        console.error(err.message);
      } 

    }  */
     
   
        const onSubmit = async (e) => {
          e.preventDefault()
          const post = {
            username: usernameSignUp,
            password: passwordSignUp
        }
          try {
            const res = await Axios.post('http://localhost:4000/SignUp', post)
            console.log(res.data)
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