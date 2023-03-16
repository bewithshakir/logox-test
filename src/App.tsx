import React, { useState } from "react";
import "./App.css";
import {
  IOptionProps,
  SelectDropDown,
} from "./components/dropdrown/SelectDropDown";

const cities = [{ name: "New York" }, { name: "India" }, { name: "London" }];

function App() {
  const [selectedCity, setSelectedCity] = useState("");
  const [data, setData] = useState(cities);
  const addCity = (city: IOptionProps) => {
    const newData = [...data];

    const updatedData = newData.find(
      (item: IOptionProps) =>
        item.name.toLocaleLowerCase() === city.name.toLocaleLowerCase()
    );
    if (!updatedData) {
      newData.push(city);
      setData(newData);
    }
  };

  return (
    <div className="App">
      <div className="card">
        <SelectDropDown
          value={selectedCity}
          onChangeFn={(inputVal) => {
            setSelectedCity(inputVal);
          }}
          options={data}
          placeholder="Select a City"
          editable
          addList={addCity}
        />
      </div>
    </div>
  );
}

export default App;
