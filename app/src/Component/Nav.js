import React from 'react';
 
const Nav = () =>{
    return(
        <div className="navbar">
            <div className="container">
            <a href="#" className="logo">PetsHome</a>
            <ul>
                <a href="/LogIn">LogIn</a>
                <a href="/signUp">SignUp</a>
            </ul>
            </div>
            
        </div>
    );

}

export default Nav;