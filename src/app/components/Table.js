import React from "react";

export default function Table({ data }) {
  const addTocart = () => {
    console.log("clicked");
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="bg-primary text-white">
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-primary-content"
                // onClick={addTocart}
              >
                <th></th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
