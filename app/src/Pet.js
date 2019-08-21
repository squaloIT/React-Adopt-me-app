import React from "react";
// var React = require("react");
// const Pet = props => {

export default function Pet({
  name,
  breed,
  photos,
  description,
  id,
  location,
  url
}) {
  // KORISTIM DESCTRUCTURING UMESTO CELOG PROPS
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, name + " " + breed),
  //   React.createElement("h2", {}, name + " " + breed),
  //   React.createElement("h3", {}, name + " " + breed)
  // ]);
  var photo = (
    <img
      src="https://via.placeholder.com/300/09f/fff.png%20C/O%20https://placeholder.com/"
      alt=""
    />
  );

  if (photos.length) {
    photo = <img src={photos[0].large} alt="" />;
  }

  return (
    <a href={`details/${id}`} className="pet">
      <div className="image-container">{photo}</div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {breed} - {location}
        </h2>
      </div>
    </a>
  );
}
