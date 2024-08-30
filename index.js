const myCar = {
    make: 'Toyota',
    model: 'Camry',
    year: 2021,
    color: 'Blue',
    mileage: 15000,
    isElectric: false,
    hasSunroof: true,
    numberOfDoors: 4,
    ownerName: 'John Doe',
    lastServiceDate: '2023-05-15',
    isUnderWarranty: true,
    fuelType: 'Gasoline',
    transmissionType: 'Automatic',
    VIN: '4T1BF1FK6LU123456'
  };
  
  const propertyName = 'color';
  myCar[propertyName] = 'Red';
  const newPropertyName = 'forSale';
myCar[newPropertyName] = true;
console.log(myCar);
  