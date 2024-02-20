import React from "react";

export default function Table({ data }) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table ">
          
          {/* head */}
          <thead>
            <tr className="bg-primary text-white">
              <th></th>
              <th>Name</th>
              <th>Dosage</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-primary-content">
                <th></th>
                <td>{item.name}</td>
                <td>{item.dosage}</td>
                <td>{item.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
