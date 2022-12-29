import React  from 'react';
import { getUserData } from "./utils/getUserData";
import "./styles/Animal.css"
function CatsPage(){
    const [CatsData, setCatsData] = React.useState(null);
  
    const type="Cat"
    React.useEffect(() => {

      const url = `https://api.petfinder.com/v2/animals?type=${type}&page=1`;
      getUserData(url).then(data =>setCatsData(data.animals));
     
    }, [type]);

    if (!CatsData) {
      return <h3>...Loading</h3>;
    }
   
    let CatsWithPhotos=[];
 
for (let cat of CatsData) {
    if (cat.photos.length!==0)
    CatsWithPhotos.push(cat);
}  
 
 
 
    return (
        <div>
<h1>
Hello Cats Page
</h1>

 {
    
    CatsWithPhotos.map((Cats) =>
         
             <div key={Cats} className="animal" >
              
              <img src= {Cats.photos[0].medium}  />
                <h2> {Cats.name}</h2>
               
                </div>)}
        
        </div>
    );


}
export default CatsPage;