import React, { Component } from 'react'
import aiche from '../../images/AIChe.png'




class NavigationBar extends Component {

    render() {
        const routes = [
            "Home",
            "Blogs",
            "Competitions",
            "Team",
            "Contact Us"
        ]
        // return (
        //     <div>
        //         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        //             <Navbar.Brand>
        //                 <img
        //                     alt=""
        //                     src={aiche}
        //                     width="30"
        //                     height="30"
        //                     className="d-inline-block align-top"
        //                 />{' '}
        //                 <NavLink exact to="/" className={style.mainnav} >AIChE IITR</NavLink>
        //             </Navbar.Brand>
        //             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //             <Navbar.Collapse id="responsive-navbar-nav">
        //                 <Nav className="mr-auto" >
        //                     {/* <Nav.Link><NavLink exact to="/blogs" className={style.mainnav} activeClassName={style.mainnavactive}>Blogs</NavLink></Nav.Link>
        //                     <Nav.Link><NavLink exact to="/pricing" className={style.mainnav} activeClassName={style.mainnavactive}>About</NavLink></Nav.Link>
        //                     <Nav.Link><NavLink exact to="/competitions" className={style.mainnav} activeClassName={style.mainnavactive}>Competitions</NavLink></Nav.Link>
        //                     <Nav.Link><NavLink exact to="/contact-us" className={style.mainnav} activeClassName={style.mainnavactive}>Contact Us</NavLink></Nav.Link> */}

        //                 </Nav>
        //                 <Nav style={{ textAlign: "left" }}>

        //                     <Nav.Link><NavLink exact to="/home" className={style.mainnav} activeClassName={style.mainnavactive}>Home</NavLink></Nav.Link>
        //                     <Nav.Link><NavLink exact to="/blogs" className={style.mainnav} activeClassName={style.mainnavactive}>Blogs</NavLink></Nav.Link>
        //                     <Nav.Link><NavLink exact to="/competitions" className={style.mainnav} activeClassName={style.mainnavactive}>Competitions</NavLink></Nav.Link>

        //                     <Nav.Link><NavLink exact to="/team" className={style.mainnav} activeClassName={style.mainnavactive}>Team</NavLink></Nav.Link>
        //                     <Nav.Link><NavLink exact to="/contact-us" className={style.mainnav} activeClassName={style.mainnavactive}>Contact Us</NavLink></Nav.Link>

        //                 </Nav>
        //             </Navbar.Collapse>
        //         </Navbar>
        //     </div>
        // )

        return (
            <div className="Navbar">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                    <a className="navbar-brand" href="/"
                    >
                        <img
                            alt=""
                            src={aiche}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    &nbsp;AIChe IIT Roorkee </a
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
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            {routes.map(r => {
                                if (this.props.active == r) {
                                    return (
                                        <li className="nav-item active">
                                            <a class="nav-link" href={"/" + r}>{r}</a>
                                        </li>
                                    )

                                }
                                else {
                                    return (
                                        <li className="nav-item">
                                            <a class="nav-link" href={"/" + r}>{r}</a>
                                        </li>
                                    )
                                }
                            })}

                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavigationBar



