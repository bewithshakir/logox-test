import React, { useState } from "react";
import "./App.css";
import { SelectDropDown } from "./components/dropdrown/SelectDropDown";

function App() {
  const [selectedCity, setSelectedCity] = useState("");
  const cities = [
    { name: "New York", id: "NY" },
    { name: "India", id: "RM" },
    { name: "London", id: "LDN" },
  ];
  return (
    <div className="App">
      <div className="card">
        <SelectDropDown
          value={selectedCity}
          onChangeFn={(inputVal) => {
            setSelectedCity(inputVal);
          }}
          options={cities}
          placeholder="Select a City"
          editable
        />
      </div>
    </div>
  );
}

export default App;
