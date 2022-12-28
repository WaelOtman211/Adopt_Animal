import React from 'react';
import "./styles/Nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
const Nav = () => {
    return (
        <div>
         
            <div className="navbar">
                <div className="container">
                    <a href="#" className="logo">PetsHome</a>
                    <ul className='TopNavLinks'>
                       <div className='fav'> <FontAwesomeIcon icon={solid('heart')} size="2x"/>
                       <p id="favNum" >4</p>
                       </div>
                        <a href="/LogIn">Login</a>
                        <a href="/signUp">Sign Up</a>
                    </ul>
                </div>
            </div>
          

        <div className="LeftBar">
            
                 <a href="/HomePage">HomePage</a>
                 
                 <a href="/About">About</a>
               
                <a href="/AdoptCondition">AdoptCondition</a>
            
         </div>
        
      
        </div>
            
    );

}

export default Nav;