import React from "react";
import {Carousel} from "react-bootstrap";
export default function CarouselComponent() {
    return (
      <div>

        <Carousel
      style={{
      position: "relative",
      width: "100%",
      overflow: "hidden",
      transform:" translateX(0)",
      transform: "translate3d(0, 0, 0)",
      }}
        interval={2300}
        fade="true"
        >
          <Carousel.Item
            style={{
              height:"600px",
              transitionDuration: "1.5s",
              transitionProperty: "opacity",
            }}>
            <img
            height="600px"
              className="d-block w-100"
              src="../img-03.jpeg"
              alt="First slide"
            />
            <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
          style={{
            transitionDuration: "1.5s",
            transitionProperty:" opacity",
          }}>
            <img
            height="600px"
              className="d-block w-100"
              src="https://www.iitr.ac.in/nss/images/banner.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item
          style={{
            transitionDuration: "1.5s",
            transitionProperty: "opacity",
          }}>
            <img
            height="600px"
              className="d-block w-100"
              src="https://ch.iitr.ac.in/departments/CH/assets/images/top1.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
    </div>
    );
}
