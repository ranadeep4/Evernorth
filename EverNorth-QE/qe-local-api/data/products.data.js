export let products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Headphones", price: 150 },
];

let nextProductId = 3;

export const getNextProductId = () => nextProductId++;
