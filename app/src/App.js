import React  from 'react';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import LogIn from './Component/LogIn';
import Nav from './Component/Nav';
import SignUp from './Component/signUp';
import About from './Component/About';
import HomePage from './Component/HomePage';
import AdoptCondition from './Component/AdoptCondition';
import MyFav from './Component/MyFav';
import "./App.css"
import AnimalPage from './Component/AnimalPage';
import AnimalDataPage from './Component/AnimalDataPage';

function App(){
  const[favList,setFavList]=React.useState([]);
 const[AnimalData,setAnimalData]=React.useState([]);
    return (
    <BrowserRouter forceRefresh="false">
       
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
          <Route path="/DogsPage" element= {<AnimalPage type='dog' favList={favList} setFavList={setFavList}  setAnimalData={setAnimalData}/>}/>
          <Route path="/RabbitsPage" element= {<AnimalPage type='rabbit' favList={favList} setFavList={setFavList} setAnimalData={setAnimalData} />}/>
          <Route path="/CatsPage" element= {<AnimalPage type='cat' favList={favList} setFavList={setFavList}  setAnimalData={setAnimalData} />}/>
          <Route path="/HorsesPage" element= {<AnimalPage type='horse' favList={favList} setFavList={setFavList} setAnimalData={setAnimalData} />}/>
          <Route path="/MyFavorite" element= {<MyFav favList={favList} setFavList={setFavList} setAnimalData={setAnimalData}/>}/>
          <Route path="/AnimalDataPage" element= {<AnimalDataPage AnimalData={AnimalData}  />}/>
          </Routes>
          </div>
        </div>
        </BrowserRouter> 
  );

}

export default App;
