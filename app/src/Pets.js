import React from "react";
import Pet from "./Pet";

const Pets = ({ pets }) => {
  return !pets.length ? (
    <h1>No pets to show!</h1>
  ) : (
    <div className="search">
      {console.log(pets)}

      {pets.map(e => (
        <Pet
          key={e.id}
          name={e.name}
          breed={e.breeds.primary}
          photos={e.photos}
          description={e.description}
          id={e.id}
          location={e.contact.address.city + " " + e.contact.address.country}
          url={e.url}
        />
      ))}
    </div>
  );
};

export default Pets;
