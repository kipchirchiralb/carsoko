import { useState } from "react";
import "./Search.css";

function Search() {
  const cars = [
    {
      make: "Toyota",
      models: [
        "Harrier",
        "Axio",
        "Vitz",
        "Fielder",
        "Prado",
        "Probox",
        "Premio",
        "Hilux",
      ],
    },
    {
      make: "Nissan",
      models: ["Note", "X-Trail", "March", "Dualis", "Navara", "NV350 Urvan"],
    },
    {
      make: "Subaru",
      models: ["Forester", "Outback", "Impreza", "Legacy"],
    },
    {
      make: "Mazda",
      models: ["Demio", "CX-5", "Axela", "CX-3"],
    },
    {
      make: "Honda",
      models: ["Fit", "Vezel", "CR-V", "Civic"],
    },
    {
      make: "Isuzu",
      models: ["D-Max", "N-Series", "mu-X"],
    },
    {
      make: "Suzuki",
      models: ["Alto", "Swift", "Vitara", "Jimny"],
    },
    {
      make: "Mitsubishi",
      models: ["Outlander", "RVR", "Mirage", "Pajero", "Canter"],
    },
    {
      make: "Mercedes-Benz",
      models: ["C-Class", "E-Class", "GLE-Class", "GLC-Class"],
    },
    {
      make: "BMW",
      models: ["3 Series", "5 Series", "X3", "X5"],
    },
  ];
  const years = [
    2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016,
    2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026,
  ];
  const [carMake, setCarMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(2026);
  const selectedCar = cars.find((car) => car.make === carMake);
  const showModels = (event) => {
    setCarMake(event.target.value);
    setModel("");
  };
  return (
    <section className="search-section" id="search">
      <div className="section-heading">
        <p className="eyebrow">Find your next car</p>
        <h2>Start your search</h2>
        <p>Choose a make, model, and year to narrow down your options.</p>
      </div>
      <div className="search-form">
        <label>
          Make
          <select value={carMake} onChange={showModels}>
            <option value="">Select Make</option>
            {cars.map((car, index) => {
              return (
                <option key={index} value={car.make}>
                  {car.make}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          Model
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            disabled={!selectedCar}
          >
            <option value="">Select Model</option>
            {selectedCar &&
              selectedCar.models.map((model, index) => {
                return (
                  <option key={index} value={model}>
                    {model}
                  </option>
                );
              })}
          </select>
        </label>
        <label>
          Year
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">Select Year</option>
            {[...years].reverse().map((year, index) => {
              return (
                <option key={index} value={year}>
                  {" "}
                  {year}{" "}
                </option>
              );
            })}
          </select>
        </label>
      </div>
      <p className="search-summary">
        Searching for <strong>{carMake || "any make"}</strong>,{" "}
        <strong>{model || "any model"}</strong> from{" "}
        <strong>{year || "any year"}</strong>.
      </p>
    </section>
  );
}

export default Search;
