import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
export default class ContactUs extends React.Component{
    render(){
        return(
            <div className = "ContactUs">
                <Navbar active = {"Contact Us"}/>
                <br/>
                <br/>
                <h1>Contact Us</h1>
                <Footer/>
            </div>
        )
    }
}