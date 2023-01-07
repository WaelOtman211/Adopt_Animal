import FavLine from "./FavLine"
import "./styles/MyFav.css"
import React from "react";
import Axios from 'axios'
 function AdoptHistory(props){


    const [history, setHistory] = React.useState([]);

    async function getHistory(){
            let res = await Axios.get('http://localhost:4000/getHistory')
            
          console.log(res.data)
                setHistory(res.data)

      }      
      React.useEffect(() => {
getHistory()

      },[])
   
   return(
<div className="mainContainer">
<h1>My Adopt History </h1>

<div className="faveMain" >

{history.filter(x=> x.userid==props.loggedUser).map(x=> <FavLine animalInfo={x} setAnimalData={props.setAnimalData}  key={x.id} ></FavLine> )}

</div>

</div>

    )
}

export default AdoptHistory
