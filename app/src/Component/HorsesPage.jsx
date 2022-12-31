import React  from 'react';
import { getUserData } from "../utils/getUserData";
import "./styles/Animal.css"
function HorsesPage(){
    const [HorsesData, setHorsesData] = React.useState(null);
  
    const type="Horse"
    React.useEffect(() => {

      const url = `https://api.petfinder.com/v2/animals?type=${type}&page=1`;
      getUserData(url).then(data =>setHorsesData(data.animals));
     
    }, []);

    if (!HorsesData) {
      return <h3>...Loading</h3>;
    }
   
    let HorsesWithPhotos=[];
 
for (let Horse of HorsesData) {
    if (Horse.photos.length!==0)
    HorsesWithPhotos.push(Horse);
}  
 
 
 
    return (
        <div>
<h1>
Hello Horses Page
</h1>

 {
    
    HorsesWithPhotos.map((Horses) =>
         
             <div key={Horses} className="animal" >
              
              <img src= {Horses.photos[0].medium}  />
                <h2> {Horses.name}</h2>
               
                </div>)}
        
        </div>
    );
}
export default HorsesPage;