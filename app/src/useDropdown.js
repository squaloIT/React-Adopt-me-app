import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);

  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  console.log(options.length);
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        name={id}
        id={id}
        value={state}
        onChange={setState}
        onBlur={setState}
        disabled={options.length === 0}
      >
        <option value="All">All</option>
        {options.map(breed => (
          <option value={breed} key={breed}>
            {breed}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, Dropdown, setState];
};

export default useDropdown;
