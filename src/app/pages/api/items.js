// pages/api/items.js
let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" }
];

export default function handler(req, res) {
  if (req.method === 'POST') {
      const newItem = {
          id: items.length + 1,
          name: req.body.name
      };
      items.push(newItem);
      res.status(201).json(newItem);
  } else if (req.method === 'GET') {
      res.status(200).json(items);
  } else {
      res.status(405).end(); // Method Not Allowed
  }
}
