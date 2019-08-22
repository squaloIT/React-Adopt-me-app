import React, { useState, useEffect, useContext } from "react";
import useDropdown from "./useDropdown";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Pets from "./Pets";
import ThemeContext from "./ThemeContext";

//Kada postavim @ ispred nekog import-a, a imam instaliran parcer, on ce ovo sto sam importovao instalirati za mene kroz npm!

const SearchParams = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [pets, setPets] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  //location je trenutna vrednost, a set location je setter funkcija. useState kada se pozove vraca niz sa dva elementa, prvi koji drzi trenutno stanje a drugi func koja menja to stanje.
  // Ovo je HOOK, svi Hook-ovi pocinju sa use.
  // Hooks nikada ne idu unutar if-a ili for-a ili bilo kod statementa.

  async function getPetsAPI() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
    console.log(pets);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    //Moram da postavim default stanje kada god se zivuljka za koju dohvatam rase promeni. Jer u suprotnom ostaje jedna zivotinja (pas) a rasa macke.

    pet.breeds(animal).then(({ breeds }) => {
      const breedNames = breeds.map(({ name }) => name);
      setBreeds(breedNames);
    }, console.error);
  }, [animal, setBreed, setBreeds]);
  //Drugi parametar useEffect-a definise nakon promene cega ce se trigerovati funkcija useEffect-a. To je njen takozvani dependency
  // setBreed i setBreeds su ovde dodati samo zbog ESLINT, inace promena useEffect zavisi samo i jedino od animal
  //Ako zelim da se useEffect pozove samo jedan jedini put, kada se prvi put mountuje. OSTAVIM DRUGI PARAMETAR DA BUDE PRAZAN NIZ
  // Ako zelim svaki put da se update-uje, onda izbrisem drugi parametar.

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          getPetsAPI();
        }}
      >
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
        <label htmlFor="Theme">
          Theme
          <select onChange={e => setTheme(e.target.value)}>
            <option value="darkblue">Dark blue</option>
            <option value="peru">Peru</option>
            <option value="chartreuse">chartreuse</option>
            <option value="mediumorchid">mediumorchid</option>
          </select>
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Pets pets={pets} />
    </div>
  );
};
export default SearchParams;
