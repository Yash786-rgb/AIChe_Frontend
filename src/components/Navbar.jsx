import React from 'react'
//import { Navbar, Nav, NavDropdown, NavLink } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'


const NavigationBar = () => {
    return (
        <div>

            <nav>
                <a href="/">Home</a>
                <a href="/blogs">Blogs</a>
                <a href="/competitions">competitions</a>
                <a href="/team">Team</a>
                <a href="/contact-us">contact us</a>
            </nav>

        </div>
    )
}

export default NavigationBar



