import React, {useState} from "react"
import { CDN_URL ,LOGO_URL} from "../utils/constants";

import ReactDOM from "react-dom/client"
const Header=()=>{
    const[btnName,setbtnName]=useState("login")
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{btnName=="login"?setbtnName("Logout"):setbtnName("login")
                      console.log(btnName)}}

                  >{btnName}</button>
                   

                </ul>
            </div>
        </div>
    )
}

export default Header;