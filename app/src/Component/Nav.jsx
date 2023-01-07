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
                      {props.loggedUser?<div className='fav'>
                       <Link to='/MyFavorite'> <FontAwesomeIcon icon={solid('heart')} size="2x"/></Link>
                       <p id="favNum" >{props.favList.length}</p>
                       </div>:<div></div>}
                       { !props.loggedUser?<Link to="/LogIn">Login</Link>:<h3>Welcome,</h3>}
                       { !props.loggedUser?<Link to="/signUp">Sign Up</Link>:<h3>{props.loggedUser}</h3> }
                    </ul>
                </div>
            </div>
          

        <div className="LeftBar">
            
                 <Link to="/HomePage">Home Page</Link>
                 
                 <Link to="/About">About</Link>
               
                <Link to="/AdoptCondition">Adopt Condition</Link>
             { props.loggedUser? <Link to="/AdoptHistory">Adopt History</Link>:""}
         </div>
        
      
        </div>
            
    );

}

export default Nav;