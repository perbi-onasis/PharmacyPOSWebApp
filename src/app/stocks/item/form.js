"use client";

import React, { useState } from "react";

export default function ProductForm() {
  const [productData, setProductData] = useState({
    name: "",
    costPrice: "",
    sellingPrice: "",
    quantityInStock: "",
    expiryDate: "",
  });

  const handleSubmitClick = (event) => {
    event.preventDefault();

    // Handle form submission here
    // Send data through API
    console.log("Submitted data:", productData);
  };

  // The `handleInputChange` function updates the `productData` state with the new value based on the
  // input field name.
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData({ ...productData, [name]: value });
    console.log(productData);
  };

  return (
    <div>
      <form onSubmit={handleSubmitClick}>
        <h3 className="font-bold text-2xl mb-4">Stock Entry</h3>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Product Name</span>
          </div>
          <input
            className="input input-bordered w-full"
            type="text"
            name="name"
            placeholder="Enter name "
            value={productData.name}
            onChange={handleInputChange}
          />
        </label>

        <div className="grid grid-cols-2 gap-2">
          <label className="form-control  ">
            <div className="label">
              <span className="label-text">Quantity</span>
            </div>
            <input
              className="input input-bordered w-full"
              type="text"
              name="quantityInStock"
              placeholder="0"
              value={productData.quantityInStock}
              onChange={handleInputChange}
            />
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Unit Cost</span>
            </div>
            <input
              className="input input-bordered w-full"
              type="text"
              name="costPrice"
              placeholder="0.00"
              value={productData.costPrice}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Selling Price</span>
            </div>
            <input
              className="input input-bordered w-full"
              type="text"
              name="sellingPrice"
              placeholder="0.00"
              value={productData.sellingPrice}
              onChange={handleInputChange}
            />
          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Expiry Date</span>
            </div>
            <input
              className="input input-bordered w-full"
              type="date"
              name="expiryDate"
              value={productData.expiryDate}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Supplier</span>
          
          </div>
          <select className="select select-bordered">
            <option disabled selected>
              Pick one
            </option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>
        
        </label>
        <div className="mt-5 w-full">
          <button className="btn mb-2 btn-primary w-full ">Submit</button>
          <label htmlFor="add_item_model" className="btn w-full">
            Close
          </label>
        </div>
      </form>
    </div>
  );
}
