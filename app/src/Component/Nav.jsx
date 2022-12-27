import React from 'react';

const Nav = () => {
    return (
        <div>
         
            <div className="navbar">
                <div className="container">
                    <a href="#" className="logo">PetsHome</a>
                    <ul>
                        <a href="/LogIn">LogIn</a>
                        <a href="/signUp">SignUp</a>
                        
                    </ul>
                </div>
            </div>
          

        <div className="LeftBar">
             <ul >
                 <a href="/HomePage">HomePage</a>
                 <br></br><br></br><br></br>
                 <a href="/About">About</a>
                 <br></br><br></br><br></br>
                <a href="/AdoptCondition">AdoptCondition</a>
             </ul>
         </div>
        
      
        </div>
            
    );

}

export default Nav;