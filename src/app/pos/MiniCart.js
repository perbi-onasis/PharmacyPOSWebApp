import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";

export default function MiniCart({ cartItems }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(cartItems);
  }, [cartItems]);

  const handleQuantityChange = (index, newQty) => {
    const updatedCart = [...cart];
    updatedCart[index].countQty = Math.max(newQty, 0);
    setCart(updatedCart);
  };

  const handleDeleteItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const handleItemSelect = (selectedItem) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(item => item.id === selectedItem.id);

    if (existingItemIndex !== -1) {
      // If item already exists, update its quantity
      updatedCart[existingItemIndex].countQty += 1;
    } else {
      // If item is not in the cart, add it
      setCart([...updatedCart, { ...selectedItem, countQty: 1 }]);
    }
  };

  return (
    <div className="rounded-lg flex flex-col min-h-full">
      <h3 className="font-bold text-2xl mb-2 text-center">Cart Items</h3>

      {cart.length !== 0 ? (
        <div className="overflow-x-auto max-h-[35em] min-h-[30em]">
          {cart.map((item, index) => (
            <div key={index} className="card mt-2 card-compact bg-primary-content border border-transparent hover:border-accent hover:bg-opacity-20">
              <div className="card-body flex-row justify-between">
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <span className="block read-only text-gray-500">{item.price}</span>
                </div>
                <div className="w-14 flex items-center justify-between">
                  <button className="text-xl" onClick={() => handleQuantityChange(index, item.countQty - 1)}>-</button>
                  <div>{item.countQty}</div>
                  <button className="text-xl" onClick={() => handleQuantityChange(index, item.countQty + 1)}>+</button>
                </div>
                <div className="card-actions">
                  <button className="btn btn-sm btn-error" onClick={() => handleDeleteItem(index)}>
                    <MdDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-1 justify-center items-center">
          <div className="flex flex-col items-center">
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
