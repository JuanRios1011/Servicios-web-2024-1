let car = {
    brand: "mazda",
    model: 2024,
    weight: 1000,
    color: "black",
  };
  
  console.table(car);
  console.log(car.brand);
  console.log(car["brand"]);
  
  // agregar una propieda
  car["nueva-prop"] = "propiedad";
  console.table(car);
  
  // modificar el valor de una propiedad
  car["nueva-prop"] = "hola mundo";
  console.table(car);
  
  // propiedades
  console.log(Object.keys(car));
  console.log(Object.values(car));
  console.log(Object.entries(car));
  const newCar = Object.assign(car); // mutación de un obje
  console.table(newCar);