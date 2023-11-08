import React, { useState } from 'react';

import ResturantCard from "./ResturantCard";
import resturantList from "../utils/mockdata";

const Body=()=>{
let [filterResturant,setfilterResturant]=useState(resturantList)
    return(
<div className="body">  
<div className="filter">
    <button className="filter-btn"onClick={()=>{
        const filteredList=filterResturant.filter((res)=>res.info.avgRating>4)
        setfilterResturant(filteredList)
    }}
    >Top Rated Restaurants</button>

</div>
<div className="res-container">
    {
        filterResturant.map((resturant,index)=>(
        <ResturantCard key={index} resData={resturant}/>
        ))
    }

</div>
</div>
    )
}

export default Body;