import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import './Competitions.css';
import Image from "./images/ourmissionphoto.jpg";
// npm install --save-dev @iconify/react @iconify-icons/ant-design
import { Icon, InlineIcon } from '@iconify/react';
import plusCircleOutlined from '@iconify-icons/ant-design/plus-circle-outlined';
import minusCircleOutlined from '@iconify-icons/ant-design/minus-circle-outlined';
// import $ from 'jquery';
var $ = window.$

class IconButton extends React.Component { 
    constructor(props) {
      super(props);
      this.state = {
        isCardView: props.sign,
        id: props.i
      }
      
    } 
    
    render() {
      return (
        // <div className="plus" id={this.state.id} onClick={()=>this.setState({ isCardView: !this.state.isCardView })}>
        <div className="plus" id={this.state.id}>
          { this.state.isCardView == "true"
            ? <div className="positive"><Icon icon={plusCircleOutlined} width="25px" height="25px"  /></div>
            : <div className="negative"><Icon icon={minusCircleOutlined} width="25px" height="25px" /></div>
          }
        </div>

      );
    }
    
  }

export default class Competitions extends React.Component{
    // const x = 0;
    // const [symbol, setSymbol] = useState(0);
    componentDidMount(){
      console.log($(window).width());
      if($(window).width() >991){
      $('.plus').on('click', function () {
        var x = $(this).attr('id');
        var position = x%3;
        if(position==0){
          var p1 =x, p2=1+parseInt(x), p3 =2+parseInt(x);
          if($("#col"+p1).hasClass("col-md-8")){
            $('#col'+p1).switchClass("col-md-8", "col-md-4", 1e3, "easeInOutQuad");
            $('#col'+p2).switchClass("col-md-2", "col-md-4", 1e3, "easeInOutQuad");
            $('#col'+p3).switchClass("col-md-2", "col-md-4", 1e3, "easeInOutQuad");
            $("#p"+p1).css("display", "none");
            $("#p"+p2).css("display", "none");
            $("#p"+p3).css("display", "none");
            $("#im"+p1).show();
            $("#im"+p2).show();
            $("#im"+p3).show();
            $("#"+p1).children(".positive").css("display", "block");
            $("#"+p1).children(".negative").css("display", "none");
            }
          else{          
          if($("#col"+p1).hasClass("col-md-4")){
            // $("#col"+p1).removeClass('col-md-4').addClass('col-md-8');
            $("#col"+p1).switchClass("col-md-4", "col-md-8",1e3,"easeInOutQuad");
            // $("#p"+p1).css("display", "block");
            $('#'+p1).children(".positive").css("display", "none");
            $("#"+p1).children(".negative").css("display", "block");
          }
          else{
            $("#col"+p1).switchClass("col-md-2", "col-md-8", 1e3, "easeInOutQuad");
            // $("#p"+p1).css("display", "block");
            $('#'+p1).children(".positive").css("display", "none");
            $("#"+p1).children(".negative").css("display", "block");
          }
           
          // $("#col"+p1).switchClass("col-md-4", "col-md-8",1e3,"easeInOutQuad") : ("#col"+p1).switchClass("col-md-4", "col-md-8", 1e3, "easeInOutQuad");
          if($("#col"+p2).hasClass("col-md-4")){
            $("#col"+p2).switchClass("col-md-4", "col-md-2", 1e3, "easeInOutQuad");
            $("#"+p2).children(".positive").css("display", "block");
            $("#"+p2).children(".negative").css("display", "none");
          }
          else{
            $("#col"+p2).switchClass("col-md-8", "col-md-2", 1e3, "easeInOutQuad");
            $("#"+p2).children(".positive").css("display", "block");
            $("#"+p2).children(".negative").css("display", "none");
          }
          if($("#col"+p3).hasClass("col-md-4")){
            $("#col"+p3).switchClass("col-md-4", "col-md-2", 1e3, "easeInOutQuad");
            $("#"+p3).children(".positive").css("display", "block");
            $("#"+p3).children(".negative").css("display", "none");
          }
          else{
            $("#col"+p3).switchClass("col-md-8", "col-md-2", 1e3, "easeInOutQuad");
            $("#"+p3).children(".positive").css("display", "block");
            $("#"+p3).children(".negative").css("display", "none");
          }
          $("#im"+p1).show();
          $("#im"+p2).css("display", "none");
          $("#im"+p3).css("display", "none");
          $("#p"+p1).css("display", "block");
          $("#p"+p2).css("display", "none");
          $("#p"+p3).css("display","none");
          }
        }
        else if(position==1){
          var p1= parseInt(x)-1, p2=x, p3=parseInt(x)+1;
          if($("#col"+p2).hasClass("col-md-8")){
            $('#col'+p1).switchClass("col-md-2", "col-md-4", 1e3, "easeInOutQuad");
            $('#col'+p2).switchClass("col-md-8", "col-md-4", 1e3, "easeInOutQuad");
            $('#col'+p3).switchClass("col-md-2", "col-md-4", 1e3, "easeInOutQuad");
            $("#p"+p1).css("display", "none");
            $("#p"+p2).css("display", "none");
            $("#p"+p3).css("display", "none");
            $("#im"+p1).show();
            $("#im"+p2).show();
            $("#im"+p3).show();
            $("#"+p2).children(".positive").css("display", "block");
            $("#"+p2).children(".negative").css("display", "none");
          }
          else{
            if($('#col'+p2).hasClass("col-md-4")){
              $('#col'+p2).switchClass("col-md-4", "col-md-8", 1e3, "easeInOutQuad");
              $('#'+p2).children(".positive").css("display", "none");
              $("#"+p2).children(".negative").css("display", "block");
            }
            else{
              $('#col'+p2).switchClass("col-md-2", "col-md-8", 1e3, "easeInOutQuad");
              $('#'+p2).children(".positive").css("display", "none");
              $("#"+p2).children(".negative").css("display", "block");
            }
            if($('#col'+p1).hasClass("col-md-4")){
              $('#col'+p1).switchClass("col-md-4", "col-md-2", 1e3, "easeInOutQuad");
              $("#"+p1).children(".positive").css("display", "block");
              $("#"+p1).children(".negative").css("display", "none");
            }
            else{
              $('#col'+p1).switchClass("col-md-8", "col-md-2", 1e3, "easeInOutQuad");
              $("#"+p1).children(".positive").css("display", "block");
              $("#"+p1).children(".negative").css("display", "none");
            }
            if($('#col'+p3).hasClass("col-md-4")){
              $('#col'+p3).switchClass("col-md-4", "col-md-2", 1e3, "easeInOutQuad");
              $("#"+p3).children(".positive").css("display", "block");
              $("#"+p3).children(".negative").css("display", "none");
            }
            else{
              $('#col'+p3).switchClass("col-md-8", "col-md-2", 1e3, "easeInOutQuad");
              $("#"+p3).children(".positive").css("display", "block");
              $("#"+p3).children(".negative").css("display", "none");
            }
            $("#im"+p2).show();
            $('#im'+p1).css("display", "none");
            $("#im"+p3).css("display", "none");
            $("#p"+p2).css("display", "block");
            $("#p"+p1).css("display","none");
            $("#p"+p3).css("display","none");
          }
        }
        else{
          var p1 = parseInt(x)-2, p2=parseInt(x)-1, p3=x;
          if($("#col"+p3).hasClass("col-md-8")){
            $('#col'+p1).switchClass("col-md-2", "col-md-4", 1e3, "easeInOutQuad");
            $('#col'+p2).switchClass("col-md-2", "col-md-4", 1e3, "easeInOutQuad");
            $('#col'+p3).switchClass("col-md-8", "col-md-4", 1e3, "easeInOutQuad");
            $("#p"+p1).css("display", "none");
            $("#p"+p2).css("display", "none");
            $("#p"+p3).css("display", "none");
            $("#im"+p1).show();
            $("#im"+p2).show();
            $("#im"+p3).show();
            $("#"+x).children(".positive").css("display", "block");
            $("#"+x).children(".negative").css("display", "none");
          }
          else{
            if($('#col'+p3).hasClass("col-md-4")){
              $('#col'+p3).switchClass("col-md-4", "col-md-8", 1e3, "easeInOutQuad");
              $("#"+p3).children(".positive").css("display", "none");
              $("#"+p3).children(".negative").css("display", "block");

            }
            else{
              $('#col'+p3).switchClass("col-md-2", "col-md-8", 1e3, "easeInOutQuad");
              $("#"+p3).children(".positive").css("display", "none");
              $("#"+p3).children(".negative").css("display", "block");
            }
            if($('#col'+p1).hasClass("col-md-4")){
              $('#col'+p1).switchClass("col-md-4", "col-md-2", 1e3, "easeInOutQuad");
              $("#"+p1).children(".positive").css("display", "block");
              $("#"+p1).children(".negative").css("display", "none");
            }
            else{
              $('#col'+p1).switchClass("col-md-8", "col-md-2", 1e3, "easeInOutQuad");
              $("#"+p1).children(".positive").css("display", "block");
              $("#"+p1).children(".negative").css("display", "none");
            }
            if($('#col'+p2).hasClass("col-md-4")){
              $('#col'+p2).switchClass("col-md-4", "col-md-2", 1e3, "easeInOutQuad");
              $("#"+p2).children(".positive").css("display", "block");
              $("#"+p2).children(".negative").css("display", "none");
            }
            else{
              $('#col'+p2).switchClass("col-md-8", "col-md-2", 1e3, "easeInOutQuad")
              $("#"+p2).children(".positive").css("display", "block");
              $("#"+p2).children(".negative").css("display", "none");
            }
            $("#im"+p3).show();
            $('#im'+p1).css("display", "none");
            $("#im"+p2).css("display", "none");
            $("#p"+p3).css("display", "block");
            $("#p"+p1).css("display","none");
            $("#p"+p2).css("display","none"); 
            // $("#"+x).children(".positive").css("display", "none");
            // $("#"+x).children(".negative").css("display", "block");   
          }
        }
        
      });
    }
    }

   render(){
        return(
            <div className = "Competitions">
                <Navbar active = {"Competitions"}/>
                <br/>
                <br/>
                <br/>
                <h1>Competitions</h1>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-md-4 notSelected" id="col0">
                      <div className="accordion-block">
                        <img className="accordion-image" src={Image} id="im0"/>
                        <div className="codess-blue accordion-content">
                          <h3>Our mission</h3>
                          <p id="p0">Codess aims to inspire female coders and help them achieve their professional goals. Through networking events, mentoring and sharing advice and experiences, we hope to offer a forum to women unlike any other.</p>
                          <IconButton i="0" sign="true" />
                          <IconButton i="0" sign="false" />

                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 notSelected" id="col1">
                      <div className="accordion-block">
                        <img className="accordion-image" src={Image} id="im1"/>
                        <div className="codess-purple accordion-content">
                          <h3>Our mission</h3>
                          <p id="p1">Codess aims to inspire female coders and help them achieve their professional goals. Through networking events, mentoring and sharing advice and experiences, we hope to offer a forum to women unlike any other.</p>
                          <IconButton i="1" sign="true"/>
                          <IconButton i="1" sign="false" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 notSelected" id="col2">
                      <div className="accordion-block">
                        <img className="accordion-image " src={Image} id="im2" />
                        <div className="codess-dark-blue accordion-content">
                          <h3>Our mission</h3>
                          <p id="p2">Codess aims to inspire female coders and help them achieve their professional goals. Through networking events, mentoring and sharing advice and experiences, we hope to offer a forum to women unlike any other.</p>
                          <IconButton i="2" sign="true"/>
                          <IconButton i="2" sign="false" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-4 notSelected" id="col3">
                      <div className="accordion-block">
                        <img className="accordion-image" src={Image} id="im3"/>
                        <div className="codess-blue accordion-content">
                          <h3>Our mission</h3>
                          <p id="p3">Codess aims to inspire female coders and help them achieve their professional goals. Through networking events, mentoring and sharing advice and experiences, we hope to offer a forum to women unlike any other.</p>
                          <IconButton i="3" sign="true"/>
                          <IconButton i="3" sign="false" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 notSelected" id="col4">
                      <div className="accordion-block">
                        <img className="accordion-image" src={Image} id="im4"/>
                        <div className="codess-purple accordion-content">
                          <h3>Our mission</h3>
                          <p id="p4">Codess aims to inspire female coders and help them achieve their professional goals. Through networking events, mentoring and sharing advice and experiences, we hope to offer a forum to women unlike any other.</p>
                          <IconButton i="4" sign="true"/>
                          <IconButton i="4" sign="false" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 notSelected" id="col5">
                      <div className="accordion-block">
                        <img className="accordion-image" src={Image} id="im5" />
                        <div className="codess-dark-blue accordion-content">
                          <h3>Our mission</h3>
                          <p id="p5">Codess aims to inspire female coders and help them achieve their professional goals. Through networking events, mentoring and sharing advice and experiences, we hope to offer a forum to women unlike any other.</p>
                          <IconButton i="5" sign="true"/>
                          <IconButton i="5" sign="false" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <Footer/>
            </div>
        );
    }
}