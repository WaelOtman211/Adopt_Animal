import React, {useEffect, useState}  from 'react';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import LogIn from './Component/LogIn';
import Nav from './Component/Nav';
import SignUp from './Component/signUp';
import About from './Component/About';
import HomePage from './Component/HomePage';
import AdoptCondition from './Component/AdoptCondition';
import "./App.css"

function App() {

 /*  const [usernameSignUp, setusernameSignUp] = useState('')
  const [passwordSignUp, setpasswordSignUp] = useState('')
  useEffect(() => {
    fetch("http://localhost:4000/api",{
    username: usernameSignUp,
    password: passwordSignUp}).then((response) =>{
      console.log(response);
    });
  }) */
  return (
    <BrowserRouter>
    {/*    {usernameSignUp.length?(
        usernameSignUp.map((x)=>(
             <div key={x.id}>
               <p>{x.username}</p>
             </div>
        ))
       ):(
           <p>no data</p>
       )} */}
        <div className="app">
          <Nav />
          <div className="main">
          <Routes>
          <Route path="/LogIn" element= {<LogIn/>}/>
          <Route path="/SignUp" element= {<SignUp/>}/>
          <Route path="/About" element= {<About/>}/>
          <Route path="/HomePage" element= {<HomePage/>}/>
          <Route path="/AdoptCondition" element= {<AdoptCondition/>}/>
          </Routes>
          </div>
        </div>
        </BrowserRouter> 
        
  );
}


export default App;
