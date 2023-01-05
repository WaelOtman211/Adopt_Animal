import React,{useState} from 'react';
import "./styles/Login.css"
import Axios from 'axios';
const LogIn = () => {
   
        

    const [usernameLogin, setusernameLogin] = useState('')
    const [passwordLogin, setpasswordLogin] = useState('')
    const [loginstatus, setloginstatus] = useState('')

     /* const submit = useEffect(() => {
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
    })  */

    const onSubmit = async (e) => {
        e.preventDefault()
        const get = {
          username: usernameLogin,
          password: passwordLogin
      }
        try {
          const response = await Axios.get('http://localhost:4000/LogIn', get);
          if(response.data.message){
            setloginstatus(response.data.message);
        }
        else{
            setloginstatus(response.data[0].username)
        }
     }
         catch (e) {
          alert(e)
        }
      } 
    
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

                <button onClick={onSubmit}>Login</button>
                <h1>{loginstatus}</h1>
        </div>
    

)
            }
export default LogIn;