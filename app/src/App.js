// const Pet = props => {
const Pet = ({animal, name, breed}) => { // KORISTIM DESCTRUCTURING UMESTO CELOG PROPS
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name+" "+breed),
    React.createElement("h2", {}, name+" "+breed),
    React.createElement("h3", {}, name+" "+breed)
  ]);
}


const App = () => {
  return React.createElement(
    "div",
    {}, // Atributi taga
    [
      React.createElement("h1", {}, "Adopt me!"), // Sadrzaj - content
      // React.createElement("h1", {} , "Adopt me!"), // Jos jedan content koji ce biti pored
      React.createElement(Pet, { name: "Ceda", "animal": "dog", "breed": "ZVERINA"}),
      React.createElement(Pet, { name: "Mica", "animal": "dog", "breed": "Alkoholicar pas"}),
      React.createElement(Pet, { name: "Pera", "animal": "dog", "breed": "Pas limar"}),
      React.createElement(Pet, { name: "Sneza", "animal": "dog", "breed": "Pekarka pas"})
      // Posto je ovo moja komponenta, ovi atributi se prosledjuju do komponente kao param. Za razliku od taga kada budu njegovi param
    ]
  );
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById("root")
);