import React, { useState,useEffect } from 'react';
import ResturantCard from "./ResturantCard";
import Shimmer from './Shimmer';
const Body=()=>{
let [filterResturant,setfilterResturant]=useState([])
// console.log("total resturant:",resturantList)
// console.log("filtered resturant",filterResturant)
useEffect(()=>{
    fetchData()
},[])
const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9622536&lng=77.6979885&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json=await data.json()
    console.log("data",json)
    setfilterResturant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}
if(filterResturant.length==0){
    return <Shimmer/>
}

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