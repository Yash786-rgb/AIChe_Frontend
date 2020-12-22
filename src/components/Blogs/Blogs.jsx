import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import "./Blogs.css";
export default class Blogs extends React.Component{
    render(){
        return(
            <div className = "Blogs">
                <Navbar active = {"Blogs"}/>
                <br/>
                <br/>
                <br/>
                <h1>Blogs</h1>
                <Footer/>
            </div>
        )
    }
}