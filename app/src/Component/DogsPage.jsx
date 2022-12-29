import React  from 'react';
import { getUserData } from "./utils/getUserData";
import "./styles/Animal.css"
function DogsPage(){
 
    const [DogsData, setDogsData] = React.useState(null);
  
    const type="dog"
    React.useEffect(() => {

      const url = `https://api.petfinder.com/v2/animals?type=${type}&page=1`;
      getUserData(url).then(data =>setDogsData(data.animals));
     
    }, [type]);

    if (!DogsData) {
      return <h3>...Loading</h3>;
    }
   
    let DogsWithPhotos=[];
 
for (let dog of DogsData) {
    if (dog.photos.length!==0)
    DogsWithPhotos.push(dog);
}  
 
 
 
    return (
        <div>
<h1>
Hello Dogs Page
</h1>

 {
    
 DogsWithPhotos.map((Dogs) =>
         
             <div key={Dogs} className="animal" >
             
              <img src= {Dogs.photos[0].medium}  />
                <h2> {Dogs.name}</h2>
                
                </div>)}
        
        </div>
    );

}
export default DogsPage;