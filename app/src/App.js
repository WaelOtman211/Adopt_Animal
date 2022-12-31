import React  from 'react';
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
 import { getToken } from './utils/getUserData';
import "./App.css"
function App(){
  const[favList,setFavList]=React.useState([]);
React.useEffect(()=>{
 
//getToken();// auto token 
},[])
    return (
    <BrowserRouter>
       
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

}

export default App;
