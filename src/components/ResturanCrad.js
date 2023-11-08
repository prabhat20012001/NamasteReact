import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    // const RestaurantCard=(resName,cuisin)=>{
const{resData}=props
    console.log(resData)
    return(
        <div className="res-card">
            <img className="res-logo" src={CDN_URL+resData?.info?.cloudinaryImageId}></img>
         <h3>{resData?.info?.name}</h3>
         {/* <h3>{resName}</h3> */}

         <h4>{resData?.info?.cuisines.join(' , ')}</h4> 
         <h4>{resData?.info?.avgRating }stars</h4>
         <h4>{resData?.info?.sla?.deliveryTime }min</h4>
        </div>
    )
}

export default RestaurantCard;