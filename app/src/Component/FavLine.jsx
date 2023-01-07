import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { getUserData } from '../utils/getUserData';
function FavLine(props){
   const [data,setData] = useState(null)

useEffect(()=>{
    console.log(props.animalInfo)
  
    const url = props.animalInfo.animalid? `https://api.petfinder.com/v2/animals/${props.animalInfo.animalid}`:`https://api.petfinder.com/v2/animals/${props.animalInfo.id}`;
    getUserData(url).then(data =>{
      console.log(data)
      setData(data.animal)}
      
      );
    
},[])
function remove(){
    if(props.favList) props.setFavList(props.favList.filter(x=>x.id!=data.id))
}
if(data){
 return(

        
            <div className="animLine" > <Link to="/AnimalDataPage"> <img onClick={()=> props.setAnimalData(data)} src={data.photos.length==0?"/animal.jpg":data.photos[0].medium} alt="no image" /> </Link> <h3>{`Name:${data.name}`}</h3> <h3>{`Size:${data.size}`}</h3> <h3> {`status:${data.status}`}</h3> 
            {props.favList?<div className='trash' onClick={remove}><FontAwesomeIcon icon={solid('trash')} size="2x" ></FontAwesomeIcon> </div>:""}

            </div>
          


    )
 }else{
    return (<h3>Loading...</h3>)
 }
   
}

export default FavLine

