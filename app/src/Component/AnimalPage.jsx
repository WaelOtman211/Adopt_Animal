import React  from 'react';
import { getUserData } from "../utils/getUserData";
import "./styles/Animal.css"
import AnimalCard from "./AnimalCard"


function AnimalPage(props){
 
    const [AnimalData, setAnimalData] = React.useState(null);
    const [searchData, setSearchData] = React.useState("");
    
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
<div className='searchBar'>
  <input placeholder='Search name, breed, size, gender' type="text" value={searchData} onChange={(e)=>setSearchData(e.target.value)}/>
  
  </div>
        <div className='mainView'>


 {AnimalWithPhotos.filter(x=>x.name.toLowerCase().includes(searchData.toLowerCase())||x.size.toLowerCase().includes(searchData.toLowerCase())
 ||x.gender.toLowerCase().includes(searchData.toLowerCase())||x.breeds.primary.toLowerCase().includes(searchData.toLowerCase())).map(item =><AnimalCard key={item.id} loggedUser={props.loggedUser} status={item.status} size={item.size} id={item.id} photo={item.photos[0].medium} name={item.name} favList={props.favList} setFavList={props.setFavList} AnimalData={props.AnimalData} setAnimalData={props.setAnimalData} animalinfo={item}> </AnimalCard>)}
</div>

</div>
)

}
export default AnimalPage