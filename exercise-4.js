const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const objectFilter = Object.entries(person).filter(([key, value]) => typeof value === 'number');
const arrToObj = Object.fromEntries(objectFilter);
const json = JSON.stringify(arrToObj);
console.log(arrToObj); // Should return: { id: 1, age: 25 }