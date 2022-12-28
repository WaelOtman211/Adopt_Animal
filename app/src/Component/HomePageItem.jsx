import React from "react";
function HomePageItem(props){

    return(

<div className="item">
    <img src= {props.img} alt="No Image" />
    <h2>{props.title}</h2>

</div>



    )
}

export default HomePageItem;