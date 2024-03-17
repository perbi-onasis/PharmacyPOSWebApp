"use client";

import ProductForm from "./item/form";
import { FaEdit, FaPlus } from "react-icons/fa";
import NavBar from "../(components)/NavBar";

import React, { useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { drugs } from "../dummyData";

export default function Stocks() {
  const [productData, setProductData] = useState(drugs);

  const handleEditClick = (id) => {
    // Handle edit click
    console.log("Edit clicked for product with ID:", id);
  };

  const handleDeleteClick = (id) => {
    // Handle delete click
    console.log("Delete clicked for product with ID:", id);
    setProductData(productData.filter((item) => item.id !== id));
  };

  return (
    <div>
      <NavBar />
      <ul className="px-16">
      <h2 className="font-bold text-3xl py-6">Product List</h2>
        {productData.map((product) => (
          <>
            <li
              key={product.id}
              className="p-3 flex justify-between items-center mt-3 text-sm text-gray-500 bg-base-200 "
            >
              <div className="">
                <h4 className="w-full text-lg font-bold text-black">
                  {product.name}
                </h4>
                <p className="">Cost Price: {product.costPrice}</p>
                <p className="text-gray-500">
                  Selling Price: {product.sellingPrice}
                </p>
              </div>

              <div className="">
                <p>Quantity In Stock: {product.quantity}</p>
                <p>Expiry Date: {product.expiryDate}</p>
              </div>

              <div className="join gap-2">
                <button
                  className="btn btn-warning"
                  onClick={() => handleEditClick(product.id)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-error"
                  onClick={() => handleDeleteClick(product.id)}
                >
                  <MdDeleteSweep />
                </button>
              </div>
            </li>
          </>
        ))}
      </ul>
      {/* The button to open modal */}
      <label
        htmlFor="add_item_model"
        className="fixed bottom-10 right-10 btn p-5  shadow-2xl  btn-primary"
      >
       
        Add Stocks
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="add_item_model" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box w-11/12 max-w-5xl p-8">
          <ProductForm />
        </div>
      </div>
    </div>
  );
}
