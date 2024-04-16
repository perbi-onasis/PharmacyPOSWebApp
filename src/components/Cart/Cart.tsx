import React, { useEffect, useState } from "react";
import { ExtendedProductProp } from "@/types/cart";
import { list } from "postcss";

interface CartCardProps {
  cartItems: ExtendedProductProp[];
  handleRemoveItemFromCart: (index: any) => void;
}

const CartCard = ({ cartItems, handleRemoveItemFromCart }: CartCardProps) => {
  const [selected, setSelected] = useState<ExtendedProductProp[]>([]);

  useEffect(() => {
    setSelected([...cartItems]);

    return () => {
      selected;
    };
  }, [cartItems]);

  const handleIncrement = (index: number) => {
    const updatedSelected = [...selected];

    updatedSelected[index].quantity += 1;
    setSelected(updatedSelected);
    console.log(
      `Incremented item: -${updatedSelected[index].name.toUpperCase()}`,
    );
  };

  const handleDecrement = (index: number) => {
    const updatedSelected = [...selected];

    updatedSelected.forEach((_, i) => {
      const itemInCart = updatedSelected[i];

      if (updatedSelected[index].id === itemInCart.id) {
        updatedSelected[index].quantity -= 1;

        setSelected(updatedSelected);

        // If quantity becomes 0, remove the item
        if (itemInCart.quantity < 1) {
          handleRemoveItemFromCart(index);
          setSelected(cartItems);
        }
      }
    });
  };
  const calculate_total = () => {
    let total = 0;
    selected.forEach((item) => {
      total += item.quantity * item.sellingPrice; // Assuming each item object has 'quantity' and 'price' properties
    });
    return total;
  };

  return (
    <div className=" relative h-fit rounded-sm border border-stroke bg-white pt-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
        Cart
        <span className="block text-xs opacity-50">
          {selected.length} items in cart
        </span>
      </h4>

      <div className=" grid  grid-rows-3 gap-4 ">
        <div className="row-span-2 flex-1  overflow-y-auto">
          {selected.map((chat, key) => (
            <>
              <li className="group flex flex-col space-y-3 p-3 text-left sm:flex-row sm:space-x-1 sm:space-y-0">
                <div className="relative flex flex-1 flex-col justify-between">
                  <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div className="pr-8 sm:pr-5">
                      <p className="text-base font-semibold uppercase">
                        {chat.name}
                      </p>
                      <p className="text-gray-400 mx-0 mb-0 mt-1 text-sm">
                        <span className="block">Exp: {chat.expiryDate}</span>
                        <span className="block">
                          Sub: {chat.quantity * chat.sellingPrice} x{" "}
                          {chat.quantity}
                        </span>
                      </p>
                    </div>

                    <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                      <p className="text-gray-400 mx-0 mb-0 mt-1 text-sm">
                        Ghc {chat.sellingPrice}
                      </p>
                    </div>
                  </div>

                  <div className="absolute right-0 top-0 hidden group-hover:flex sm:bottom-0 sm:top-auto">
                    <div className="input input-xs input-ghost flex items-center">
                      <button
                        className="bg-secondary px-5"
                        onClick={() => handleDecrement(key)}
                      >
                        -
                      </button>
                      <input
                        className="w-7  border text-center "
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
              </li>
            </>
          ))}
        </div>

        <div className="h-fit self-end ">
          <div className="flex  flex-col items-center justify-center">
            <div className="bg-gray-100 w-full rounded-l p-6 ">
              {/* <div className="flex items-center justify-between">
                <span className="font-bold">Subtotal:</span>
                <span className="font-bold">$19.99</span>
              </div> */}

              {/* <div className="mt-4 flex items-center justify-between">
                <span>Taxes:</span>
                <span>$1.00</span>
              </div> */}
              <hr className="my-4" />
              <div className="flex items-center justify-between">
                <span className="font-bold">Total:</span>
                <span className="font-bold">${calculate_total()}</span>
              </div>
              <div className="mt-6 flex justify-center">
                <button className="btn btn-success w-full">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
