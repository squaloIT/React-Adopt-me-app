import React, { useState } from "react";
import useDropdown from "./useDropdown";
import { ANIMALS } from "@frontendmasters/pet";
//Kada postavim @ ispred nekog import-a, a imam instaliran parcer, on ce ovo sto sam importovao instalirati za mene kroz npm!

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breeds", "", breeds);
  //location je trenutna vrednost, a set location je setter funkcija. useState kada se pozove vraca niz sa dva elementa, prvi koji drzi trenutno stanje a drugi func koja menja to stanje.
  // Ovo je HOOK, svi Hook-ovi pocinju sa use.
  // Hooks nikada ne idu unutar if-a ili for-a ili bilo kod statementa.

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="id"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams;
