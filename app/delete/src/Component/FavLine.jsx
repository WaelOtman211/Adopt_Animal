import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';


function favLine(props){

    return(

<div className="animLine" > <img src={props.photo} alt="no image" /> <h3>{`Name:${props.animalName}`}</h3> <h3>{`Size:${props.size}`}</h3> <h3> {`status:${props.status}`}</h3> 
 <div className='trash' onClick={()=>props.setFavList(props.favList.filter(x=>x.id!=props.id))}><FontAwesomeIcon icon={solid('trash')} size="2x" ></FontAwesomeIcon> </div>

</div>

    )
}

export default favLine

