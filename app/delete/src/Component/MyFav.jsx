import FavLine from "./FavLine"
import "./styles/MyFav.css"


function myFav(props){

    return(
<div className="mainContainer">
<h1>My Favorite pets</h1>

<div className="faveMain" >

{props.favList.map(x=> <FavLine favList={props.favList} setFavList={props.setFavList} key={x.id} id={x.id} photo={x.photo} animalName={x.animalName} size={x.size} status={x.status}></FavLine> )}



</div>

</div>
)}

export default myFav
