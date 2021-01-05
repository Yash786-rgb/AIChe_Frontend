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
                    &nbsp;AIChE IIT Roorkee </a
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
                        <ul className="navbar-nav ml-auto" >
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
                </nav >


            </div >
        )
    }
}

export default NavigationBar



