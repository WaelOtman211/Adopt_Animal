import React  from 'react';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import LogIn from './Component/LogIn';
import Nav from './Component/Nav';
import SignUp from './Component/signUp';
import About from './Component/About';
import HomePage from './Component/HomePage';
import AdoptCondition from './Component/AdoptCondition';

class App extends React.Component{
render () {
  return (
    <BrowserRouter>
       
        <div className="app">
          <Nav />
          <Routes>
          <Route path="/LogIn" element= {<LogIn/>}/>
          <Route path="/SignUp" element= {<SignUp/>}/>
          <Route path="/About" element= {<About/>}/>
          <Route path="/HomePage" element= {<HomePage/>}/>
          <Route path="/AdoptCondition" element= {<AdoptCondition/>}/>
          </Routes>
        </div>
        </BrowserRouter> 
  );
}
}

export default App;
