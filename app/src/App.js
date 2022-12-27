import React  from 'react';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import LogIn from './Component/LogIn';
import Nav from './Component/Nav';
import SignUp from './Component/signUp';

class App extends React.Component{
render () {
  return (
    <BrowserRouter>
    <div className="app">
      <Nav />
      <Routes>
      <Route path="/LogIn" element= {<LogIn/>}></Route>
      <Route path="/signUp" element= {<SignUp/>}/>
      </Routes>
    </div>
    </BrowserRouter> 
  );
}
}

export default App;
