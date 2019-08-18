import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement(
  //   "div",
  //   {}, // Atributi taga
  //   [
  //     React.createElement("h1", {}, "Adopt me!"), // Sadrzaj - content
  //     // React.createElement("h1", {} , "Adopt me!"), // Jos jedan content koji ce biti pored
  //     React.createElement(Pet, {
  //       name: "Ceda",
  //       animal: "dog",
  //       breed: "ZVERINA"
  //     }),
  //     React.createElement(Pet, {
  //       name: "Mica",
  //       animal: "dog",
  //       breed: "Alkoholicar pas"
  //     }),
  //     React.createElement(Pet, {
  //       name: "Pera",
  //       animal: "dog",
  //       breed: "Pas limar"
  //     }),
  //     React.createElement(Pet, {
  //       name: "Sneza",
  //       animal: "dog",
  //       breed: "Pekarka pas"
  //     })
  //     // Posto je ovo moja komponenta, ovi atributi se prosledjuju do komponente kao param. Za razliku od taga kada budu njegovi param
  //   ]
  // );
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Ceda" breed="ZIVULJKA" />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
