import React from 'react';
import {Link} from 'react-router-dom';
import "./styles/Nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
const Nav = (props) => {
    return (
        <div>
         
            <div className="navbar">
                <div className="container">
                    <a href="#" className="logo">PetsHome</a>
                    <ul className='TopNavLinks'>
                       <div className='fav'>
                        <Link to='/MyFavorite'> <FontAwesomeIcon icon={solid('heart')} size="2x"/></Link>
                       <p id="favNum" >{props.favList.length}</p>
                       </div>
                        <Link to="/LogIn">Login</Link>
                        <Link to="/signUp">Sign Up</Link>
                    </ul>
                </div>
            </div>
          

        <div className="LeftBar">
            
                 <Link to="/HomePage">HomePage</Link>
                 
                 <Link to="/About">About</Link>
               
                <Link to="/AdoptCondition">AdoptCondition</Link>
            
         </div>
        
      
        </div>
            
    );

}

export default Nav;