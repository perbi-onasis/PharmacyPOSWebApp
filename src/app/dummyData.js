
import { GoHomeFill } from "react-icons/go";


const drugs = [
  {
    id: 1,
    qty: 3,
    name: "Aspirin",
    category: "Analgesic",
    type: "Tablet",
    supp: "wisesdf",
    price: 23,
    cost: 12,
  },
  {
    id: 2,
    qty: 9,
    name: "Paracetamol",
    category: "Analgesic",
    type: "Tablet",
    supp: "wisesdf",
    price: 23,
    cost: 12,
  },
  {
    id: 3,
    qty: 5,
    name: "Ibuprofen",
    category: "NSAID",
    type: "Tablet",
    supp: "wisesdf",
    price: 23,
    cost: 12,
  },
  {
    id: 4,
    qty: 34,
    name: "Amoxicillin",
    category: "Antibiotic",
    type: "Capsule",
    supp: "wisesdf",
    price: 23,
    cost: 12,
  },
  {
    id: 5,
    qty: 3,
    name: "Omeprazole",
    category: "Proton Pump Inhibitor",
    type: "Capsule",
    supp: "wisesdf",
    price: 23,
    cost: 12,
  },
  {
    id: 6,
    qty: 34,
    name: "Loratadine",
    category: "Antihistamine",
    type: "Tablet",
    supp: "wisesdf",
    price: 23,
    cost: 12,
  },
  {
    id: 7,
    qty: 0,
    name: "Morphine",
    category: "Opioid",
    type: "Tablet",
    supp: "wisesdf",
    price: 23,
    cost: 12,
  },
  {
    id: 8,
    qty: 34,
    name: "Diazepam",
    category: "Benzodiazepine",
    type: "Tablet",
    supp: "wisesdf",
    price: 23,
    cost: 12,
  },
  {
    id: 9,
    qty: 3,
    name: "Dexamethasone",
    category: "Corticosteroid",
    type: "Tablet",
    supp: "wisesdf",
    price: 23,
    cost: 12,
  },
  {
    id: 10,
    qty: 2,
    name: "Codeine",
    category: "Opioid",
    type: "Syrup",
    supp: "wisesdf",
    price: 23,
    cost: 12,
  },
];

const navigations = [
  {
    name: "Sales",
    link: "/pos",
    icon: <GoHomeFill  />,
  },
  {
    name: "Stocks",
    link: "/stocks",
    icon: <GoHomeFill />,
  },

];

export { drugs, navigations };
