import React from 'react'
import { Helmet } from "react-helmet"
// import hamburgerScript from './hooks/hamburgerScript'
// import usehamburgerScript from './hooks/usehamburgerScript'
//import { Navbar, Nav, NavDropdown, NavLink } from 'react-bootstrap'
import styles from './Navbar.module.css'


const NavigationBar = props => {
    return (
        <div>
            {/* <Helmet>
                <script src='./hooks/hamburgerScript'></script>
            </Helmet> */}
            <div className={styles.navbar}>

                <h2 className={styles.mobileheader}><a href="/">AIChE-IITR</a></h2>
                <a href="#" className={styles.togglebutton}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </a>
                <div className={styles.navlinks}>

                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/blogs">Blogs</a></li>
                        <li><a href="/competitions">Competitions</a></li>
                        <li><a href="/team">Team</a></li>
                        <li><a href="/contact-us">Contact Us</a></li>

                    </ul>

                </div>
            </div>
        </div>
    )
}

export default NavigationBar



