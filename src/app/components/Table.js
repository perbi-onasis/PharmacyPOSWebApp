import React from "react";

export default function Table({ data, handleItemSelect }) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="bg-primary text-white">
              <th></th>
              <th>Product Name</th>
              <th>Unit Price (GHS)</th>
              <th>Qty in Stock</th>
              <th>Supplier</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-primary-content "
                onClick={() => handleItemSelect(item)}
              >
                <th></th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{item.supp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
