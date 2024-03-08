"use client";
import React, { useState } from "react";
import MenuBar from "../../components/MenuBar";
import Content from "../../components/Content";
import MiniCart from "../../components/MiniCart";
import { drugs } from "../../utils/dummyData";

export default function DrugSelectionPage() {
  const [cartItems, setCartItems] = useState([]);

  const handleItemSelect = (selectedItem) => {
    // Check if the item is already in the cart
    const isItemInCart = cartItems.some((item) => item.id === selectedItem.id);

    if (!isItemInCart) {
      // If not, add it to the cart
      setCartItems([...cartItems, selectedItem]);
    }
  };

  return (
    <div className="grid grid-cols-12 min-h-[100vh]">
      <div className="relative bg-primary-content p-4">
        <MenuBar />
      </div>

      {/* Main content to the right */}
      <div className="col-span-11 grid grid-cols-3 gap-4 p-5">
        <div className="content col-span-2">
          <Content drugs={drugs} onSelectItem={handleItemSelect} />
        </div>
        <div className="content border-2 rounded-lg p-5">
          <MiniCart cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
}
