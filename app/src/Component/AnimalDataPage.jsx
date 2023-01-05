import React  from 'react';
import "./styles/AnimalDataPage.css"

function AnimalDataPage(props){
 
    return(
        <div className="Data">
            <h2> {props.AnimalData.name}</h2>
          <img src= {props.AnimalData.photos[0].medium }  />
          <p>Name: {props.AnimalData.name} </p>
          <p>Type: {props.AnimalData.type} </p>
          <p>Breeds: {props.AnimalData.breeds.primary} </p>
          <p>Age: {props.AnimalData.age} </p>
          <p>Tags: {props.AnimalData.tags} </p>
          <p>Size: {props.AnimalData.size} </p>
          <p>Gender: {props.AnimalData.gender} </p>
          <p>About: {props.AnimalData.description}</p>
</div>
    );
}
export default AnimalDataPage;