"use client";
import React from "react";
import useFetchData from "@/hooks/useFetchData"; // Import only in client-side components
import CartCard from "../Cart/Cart";
import { useState } from "react";
import { ProductProp } from "@/types/productProp";
import { ExtendedProductProp } from "@/types/cart";

function ProductTable() {
  const apiUrl = "http://localhost:8053/products";
  const packageData = useFetchData(apiUrl);

  const [selectedToCart, setSelectedToCart] = useState<ExtendedProductProp[]>(
    [],
  );

  // add items to cart
  const handleAddToCart = (item: ProductProp) => {
    // check if an item with the same id exists

    selectedToCart.forEach((element) => {
      const isExistingItem = element.id === item.id;
      console.log(isExistingItem);
      

      if (isExistingItem) {
        // If item already exists, update its quantity

        const updatedSelected = selectedToCart.map((selectedItem) => {
          if (selectedItem.id === element.id) {
            return { ...element, quantity: element.quantity + 1 };
          }
          console.log("items and element",element, item);

          return selectedItem;
        });
        setSelectedToCart(updatedSelected);
      }

       
    });

    const newItem = { ...item, quantity: 1 };
    setSelectedToCart([...selectedToCart, newItem]);
    console.log(item.name.toUpperCase(), "Added to cart");
  };

  // remove item from cart
  const handleRemoveItemFromCart = (index: any) => {
    const newSelected = selectedToCart.filter((_, i) => i !== index);
    return setSelectedToCart(newSelected);
  };


  return (
    <div className="md:mt-6* md:gap-6* 2xl:mt-7.5* 2xl:gap-7.5* mt-4 grid grid-cols-4 gap-4">
      <div className="col-span-3 rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                  Product Name
                </th>

                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                  Quantity
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                  Category
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Status
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            {packageData && (
              <tbody>
                {packageData.map((packageItem, key) => (
                  <tr
                    key={key}
                    className={`${packageItem.quantityInStock === 0 && " opacity-50"}`}
                  >
                    <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="text-lg font-bold capitalize text-black dark:text-white">
                        {packageItem.name}
                      </h5>
                      <p className="text-sm text-success">
                        ghc{packageItem.sellingPrice}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {packageItem.quantityInStock}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {packageItem.categoryId}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p
                        className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                          packageItem.quantityInStock == 0
                            ? "bg-danger text-danger"
                            : packageItem.quantityInStock < 10
                              ? "bg-warning text-warning"
                              : "bg-success text-success"
                        }`}
                      >
                        {packageItem.quantityInStock == 0
                          ? "Out of Stock"
                          : packageItem.quantityInStock < 10
                            ? "Few in Stock"
                            : "In Stock"}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <div className={`flex items-center space-x-3.5`}>
                        {packageItem.quantityInStock !== 0 && (
                          <button
                            disabled={packageItem.quantityInStock === 0}
                            onClick={() => handleAddToCart(packageItem)}
                            className={`group rounded-md border px-3 py-2  hover:bg-primary`}
                          >
                            <svg
                              className="fill-primary group-hover:fill-white  dark:fill-white"
                              width="20"
                              height="22"
                              viewBox="0 0 20 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.7531 16.4312C10.3781 16.4312 9.27808 17.5312 9.27808 18.9062C9.27808 20.2812 10.3781 21.3812 11.7531 21.3812C13.1281 21.3812 14.2281 20.2812 14.2281 18.9062C14.2281 17.5656 13.0937 16.4312 11.7531 16.4312ZM11.7531 19.8687C11.2375 19.8687 10.825 19.4562 10.825 18.9406C10.825 18.425 11.2375 18.0125 11.7531 18.0125C12.2687 18.0125 12.6812 18.425 12.6812 18.9406C12.6812 19.4219 12.2343 19.8687 11.7531 19.8687Z"
                                fill=""
                              />
                              <path
                                d="M5.22183 16.4312C3.84683 16.4312 2.74683 17.5312 2.74683 18.9062C2.74683 20.2812 3.84683 21.3812 5.22183 21.3812C6.59683 21.3812 7.69683 20.2812 7.69683 18.9062C7.69683 17.5656 6.56245 16.4312 5.22183 16.4312ZM5.22183 19.8687C4.7062 19.8687 4.2937 19.4562 4.2937 18.9406C4.2937 18.425 4.7062 18.0125 5.22183 18.0125C5.73745 18.0125 6.14995 18.425 6.14995 18.9406C6.14995 19.4219 5.73745 19.8687 5.22183 19.8687Z"
                                fill=""
                              />
                              <path
                                d="M19.0062 0.618744H17.15C16.325 0.618744 15.6031 1.23749 15.5 2.06249L14.95 6.01562H1.37185C1.0281 6.01562 0.684353 6.18749 0.443728 6.46249C0.237478 6.73749 0.134353 7.11562 0.237478 7.45937C0.237478 7.49374 0.237478 7.49374 0.237478 7.52812L2.36873 13.9562C2.50623 14.4375 2.9531 14.7812 3.46873 14.7812H12.9562C14.2281 14.7812 15.3281 13.8187 15.5 12.5469L16.9437 2.26874C16.9437 2.19999 17.0125 2.16562 17.0812 2.16562H18.9375C19.35 2.16562 19.7281 1.82187 19.7281 1.37499C19.7281 0.928119 19.4187 0.618744 19.0062 0.618744ZM14.0219 12.3062C13.9531 12.8219 13.5062 13.2 12.9906 13.2H3.7781L1.92185 7.56249H14.7094L14.0219 12.3062Z"
                                fill=""
                              />
                            </svg>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
      <CartCard
        cartItems={selectedToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
      />
    </div>
  );
}

export default ProductTable;
