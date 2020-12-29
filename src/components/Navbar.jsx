import React, { Component } from 'react'
import { Helmet } from "react-helmet"
// import hamburgerScript from './hooks/hamburgerScript'
// import usehamburgerScript from './hooks/usehamburgerScript'
//import { Navbar, Nav, NavDropdown, NavLink } from 'react-bootstrap'
import styles from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'


class NavigationBar extends Component {
    state = { clicked: false }


    handleTap = () => {
        this.setState({ clicked: !this.state.clicked })
    }




    render() {
        return (
            <div>

                <div className={styles.navbar}>

                    <h2 className={styles.mobileheader}><a href="/">AIChE-IITR</a></h2>
                    <div className={styles.menuIcon} onClick={this.handleTap}>
                        {/* <i className={this.state.clicked ? 'styles.fas fa-times' : 'styles.fas fa-bars'}></i> */}
                        {this.state.clicked ?
                            <div className={styles.togglebuttonClose}>
                                <FontAwesomeIcon icon={faTimes} />
                            </div> :
                            <div className={styles.togglebutton}>
                                {/* <span className={styles.bar}></span>
                                <span className={styles.bar}></span>
                                <span className={styles.bar}></span> */}
                                <FontAwesomeIcon icon={faBars} />
                            </div>
                        }
                    </div>
                    {this.state.clicked ?
                        <div className={styles.navlinksm}>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/blogs">Blogs</a></li>
                                <li><a href="/competitions">Competitions</a></li>
                                <li><a href="/team">Team</a></li>
                                <li><a href="/contact-us">Contact Us</a></li>
                                <li><a href="/login">Login</a></li>
                            </ul>
                        </div>
                        : null}
                    <div className={styles.navlinks}>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/blogs">Blogs</a></li>
                            <li><a href="/competitions">Competitions</a></li>
                            <li><a href="/team">Team</a></li>
                            <li><a href="/contact-us">Contact Us</a></li>
                            <li><a href="/login">Login</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavigationBar



