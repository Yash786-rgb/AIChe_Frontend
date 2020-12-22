import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
export default class Home extends React.Component{
    render(){
        return(
            <div className = "Home">
                <Navbar/>
                <br/>
                <br/>
                <br/>
                <h2>Carousel</h2>            
                <h2>About</h2>
                <Footer/>
            </div>
        )
    }
}