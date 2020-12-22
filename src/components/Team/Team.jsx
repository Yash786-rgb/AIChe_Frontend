import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
export default class Team extends React.Component{
    render(){
        return(
            <div className = "Team">
                <Navbar active = {"Team"}/>
                <br/>
                <br/>
                <h1>Team </h1>
                <Footer/>
            </div>
        )
    }
}