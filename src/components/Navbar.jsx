import React, { Component } from 'react'
// import { Helmet } from "react-helmet"
// import hamburgerScript from './hooks/hamburgerScript'
// import usehamburgerScript from './hooks/usehamburgerScript'
import { Navbar, Nav, NavDropdown, NavLink } from 'react-bootstrap'

// import styles from './Navbar.module.css'
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
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src=""
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                    AIChE IITR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto" style={{ textAlign: "left" }}>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown" style={{ textAlign: "left" }}>
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav style={{ textAlign: "left" }}>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
      </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar



