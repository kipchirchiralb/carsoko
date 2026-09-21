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

  const showModels = ()=>{
    // show models for the selected make
  }
  return (
    <div>
      <select name="" id="" onChange={showModels}>
        <option value="">Select Make</option>
        {cars.map((car, index) => {
          return (
            <option key={index} value={car.make}>{car.make}</option>
          );
        })}
      </select>
      <select name="" id="">
        <option value="">Select Model</option>
      </select>
      <select name="" id="">
        <option value="">Select Year</option>
      </select>
    </div>
  );
}

export default Search;
