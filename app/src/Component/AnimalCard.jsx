import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import {Link} from 'react-router-dom';
import Axios from 'axios'


function AnimalCard(props) {
    let animal = props.favList.filter(x=>x.id===props.id);
    async function setFavorite(){
        const post = {
            animalID: props.id,
            userID:props.loggedUser,
            photo:props.photo,
            animalName:props.name,
            size:props.size,
            status:props.status
        }
          try {
            const res = await Axios.post('http://localhost:4000/setfavorite', post)
          if(animal.length===0) props.setFavList([...props.favList,props.animalinfo])
         else props.setFavList(props.favList.filter(x=>x.id!=props.id))
          } catch (e) {
            alert(e)
          }
         
    }

    function clicked(){
        console.log(props.animalinfo)
        props.setAnimalData(props.animalinfo)
    }


    return(

        <div className="animal" >
             
             {props.loggedUser?<div className='favAnim' onClick={setFavorite} style={animal.length==0? {color:"gray"}:{color:"#5d3ff3"}}> <FontAwesomeIcon icon={solid('heart')} size="2x"/>
                       
                    </div>:<div></div>}
                    
                    <Link to='/AnimalDataPage' onClick={clicked}>
              <img src= {props.photo }  />
                <h2> {props.name}</h2>
                </Link>
 
                </div>
        
     


    );
}

export default AnimalCard