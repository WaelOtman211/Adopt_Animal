import React  from 'react';
import "./styles/HomePage.css"
import HomePageItem from './HomePageItem';
import { Link } from 'react-router-dom';
function HomePage(){
     return(
     <div>
     <h1>Find Your New Best Friend</h1>
       <div className='homeItems'>
         <Link to="/DogsPage">
        <HomePageItem img="/Dogs.png" title="Dogs"/>
        </Link>
        <Link to="/CatsPage">
        <HomePageItem img="/Cats.png" title="Cats"/>
        </Link>
        <Link to="/HorsesPage">
        <HomePageItem img="/Horses.png" title="Horses"/>
        </Link>
        <Link to="/RabbitsPage">
        <HomePageItem img="/Rabits.png" title="Rabbits"/>
        </Link>
        </div>
     </div>
     );
}

export default HomePage;