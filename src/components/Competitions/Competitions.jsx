import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
export default class Competitions extends React.Component{
    render(){
        return(
            <div className = "Competitions">
                <Navbar active = {"Competitions"}/>
                <br/>
                <br/>
                <br/>
                <h1>Competitions</h1>
                <Footer/>
            </div>
        )
    }
}