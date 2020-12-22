import React from "react";
import "./Navbar.css";
export default class Navbar extends React.Component{
    render(){
        return(
          <div className = "Navbar">
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <a class="navbar-brand" href="/"
            > AIChe IIT Roorkee </a
            >
            <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item hoverable">
            <a class="nav-link" href="/one">one</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/two">two</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/three">three</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/four">four</a>
          </li>             
            </ul>
        </div>
      </nav>
      </div>
        )
    }
}