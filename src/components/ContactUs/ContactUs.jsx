import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import './ContactUs.css';
// import Background from './images/bg-02.jpg';
import { Icon, InlineIcon } from '@iconify/react';
import closeIcon from '@iconify-icons/zmdi/close';
import $ from "jquery";

export default class ContactUs extends React.Component{
    componentDidMount(){
    $('.btn-hide-contact100').on('click', function(){
        $('.container-contact100').fadeOut(300);
    });

    $('.btn-show-contact100').on('click', function(){
        $('.container-contact100').fadeIn(300);
    });
    }
    render(){
        return(
            <div className = "ContactUs">
                {/* <Navbar active = {"Contact Us"}/> */}
                <br/>
                <br/>
                <h1>Contact Us</h1>
                <div className="bg-container-contact100">
		            <div className="contact100-header flex-sb-m">
			            <div>
				          <button className="btn-show-contact100">
					       Contact Us
				          </button>
			            </div>
		            </div>
	            </div>

                <div className="container-contact100">
		        <div className="wrap-contact100">
			            <button className="btn-hide-contact100">
				        {/* <i className="zmdi zmdi-close"></i> */}
                        <Icon icon={closeIcon} />
			            </button>

			        <div className="contact100-form-title">
				        <span>Contact Us</span>
			        </div>

                    <form className="contact100-form validate-form">
				        <div className="wrap-input100 validate-input">
					        <input id="name" className="input100" type="text" name="name" placeholder="Name"/>
					        <span className="focus-input100"></span>
					        <label className="label-input100" for="name">
					 	    <span className="lnr lnr-user m-b-2"></span>
					        </label>
				        </div>


				        <div className="wrap-input100 validate-input">
					        <input id="email" className="input100" type="text" name="email" placeholder="Email"/>
					        <span className="focus-input100"></span>
					        <label className="label-input100" for="email">
						    <span className="lnr lnr-envelope m-b-5"></span>
					        </label>
				        </div>


				        <div className="wrap-input100 validate-input">
					         <input id="phone" className="input100" type="text" name="phone" placeholder="Mobile Number"/>
					         <span className="focus-input100"></span>
					         <label className="label-input100" for="phone">
						     <span className="lnr lnr-smartphone m-b-2"></span>
					         </label>
				        </div>


				        <div className="wrap-input100 validate-input">
					         <textarea id="message" className="input100" name="message" placeholder="Message"></textarea>
					         <span className="focus-input100"></span>
					         <label className="label-input100 rs1" for="message">
						     <span className="lnr lnr-bubble"></span>
					         </label>
				        </div>

				        <div className="container-contact100-form-btn">
					         <button className="contact100-form-btn">
						      Send Now
					         </button>
				        </div>
			        </form>
                </div>
	            </div>
                <Footer/>
            </div>
        )
    }
}