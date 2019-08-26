const express = require("express");
// const React = require("react");
// import { renderToString } from "react-dom/server";
const { renderToNodeStream } = require("react-dom/server");
// const { ServerLocation } = require("@reach/router");

const fs = require("fs");
// const App = require("../src/App");

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync("dist/index.html").toString();

const parts = html.split("not rendered");

const app = express();

app.use("/dist", express.static("dist"));
app.use((req, res) => {
  //middleware mog server-a. Kod se obradjuje prilikom svakog req
  res.write(parts[0]);
  //Koristim JSX unutar React-a
  // const reactMarkup = (
  //   <ServerLocation url={req.url}>
  //     <App />
  //   </ServerLocation>
  // );
  const reactMarkup = null;
  // res.send(`${parts[0]}${renderToString(reactMarkup)}${parts[1]}`);
  // renderToString();
  // ReactDOMServer.renderToString(element);

  // Render a React element to its initial HTML. React will return an HTML string. You can use this method to generate HTML on the server and send the markup down on the initial request for faster page loads and to allow search engines to crawl your pages for SEO purposes.

  // If you call ReactDOM.hydrate() on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.
  const stream = renderToNodeStream(reactMarkup);

  stream.pipe(
    res,
    { end: false }
  );

  // - Gornjim delom sam rekao da zelim da napravim cev stream-a gde ce se u response slati sve iz stream! Dodatna opcija koju imam je end: false cime kazem da kada se stream zavrsi, on ne zavrsi sa slanjem podataka.

  stream.on("end", () => {
    res.write(parts[1]);
    res.end();
  });
  // - Ovde kazem, kada se desi end ovog stream-a, ti izvrsi funkciju. Unutar nje ja na response dodajem .write() i end()
});

console.log(`listening on ${PORT}`);
app.listen(PORT);
