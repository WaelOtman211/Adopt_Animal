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
import AdoptHistory from './Component/AdoptHistory';
import Axios from 'axios';



function App(){
  const[favList,setFavList]=React.useState([]);
 const[AnimalData,setAnimalData]=React.useState([]);
const [loggedUser,setLoggedUser]=React.useState(null)


async function getfavorite(){
  let res = await Axios.get('http://localhost:4000/getFavorite')
  
      setFavList(res.data.filter(x=> x.userID==loggedUser))

}      
React.useEffect(() => {

getfavorite()

},[])


    return (
    <BrowserRouter forceRefresh="false">
       
        <div className="app">
          <Nav favList={favList} loggedUser={loggedUser} />
          <div className="main">
          <Routes>
          <Route path="/LogIn" element= {<LogIn setLoggedUser={setLoggedUser}/>}/>
          <Route path="/SignUp" element= {<SignUp/>}/>
          <Route path="/About" element= {<About/>}/>
          <Route exact path="/" element= {<HomePage/>}/>
          <Route path="/HomePage" element= {<HomePage/>}/>
          <Route path="/AdoptCondition" element= {<AdoptCondition/>}/>
          <Route path="/DogsPage" element= {<AnimalPage type='dog' loggedUser={loggedUser} favList={favList} setFavList={setFavList}  setAnimalData={setAnimalData}/>}/>
          <Route path="/RabbitsPage" element= {<AnimalPage type='rabbit' loggedUser={loggedUser} favList={favList} setFavList={setFavList} setAnimalData={setAnimalData} />}/>
          <Route path="/CatsPage" element= {<AnimalPage type='cat' loggedUser={loggedUser} favList={favList} setFavList={setFavList}  setAnimalData={setAnimalData} />}/>
          <Route path="/HorsesPage" element= {<AnimalPage type='horse' loggedUser={loggedUser} favList={favList} setFavList={setFavList} setAnimalData={setAnimalData} />}/>
          <Route path="/MyFavorite" element= {<MyFav favList={favList} setFavList={setFavList} setAnimalData={setAnimalData}/>}/>
          <Route path="/AnimalDataPage" element= {<AnimalDataPage loggedUser={loggedUser} AnimalData={AnimalData}  />}/>
          <Route path="/AdoptHistory" element={<AdoptHistory loggedUser={loggedUser} setAnimalData={setAnimalData}/>}/>
          </Routes>
          </div>
        </div>
        </BrowserRouter> 
  );

}

export default App;
