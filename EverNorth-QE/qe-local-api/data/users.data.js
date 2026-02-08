export let users = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", email: "bob@example.com" },
];

let nextUserId = 3;

export const getNextUserId = () => nextUserId++;
