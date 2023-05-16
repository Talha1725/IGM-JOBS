import React from "react";

export default function cards({ image, cardsPara, cardsHeading }) {
  return (
    <div className="text-center cardpost py-md-0 py-4">
      <div className="p-2">
        <img className="py-3" src={image} alt="Description of the image" />
        <h6 className="py-2">{cardsHeading}</h6>
        <p className="cardcontent px-md-2 px-5 py-2">{cardsPara}</p>
      </div>
    </div>
  );
}
