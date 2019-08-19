import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1>Adopt me!</h1>
        <SearchParams />
      </div>
    </React.StrictMode>
  );
};

render(React.createElement(App), document.getElementById("root"));
