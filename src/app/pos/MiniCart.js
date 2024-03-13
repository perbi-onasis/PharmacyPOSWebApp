"use client";
import React, { useState } from "react";
import { MdAdsClick, MdDelete } from "react-icons/md";

export default function MiniCart({ cartItems }) {
  return (
    <div className="rounded-lg  flex flex-col ">
      <h3 className="font-bold text-2xl mb-2 ">Cart Items</h3>
      {cartItems.length !== 0 && (
        <div className=" overflow-x-auto max-h-[35em] min-h-[30em]">
          {cartItems.map((item, index) => (
            <CartListItem
              key={index}
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
            <MdAdsClick />
            <span className="hidden font-bold text-xl">Cart is empty.</span>
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
          <button
            className="btn btn-sm"
            onClick={() => setCountQty((prev) => prev - 1)}
          >
            -
          </button>
          <input type="number" value={countQty} className="input-sm  w-12" />

          <button
            className="btn btn-sm"
            onClick={() => setCountQty((prev) => prev + 1)}
          >
            +
          </button>
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
