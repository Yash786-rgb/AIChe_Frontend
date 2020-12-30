import React, { Component } from 'react'
// import { Helmet } from "react-helmet"
// import hamburgerScript from './hooks/hamburgerScript'
// import usehamburgerScript from './hooks/usehamburgerScript'
import { Navbar, Nav } from 'react-bootstrap'
import aiche from '../images/AIChe.png'
import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'



class NavigationBar extends Component {
    // state = { clicked: false }


    // handleTap = () => {
    //     this.setState({ clicked: !this.state.clicked })
    // }




    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={aiche}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <NavLink exact to="/" className={style.mainnav} >AIChE IITR</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto" style={{ textAlign: "left" }}>
                            <Nav.Link><NavLink exact to="/blogs" className={style.mainnav} activeClassName={style.mainnavactive}>Blogs</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact to="/pricing" className={style.mainnav} activeClassName={style.mainnavactive}>About</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact to="/competitions" className={style.mainnav} activeClassName={style.mainnavactive}>Competitions</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact to="/contact-us" className={style.mainnav} activeClassName={style.mainnavactive}>Contact Us</NavLink></Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown" style={{ textAlign: "left" }}>
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav style={{ textAlign: "left" }}>
                            <Nav.Link><NavLink exact to="/register" className={style.mainnav} activeClassName={style.mainnavactive}>Register</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar



