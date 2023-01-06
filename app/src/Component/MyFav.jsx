import FavLine from "./FavLine"
import "./styles/MyFav.css"


function myFav(props){

    return(
<div className="mainContainer">
<h1>My Favorite pets</h1>

<div className="faveMain" >

{props.favList.map(x=> <FavLine animalInfo={x} setAnimalData={props.setAnimalData} favList={props.favList} setFavList={props.setFavList} key={x.id} ></FavLine> )}



</div>

</div>
)}

export default myFav
