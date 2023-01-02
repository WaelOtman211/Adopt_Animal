import React  from 'react';
import { getUserData } from "../utils/getUserData";
import "./styles/Animal.css"

import AnimalCard from "./AnimalCard"
function DogsPage(props){
 
    const [DogsData, setDogsData] = React.useState(null);
  
    const type="dog"
    React.useEffect(() => {

      const url = `https://api.petfinder.com/v2/animals?type=${type}&page=1`;
      getUserData(url).then(data =>{
        console.log(data.animals)
        setDogsData(data.animals)}
        
        );
      
    }, []);

    if (!DogsData) {
      return <h3>...Loading</h3>;
    }
   
    let DogsWithPhotos=[];
 
for (let dog of DogsData) {
    if (dog.photos.length!==0)
    DogsWithPhotos.push(dog);

    else {
      dog.photos.push({medium:"/Dogs.png"})
      DogsWithPhotos.push(dog);
    }
}  

 
 
    return (
<div className='mainContainer'>
<h1>
Hello Dogs Page
</h1>


        <div className='mainView'>


 {DogsWithPhotos.map(item =><AnimalCard id={item.id} photo={item.photos[0].medium} name={item.name} favList={props.favList} setFavList={props.setFavList} > </AnimalCard>)}
</div>
</div>
)

}
export default DogsPage