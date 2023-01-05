import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';

function favLine(props){

    return(

<div className="animLine" > <Link to="/AnimalDataPage"> <img onClick={()=> props.setAnimalData(props.animalInfo)} src={props.animalInfo.photos[0].medium} alt="no image" /> </Link> <h3>{`Name:${props.animalInfo.name}`}</h3> <h3>{`Size:${props.animalInfo.size}`}</h3> <h3> {`status:${props.animalInfo.status}`}</h3> 
 <div className='trash' onClick={()=>props.setFavList(props.favList.filter(x=>x.id!=props.animalInfo.id))}><FontAwesomeIcon icon={solid('trash')} size="2x" ></FontAwesomeIcon> </div>

</div>

    )
}

export default favLine

