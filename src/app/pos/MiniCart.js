import React from "react";
import { drugs } from "../dummyData";

export default function MiniCart() {
  return (
    <div className="rounded-lg">
      <h3 className="font-bold text-2xl mb-2">Cart Items</h3>
      <div className=" fixed* min-h-[40em] ">
        {drugs.map((item) => (
          <Cart cost={item.cost} name={item.name} price={item.price} />
        ))}
      </div>
      <div></div>
    </div>
  );
}

function Cart({ name, cost, price }) {
  return (
    <div className="card mt-2 card-compact  bg-primary-content border border-transparent hover:border-accent hover:bg-opacity-20">
      <div className="card-body justify-between">
        <div className="">{name}</div>
      </div>
    </div>
  );
}
