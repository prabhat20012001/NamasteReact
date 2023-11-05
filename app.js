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
         <h3>Meghana Foods</h3>
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
