import React from "react";
import { GoSearch } from "react-icons/go";
import Table from "./Table";

export default function Content() {
  
  const drugs = [
    {
      id: 1,
      name: "Aspirin",
      category: "Analgesic",
      type: "Tablet",
      dosage: "325 mg",
      manufacturer: "Bayer",
      uses: ["Pain relief", "Fever reduction"],
      sideEffects: ["Stomach irritation", "Bleeding"],
      interactions: ["Warfarin", "Ibuprofen"],
    },
    {
      id: 2,
      name: "Paracetamol",
      category: "Analgesic",
      type: "Tablet",
      dosage: "500 mg",
      manufacturer: "Various",
      uses: ["Pain relief", "Fever reduction"],
      sideEffects: ["Liver damage (in high doses)"],
      interactions: ["Alcohol", "Warfarin"],
    },
    {
      id: 3,
      name: "Ibuprofen",
      category: "NSAID",
      type: "Tablet",
      dosage: "200 mg",
      manufacturer: "Various",
      uses: ["Pain relief", "Inflammation reduction"],
      sideEffects: ["Stomach irritation", "Kidney damage (in high doses)"],
      interactions: ["Aspirin", "Lisinopril"],
    },
    {
      id: 4,
      name: "Amoxicillin",
      category: "Antibiotic",
      type: "Capsule",
      dosage: "500 mg",
      manufacturer: "Various",
      uses: ["Bacterial infections"],
      sideEffects: ["Diarrhea", "Allergic reactions"],
      interactions: ["Probenecid", "Warfarin"],
    },
    {
      id: 5,
      name: "Omeprazole",
      category: "Proton Pump Inhibitor",
      type: "Capsule",
      dosage: "20 mg",
      manufacturer: "Various",
      uses: ["Gastric acid reduction", "Ulcer treatment"],
      sideEffects: ["Headache", "Nausea"],
      interactions: ["Clopidogrel", "Lansoprazole"],
    },
    {
      id: 6,
      name: "Loratadine",
      category: "Antihistamine",
      type: "Tablet",
      dosage: "10 mg",
      manufacturer: "Various",
      uses: ["Allergy relief"],
      sideEffects: ["Drowsiness (in some individuals)"],
      interactions: ["Ketoconazole", "Erythromycin"],
    },
    {
      id: 7,
      name: "Morphine",
      category: "Opioid",
      type: "Tablet",
      dosage: "10 mg",
      manufacturer: "Various",
      uses: ["Pain relief (severe pain)"],
      sideEffects: ["Drowsiness", "Constipation"],
      interactions: ["Alcohol", "Benzodiazepines"],
    },
    {
      id: 8,
      name: "Diazepam",
      category: "Benzodiazepine",
      type: "Tablet",
      dosage: "5 mg",
      manufacturer: "Various",
      uses: ["Anxiety relief", "Muscle relaxation"],
      sideEffects: ["Drowsiness", "Dependency (with long-term use)"],
      interactions: ["Alcohol", "Opioids"],
    },
    {
      id: 9,
      name: "Dexamethasone",
      category: "Corticosteroid",
      type: "Tablet",
      dosage: "4 mg",
      manufacturer: "Various",
      uses: ["Inflammation reduction", "Allergic reactions"],
      sideEffects: ["Increased appetite", "Insomnia"],
      interactions: ["Warfarin", "Phenytoin"],
    },
    {
      id: 10,
      name: "Codeine",
      category: "Opioid",
      type: "Syrup",
      dosage: "10 mg/5 mL",
      manufacturer: "Various",
      uses: ["Cough suppression", "Mild to moderate pain relief"],
      sideEffects: ["Drowsiness", "Constipation"],
      interactions: ["Alcohol", "Benzodiazepines"],
    },
  ];

  

  return (
    <div className="bg-pink-40">
      <label className="input input-bordered flex items-center gap-2 max-w-md mb-5">
        <input type="text" className="grow" placeholder="Search" />
        <GoSearch />
      </label>
      <div className=""> <Table data={drugs}/></div>
     
    </div>
  );
}
