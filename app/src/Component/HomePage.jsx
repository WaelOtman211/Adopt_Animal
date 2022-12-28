import React  from 'react';
import "./styles/HomePage.css"
import HomePageItem from './HomePageItem';
function HomePage(){
     return(
     <div>
     <h1>Find Your New Best Friend</h1>
       <div className='homeItems'>
         <a  href="/DogsPage">
        <HomePageItem img="/Dogs.png" title="Dogs"/>
        </a>
        <a href="/CatsPage">
        <HomePageItem img="/Cats.png" title="Cats"/>
        </a>
        <a href="/HorsesPage">
        <HomePageItem img="/Horses.png" title="Horses"/>
        </a>
        <a href="/RabitsPage">
        <HomePageItem img="/Rabits.png" title="Rabits"/>
        </a>
        </div>
     </div>
     );
}

export default HomePage;