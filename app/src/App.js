import React, { lazy, Suspense } from "react";
import SearchParams from "./SearchParams";
// import Details from "./Details";
import { Router } from "@reach/router";
//Omogucava mi da Redux store postoji svuda unutar moje aplikacije
import { Provider } from "react-redux";
import NavBar from "./NavBar";
import store from "./redux/store";

const Details = lazy(() => import("./Details"));

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
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
      </Provider>
    </React.StrictMode>
  );
};
// Problem je bio sa parcel bundler-om 1.12.3
// render(React.createElement(App), document.getElementById("root"));
export default App;
