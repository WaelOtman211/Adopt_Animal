import React, {useEffect, useState}  from 'react';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import LogIn from './Component/LogIn';
import Nav from './Component/Nav';
import SignUp from './Component/signUp';
import About from './Component/About';
import HomePage from './Component/HomePage';
import AdoptCondition from './Component/AdoptCondition';
import DogsPage from './Component/DogsPage';
import RabitsPage from './Component/RabitsPage';
import HorsesPage from './Component/HorsesPage';
import CatsPage from './Component/CatsPage';

import "./App.css"
<<<<<<< HEAD

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
=======
function App(){
  const[favList,setFavList]=React.useState([]);

    return (
>>>>>>> c5076ce0fae81b89fdb5f1f4fd9e27c4b4e8cbae
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
          <Nav favList={favList}  />
          <div className="main">
          <Routes>
          <Route path="/LogIn" element= {<LogIn/>}/>
          <Route path="/SignUp" element= {<SignUp/>}/>
          <Route path="/About" element= {<About/>}/>
          <Route exact path="/" element= {<HomePage/>}/>
          <Route path="/HomePage" element= {<HomePage/>}/>
          <Route path="/AdoptCondition" element= {<AdoptCondition/>}/>
          <Route path="/DogsPage" element= {<DogsPage favList={favList} setFavList={setFavList} />}/>
          <Route path="/RabitsPage" element= {<RabitsPage favList={favList} setFavList={setFavList} />}/>
          <Route path="/CatsPage" element= {<CatsPage favList={favList} setFavList={setFavList} />}/>
          <Route path="/HorsesPage" element= {<HorsesPage favList={favList} setFavList={setFavList} />}/>
          </Routes>
          </div>
        </div>
        </BrowserRouter> 
        
  );
<<<<<<< HEAD
}

=======

}
>>>>>>> c5076ce0fae81b89fdb5f1f4fd9e27c4b4e8cbae

export default App;
