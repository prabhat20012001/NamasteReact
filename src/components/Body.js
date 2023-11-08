import RestaurantCard from "./ResturanCrad";
import resturantList from "../utils/mockdata";


const Body=()=>{
    return(
<div className="body">  
<div className="filter">
    <button className="filter-btn"onClick={filterResturant=resturantList.filter((res)=>res.info.avgRating>4)}>Top Rated Restaurants</button>
    {console.log(filterResturant)}
</div>
<div className="res-container">
    {
        filterResturant.map((resturant,index)=>(
        <RestaurantCard key={index} resData={resturant}/>
        ))
    }

</div>
</div>
    )
}

export default Body;