import RestaurantCard from "./ResturanCrad";
import resturantList from "../utils/mockdata";


const Body=()=>{
    return(
        <div className="body">  
<div className="search">
Search
</div>
<div className="res-container">
    {
        resturantList.map((resturant,index)=>(
            <RestaurantCard key={index} resData={resturant}/>
        ))
    }
<RestaurantCard resData={resturantList[0]}/>

</div>
 </div>
    )
}

export default Body;