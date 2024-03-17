import React from "react";
import { GoCircle } from "react-icons/go";

export default function Table({ data, func }) {
  return (
    <div>
      <div className="">
        <ul>
          {data.map((item) => (
            <li
              key={item.id}
              className="border border-transparent hover:border-primary p-2 rounded flex items-center "
            >
              <div className="btn btn-lg btn-disabled">
                <GoCircle />
              </div>
              <div className="flex flex-1 justify-between items-center  text-gray-500">
                <div className="p-2 text-sm">
                  <h4 className="font-bold text-xl text-black">{item.name}</h4>
                  <p>Price {item.sellingPrice}</p>
                  <p>Quantity {item.quantity}</p>
                </div>{" "}
                <div className="p-2 text-sm">
                  <h4 className=" flex">Expiry Date {item.expiryDate}</h4>
                </div>
                <button className="btn " onClick={() => func(item)}>
                  Add to cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
