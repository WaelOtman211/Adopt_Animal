import React  from 'react';
import "./styles/AnimalDataPage.css"
import Axios from 'axios';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function AnimalDataPage(props){
  async function adoptAnimal( ){

    const post = {
        animalID: props.AnimalData.id,
        date: new Date(),
        userID:props.loggedUser,
        photo:props.AnimalData.photos[0].medium,
        animalName:props.AnimalData.name,
        size:props.AnimalData.size,
        status:props.AnimalData.status
    }
      try {
        
        const res = await toast.promise(Axios.post('http://localhost:4000/adoptAnimal', post),
       {
        pending:"Adopting Animal",
        success: "Adopted Successfully",
        error:"Adoption failed"
      },{position:"top-center",autoClose:3000})
        console.log(res.data)
      } catch (e) {
        alert(e)
      }

    
 }

    return(
        <div className='dataPageContainer'>
            {props.loggedUser?<img onClick={adoptAnimal} className='adoptimg' src="/adopt1.jpg" alt="no image"/>:""}
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
<ToastContainer/>
</div>
    );
}
export default AnimalDataPage;