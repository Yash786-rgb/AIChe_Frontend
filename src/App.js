import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselComponent from "./components/carousel.component.jsx";
import Aboutus from "./components/aboutus.jsx";

export default function App() {
  return (
    <div className="App">
      <CarouselComponent/>
      <Aboutus />

    </div>
  );
}
