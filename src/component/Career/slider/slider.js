import React from "react";
import Carousel from "react-bootstrap/Carousel";

import MuiCard from "../careerCards/card";
import MuiCard1 from "../careerCards1/card";
import "./slider.css";
function CarouselCardExample() {
  //   const carouselItems = [
  //     {
  //       title: "Card 1",
  //       text: "This is card 1",
  //       buttonText: "Button 1",
  //     },
  //     {
  //       title: "Card 2",
  //       text: "This is card 2",
  //       buttonText: "Button 2",
  //     },
  //     {
  //       title: "Card 3",
  //       text: "This is card 3",
  //       buttonText: "Button 3",
  //     },
  //   ];

  return (
    <Carousel fade>
      <Carousel.Item>
        <MuiCard />
      </Carousel.Item>
      <Carousel.Item>
        <MuiCard1 />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCardExample;
