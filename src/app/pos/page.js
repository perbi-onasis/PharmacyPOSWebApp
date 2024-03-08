"use client";

import React, { useState } from "react";
import MenuBar from "../(components)/MenuBar";
import Content from "../(components)/Content";
import MiniCart from "./MiniCart";
import { drugs, navigations } from "../dummyData";

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
    <div className="flex flex-row gap-3 min-h-[100vh] px-3">
      <div className="relative bg-primary-content ">
        <MenuBar navigations={navigations} />
      </div>

      {/* main content to the right */}
      <div className="flex-1 bg-primary-content">
        <Content drugs={drugs} func={handleItemSelectItem} />
      </div>

      <div className="bg-primary-content rounded-lg p-5 min-w-[20%]">
        <MiniCart cartItems={cartItems} />
      </div>
    </div>
  );
}
