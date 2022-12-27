import React from 'react';

const LogIn = () =>{
    return(
        <div className='login'>
          <label htmlFor="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>
<br></br>
    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
        <br></br>
    <button type="submit">Login</button>
            

        </div>
    )

}

export default LogIn;