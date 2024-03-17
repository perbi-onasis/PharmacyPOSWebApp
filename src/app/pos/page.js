"use client";

import React, { useState } from "react";
import MenuBar from "../(components)/MenuBar";
import Content from "../(components)/Content";
import MiniCart from "./MiniCart";
import { drugs, navigations } from "../dummyData";
import NavBar from "../(components)/NavBar";

export default function page() {
  const [cartItems, setCartItems] = useState([]);

  const handleItemSelectItem = (item) => {
    // Remove item from source list
    // const updatedSourceItems = drugs.filter(
    //   (sourceItem) => sourceItem !== item
    // );
    // setSourceItems(updatedSourceItems);
    console.log(item);

    // Add item to destination list
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="">
      <NavBar />
      <div className="flex flex-row gap-3 min-h-[100vh] px-3">
        <div className="flex-1 px-24 overflow-y-scroll ">
          <Content drugs={drugs} func={handleItemSelectItem} />
        </div>

        <div className="min-w-[20%]">
          <div className="">
            <MiniCart cartItems={cartItems} />
          </div>
        </div>
      </div>
    </div>
  );
}
