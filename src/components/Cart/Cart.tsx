import React, { useState } from "react";
import { ExtendedProductProp } from "@/types/cart";

interface CartCardProps {
  CartItems: ExtendedProductProp[]; // Assuming ProductProp is the type of your array items
}

const CartCard: React.FC<CartCardProps> = ({ CartItems }) => {
  // Ensure each item in chatData has a quantity property


  
  
  const [selected, setSelected] = useState<ExtendedProductProp[]>([...CartItems]);


  const handleIncrement = (index: number) => {
    const updatedSelected = [...selected];
    updatedSelected[index].quantity += 1;
    setSelected(updatedSelected);
    console.log("Incremented item:", updatedSelected[index]);
    console.log("Updated state after increment:", selected);
  };

  const handleDecrement = (index: number) => {
    const updatedSelected = [...selected];
    if (updatedSelected[index].quantity > 1) {
      updatedSelected[index].quantity -= 1;
      setSelected(updatedSelected);
      console.log("Decremented item:", updatedSelected[index]);
      console.log("Updated state after decrement:", selected);
    } else {
      // If quantity becomes 0, remove the item
      const newSelected = updatedSelected.filter((_, i) => i !== index);
      setSelected(newSelected);
      console.log("Removed item:", updatedSelected[index]);
      console.log("Updated state after removal:", selected);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
        Cart
      </h4>

      <div>
        {CartItems.map((chat, key) => (
          <div
            className="flex items-center gap-5 px-7.5 py-3 hover:bg-gray-3 dark:hover:bg-meta-4"
            key={key}
          >
            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="text-lg capitalize text-black dark:text-white">
                  {chat.name}
                </h5>
                <p>
                  <span className="text-sm font-black text-black dark:text-white">
                    Sub Total {chat.quantity * chat.sellingPrice}
                  </span>
                  {/* <span className="text-xs"> . {chat.quantity} min</span> */}
                </p>
              </div>
              <div className="flex items-center">
                <button
                  className="bg-secondary px-5"
                  onClick={() => handleDecrement(key)}
                >
                  -
                </button>
                <input
                  className="w-7 border text-center"
                  value={chat.quantity}
                  readOnly
                />
                <button
                  className="bg-secondary px-5"
                  onClick={() => handleIncrement(key)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartCard;
