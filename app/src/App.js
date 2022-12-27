import React , {Component} from 'react';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import LogIn from './Component/LogIn';
import Nav from './Component/Nav';
import SignUp from './Component/signUp';

class App extends Component{
render () {
  return (
    <BrowserRouter>
    <div className="app">
      <Nav />
      <Routes>
      <Route path="/LogIn" component= {LogIn}/>
      <Route path="/signUp" component= {SignUp}/>
      </Routes>
    </div>
    </BrowserRouter> 
  );
}
}

export default App;
