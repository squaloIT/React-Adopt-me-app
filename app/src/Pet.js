import React from "react";
// var React = require("react");
// const Pet = props => {
export default function Pet({ name, breed }) {
  // KORISTIM DESCTRUCTURING UMESTO CELOG PROPS
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, name + " " + breed),
  //   React.createElement("h2", {}, name + " " + breed),
  //   React.createElement("h3", {}, name + " " + breed)
  // ]);
  return (
    <div>
      <h1>{name}</h1>
      <h2>{breed}</h2>
    </div>
  );
}
