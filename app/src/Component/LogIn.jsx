import React from 'react';
import "./styles/Login.css"
const LogIn = () =>{
    return(
        

        <div className='login'>
          <form>
          <label htmlFor="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>
<br></br>
    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
    
       
        <button type="submit">Login</button>
            
        </form> 
        </div>
    )

}

export default LogIn;