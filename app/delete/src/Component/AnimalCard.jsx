import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';




function AnimalCard(props) {
    let animal = props.favList.filter(x=>x.id===props.id);
    function setFavorite(){
        
         if(animal.length===0) props.setFavList([...props.favList,{id:props.id,photo:props.photo,animalName:props.name}])
         else props.setFavList(props.favList.filter(x=>x.id!=props.id))
    }


    return(

        <div className="animal" >
             <div className='favAnim' onClick={setFavorite} style={animal.length==0? {color:"gray"}:{color:"#5d3ff3"}}> <FontAwesomeIcon icon={solid('heart')} size="2x"/>
                       
                       </div>
              <img src= {props.photo} />
                <h2> {props.name}</h2>
                
                </div>
        
     


    )
}

export default AnimalCard