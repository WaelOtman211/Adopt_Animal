import React  from 'react';
import { getUserData } from "../utils/getUserData";
import "./styles/Animal.css"

import AnimalCard from "./AnimalCard"
function AnimalPage(props){
 
    const [AnimalData, setAnimalData] = React.useState(null);
  
    
    React.useEffect(() => {

      const url = `https://api.petfinder.com/v2/animals?type=${props.type}&page=1`;
      getUserData(url).then(data =>{
        console.log(data.animals)
        setAnimalData(data.animals)}
        
        );
      
    }, []);

    if (!AnimalData) {
      return <h3>...Loading</h3>;
    }
   
    let AnimalWithPhotos=[];
 
for (let animal of AnimalData) {
    if (animal.photos.length!==0)
    AnimalWithPhotos.push(animal);

    else {
      animal.photos.push({medium:"/animal.jpg"})
      AnimalWithPhotos.push(animal);
    }
}  

 
 
    return (
<div className='mainContainer'>
<h1>
Hello Dogs Page
</h1>


        <div className='mainView'>


 {AnimalWithPhotos.map(item =><AnimalCard key={item.id} status={item.status} size={item.size} id={item.id} photo={item.photos[0].medium} name={item.name} favList={props.favList} setFavList={props.setFavList} > </AnimalCard>)}
</div>
</div>
)

}
export default AnimalPage