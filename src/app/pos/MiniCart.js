"use client";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

export default function MiniCart({ cartItems }) {
 




  return (
    <div className="rounded-lg  flex flex-col  min-h-full">
      <h3 className="font-bold text-2xl mb-2 ">Cart Items</h3>
      {cartItems.length !== 0 && (
        <div className=" overflow-x-auto max-h-[35em] min-h-[30em]">
          {cartItems.map((item) => (
            <CartListItem
              cost={item.cost}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      )}

      {cartItems.length == 0 && (
        <div className="flex flex-1 justify-center items-center">
          <div className="flex flex-col  items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info shrink-0 w-6 h-6 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span className="font-bold text-xl">Cart is empty.</span>
          </div>
        </div>
      )}
    </div>
  );
}

function CartListItem({ name, cost, price }) {
   const [countQty, setCountQty] = useState(1);
  return (
    <div className="card mt-2 card-compact  bg-primary-content border border-transparent hover:border-accent hover:bg-opacity-20">
      <div className="card-body flex-row justify-between">
        <div className="">
          <h3 className="font-bold">{name}</h3>
          <span className="block read-only text-gray-500">{price}</span>
        </div>
        <div className="flex items-center">
          <button className="btn btn-sm">-</button>
          {/* <input
            type="text"
            value={countQty}
            
            className="input input-sm  w-5 input- border-3"
          /> */}
          <div>{countQty}</div>
          <button className="btn btn-sm">+</button>
        </div>
        <div className="card-actions">
          <button className="btn btn-sm btn-error">
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
