import React from "react";
import { GoCircle } from "react-icons/go";

export default function Table({ data, func }) {
  return (
    <div>
      <div className="">
        <ul>
          {data.map((item) => (
            <li key={item.id} className="hover:bg-base-200 flex items-center ">
              <div className="btn btn-lg btn-disable">
                <GoCircle />
              </div>
              <div className="flex flex-1 justify-between">
                <div className="p-2 text-sm">
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-opacity-20">{item.price}</p>
                  <p className="text-base-100">{item.qty}</p>
                </div>
                <button className="btn btn-sm " onClick={() => func(item)}>
                  Add to cart
                </button>
              </div>
            </li>
          ))}
          <li></li>
        </ul>
      </div>
    </div>
  );
}
