import React  from 'react';
import { getUserData } from "./utils/getUserData";
import "./styles/Animal.css"

function RabitsPage(){
    const [RabitsData, setRabitsData] = React.useState(null);
  
    const type="rabbit"
    React.useEffect(() => {

      const url = `https://api.petfinder.com/v2/animals?type=${type}&page=1`;
      getUserData(url).then(data =>setRabitsData(data.animals));
     
    }, [type]);

    if (!RabitsData) {
      return <h3>...Loading</h3>;
    }
   
    let RabitsWithPhotos=[];
 
for (let Rabit of RabitsData) {
    if (Rabit.photos.length!==0)
    RabitsWithPhotos.push(Rabit);
}  
 
 
 
    return (
        <div>
<h1>
Hello Rabits Page
</h1>

 {
    
    RabitsWithPhotos.map((Rabits) =>
         
             <div key={Rabits} className="animal">
             
              <img src= {Rabits.photos[0].medium}  />
                <h2> {Rabits.name}</h2>
                 
                </div>)}
        
        </div>
    );

}
export default RabitsPage;