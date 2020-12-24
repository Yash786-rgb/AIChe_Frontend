import React from "react";
import './Footer.css';
import logo from '../images/aichelogo.png';
export default class Footer extends React.Component{
    render(){
        return(
            <footer class="footer-distributed">
	
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"/>

	<link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" type="text/css"></link>
                <div class="footer-left">

                <img src={logo} id = 'aiche_logo'/>
                <br/><br/>

                <p class="footer-company-name">AIChE IITR &copy; 2020</p>
                </div>

                <div class="footer-center">

                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>Roorkee - Haridwar Highway </span>Roorkee, Uttarakhand 247667</p>
                    </div>

                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+1 555 123456</p>
                    </div>

                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="#">aiche.iitr@gmail.com</a></p>
                    </div>

                </div>

                <div class="footer-right">

                    <p class="footer-company-about">
                        <span>ABOUT</span>
                        The American Institute of Chemical Engineers Chapter | IIT Roorkee is a student run chemical engineering professional organization. </p>

                    <div class="footer-icons">

                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-envelope"></i></a>

                    </div>

                </div>
                <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
		<script src="https://cdn.tutorialzine.com/misc/enhance/v2.js" async></script>

</footer>
        )
    }
}