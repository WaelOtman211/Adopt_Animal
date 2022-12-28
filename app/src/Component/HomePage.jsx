import React  from 'react';
import "./styles/HomePage.css"
import HomePageItem from './HomePageItem';
function HomePage(){
     return(
     <div>
     <h1>Find Your New Best Friend</h1>
       <div className='homeItems'>
        <HomePageItem img="/Dogs.png" title="Dogs"/>
        <HomePageItem img="/Cats.png" title="Cats"/>
        <HomePageItem img="/Horses.png" title="Horses"/>
        <HomePageItem img="/Rabits.png" title="Rabits"/>
        </div>
     </div>
     );
}

export default HomePage;