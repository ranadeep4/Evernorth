export let orders = [
  {
    id: 1,
    userId: 1,
    productIds: [1, 2],
    total: 1350,
    createdAt: new Date().toISOString(),
  },
];

let nextOrderId = 2;

export const getNextOrderId = () => nextOrderId++;
