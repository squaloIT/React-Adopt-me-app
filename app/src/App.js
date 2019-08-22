import React, { useState } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { Router, Link } from "@reach/router";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue"); // [state, setState]

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};
// Problem je bio sa parcel bundler-om 1.12.3
render(React.createElement(App), document.getElementById("root"));
