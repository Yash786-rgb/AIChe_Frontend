import React from "react";
import {Container,Image , Row , Col} from "react-bootstrap";
export default function Aboutus() {
  return (
    <Container fluid
    style={{
      fontSize:"larger",
      fontWeight:"500",
      textAlign:"justify",
      marginLeft:"-5",
      marginRight:"-5"
}}
    >

    <br/><br/>
    <h1 className="abouth1" style={{ textAlign:"center",color:"white", borderRadius:"20px",background:"crimson"}}> ABOUT US</h1>
    <br/>
  <Row >
  <Col xs={12} sm={12} md={12} lg={4} style={{
    marginBottom:"30",
  }}>
      <Image className="aboutImg" src="../img-02.jpeg"  thumbnail />
      </Col>
  <Col xs={12} sm={12} md={12} lg={8}>
    <p style={{textAlign:"justify"},{textSizeAdjust:"auto"}}>The American Institute of Chemical Engineering Chapter at IIT Roorkee, is one of the International Chapters from AIChE. It is a student run community which aims to foster chemical engineering at IIT Roorkee. Getting affiliation from AIChE - Global we have always tried to build a suitable environment for chemical engineering education integrated with software engineering and have been able to establish global student network. The journey started in 2016 and now we are headed with a global network of chemical engineers from different parts of the world. We  regularly hold meetings and discussions with our alumni, research fellows and faculties on topics relevant to chemical engineering or use of software with Chemical Engg.<br />
Apart from this, we are quite interested in our flagship event of Chem-e-car in which students have to make their own self driven cars with the help of chemical fuels.  We also actively participate in the projects, hackathons and competitions and our ultimate goal is to more excel in upcoming chem-e-competitions and tier 1 conferences of AIChE-AIChE  Annual conference.
AIChE IITR is looking forward for more collaborations and we are happy to connect with you guys. We also have some interesting blogs that you can find out in Blogs section. You can follow our facebook page for new upcoming events.</p>
    </Col>


  </Row>
</Container>
  );
}
