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
 
import "./App.css"
class App extends React.Component{
render () {
  return (
    <BrowserRouter>
       
        <div className="app">
          <Nav />
          <div className="main">
          <Routes>
          <Route path="/LogIn" element= {<LogIn/>}/>
          <Route path="/SignUp" element= {<SignUp/>}/>
          <Route path="/About" element= {<About/>}/>
          <Route path="/HomePage" element= {<HomePage/>}/>
          <Route path="/AdoptCondition" element= {<AdoptCondition/>}/>
          <Route path="/DogsPage" element= {<DogsPage/>}/>
          <Route path="/RabitsPage" element= {<RabitsPage/>}/>
          <Route path="/CatsPage" element= {<CatsPage/>}/>
          <Route path="/HorsesPage" element= {<HorsesPage/>}/>
          </Routes>
          </div>
        </div>
        </BrowserRouter> 
  );
}
}

export default App;
