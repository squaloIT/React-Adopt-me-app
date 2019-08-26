import React, { useState, lazy, Suspense } from "react";
import SearchParams from "./SearchParams";
// import Details from "./Details";
import { Router } from "@reach/router";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";

const Details = lazy(() => import("./Details"));

const App = () => {
  const theme = useState("darkblue"); // [state, setState]

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
          <NavBar />
          <Suspense
            fallback={
              <h1>
                Neki markup koji ce se prikazati dok se ucitavati Details,
                odnosno razresava promise import-a
              </h1>
            }
          >
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};
// Problem je bio sa parcel bundler-om 1.12.3
// render(React.createElement(App), document.getElementById("root"));
export default App;
