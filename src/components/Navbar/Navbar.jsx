import React from "react";
import "./Navbar.css";
export default class Navbar extends React.Component{
    render(){
        return(
          <div className = "Navbar">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <a className="navbar-brand" href="/"
            > AIChe IIT Roorkee </a
            >
            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item hoverable">
            <a className="nav-link" href="/one">one</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/two">two</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/three">three</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/four">four</a>
          </li>             
            </ul>
        </div>
      </nav>
      </div>
        )
    }
}