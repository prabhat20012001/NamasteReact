import React from "react"
import ReactDOM from "react-dom/client"



const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                   

                </ul>
            </div>
        </div>
    )
}


const RestaurantCard=()=>{
    return(
        <div className="res-card">
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/fcrwltlzttdqilzrclg8"></img>
         <h3>Meghana Foods</h3>
         <h4>Biryani ,North Indian,Asian</h4>
         <h4>4.4 stars</h4>
         <h4>38 minutes</h4>
        </div>
    )
}

const Body=()=>{
    return(
        <div className="body">
<div className="search">
Search
</div>
<div className="res-container">
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>


</div>
 </div>
    )
}



const AppLayout=()=>{
    return(
        <div className="app">

<Header/>
<Body/>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)
