import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";

export default function MiniCart({ cartItems }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(cartItems.map(item => ({ ...item, quantity: 1 })));
  }, [cartItems]);

  const handleQuantityChange = (index, amount) => {
    setCart(prevCart => {
      const updatedCart = [...prevCart];
      const newQuantity = Math.max(updatedCart[index].quantity + amount, 1);
      updatedCart[index] = { ...updatedCart[index], quantity: newQuantity };
      return updatedCart;
    });
  };

  const handleDeleteItem = (index) => {
    setCart(prevCart => {
      const updatedCart = [...prevCart];
      updatedCart.splice(index, 1);
      return updatedCart;
    });
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
                </div>
                <div className="w-14 flex items-center justify-between">
                  <button className="text-xl hover:bg-gray-800" onClick={() => handleQuantityChange(index, -1)}>-</button>
                  <div>{item.quantity}</div>
                  <button className="text-xl hover:bg-gray-800" onClick={() => handleQuantityChange(index, 1)}>+</button>
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
