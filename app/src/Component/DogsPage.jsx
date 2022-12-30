import React  from 'react';
import { getUserData } from "./utils/getUserData";
import "./styles/Animal.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
function DogsPage(){
 
    const [DogsData, setDogsData] = React.useState(null);
  
    const type="dog"
    React.useEffect(() => {

      const url = `https://api.petfinder.com/v2/animals?type=${type}&page=1`;
      getUserData(url).then(data =>{
        console.log(data.animals)
        setDogsData(data.animals)}
        
        );
      
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
         
             <div key={Dogs.id} className="animal" >
             <div className='favAnim'> <FontAwesomeIcon icon={solid('heart')} size="2x"/>
                       
                       </div>
              <img src= {Dogs.photos[0].medium}  />
                <h2> {Dogs.name}</h2>
                
                </div>)}
        
        </div>
    );

}
export default DogsPage;