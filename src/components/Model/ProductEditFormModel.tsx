
"use client";

import axios from "axios";
import React, { useState } from "react";
import DatePickerOne from "../FormElements/DatePicker/DatePickerOne";
import { ProductProp } from "@/types/productProp";

interface ProductEditFormModelProps {
  product?: ProductProp;
  clearState?: ()=> void
}

function ProductEditFormModel({ product, clearState }: ProductEditFormModelProps) {
  if (!product) {
    return <div>No product data available</div>;
  }
  console.log(product.id);

  const [formData, setFormData] = useState<ProductProp>({
    id: product.id,
    name: product.name,
    costPrice: product.costPrice,
    sellingPrice: product.sellingPrice,
    quantityInStock: product.quantityInStock,
    expiryDate: product.expiryDate,
    categoryId: product.categoryId,
  });

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  
    
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const id = product.id;



    if (id) {
      try {
        await updateItem(id, formData);
        clearState;
        console.log("Product updated successfully!");
      } catch (error) {
        console.error("Failed to update product:", error);
      }
    } else {
      console.error("Product ID is undefined.");
    }
  };
// const updateItem = async (id:string, updatedItem:ProductProp) => {
//   try {
//     const response = await fetch(
//       `http://localhost:8053/api/updateProduct/${id}`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updatedItem),
//       },
//     );

//     if (!response.ok) {
//       throw new Error("Failed to update item");
//     }

//     const data = await response.json();
//     return data; // You can return data if needed
//   } catch (error) {
//     console.error("Error updating item:", error);
//     throw error; // You can handle errors as needed
//   }
// };


  const updateItem = async (id: string, updatedItem: any) => {
    try {
      const response = await axios.put(
        `http://localhost:8053/api/updateProduct/${id}`,
        updatedItem,
      );
      return response.data; // You can return data if needed
    } catch (error) {
      console.error("Error updating item:", error);
      throw error; // You can handle errors as needed
    }
  };

  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="w-132 modal-box  border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ">
          <form onSubmit={handleSubmit} method="post" className="model-box w-full flex-1 ">
            <div className="grid-cols- grid gap-8">
              <div className="col-span-5 xl:col-span-3">
                <div className="">
                  <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                      Product Information
                    </h3>
                  </div>
                  <div className="p-7">
                    <label className="input input-bordered mb-3 flex items-center gap-2 bg-info  bg-opacity-10 text-sm font-medium text-black">
                      <input
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                        className="grow "
                      />
                    </label>

                    <label className="input input-bordered mb-3 flex items-center gap-2 bg-info  bg-opacity-10 text-sm font-medium text-black">
                      <input
                        type="number"
                        value={formData.costPrice}
                        onChange={handleChange}
                        name="costPrice"
                        className="grow"
                      />
                    </label>

                    <label className="input input-bordered mb-3 flex items-center gap-2 bg-info  bg-opacity-10 text-sm font-medium text-black">
                      <input
                        type="number"
                        value={formData.sellingPrice}
                        onChange={handleChange}
                        name="sellingPrice"
                        className="grow"
                      />
                    </label>

                    <label className="input input-bordered mb-3 flex items-center gap-2 bg-info  bg-opacity-10 text-sm font-medium text-black">
                      <input
                        type="number"
                        value={formData.quantityInStock}
                        onChange={handleChange}
                        name="quantityInStock"
                        className="grow"
                      />
                    </label>

                    <label className="input input-bordered mb-3 flex items-center gap-2 bg-info  bg-opacity-10 text-sm font-medium text-black">
                      <input
                        type="date"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        name="expiryDate"
                        className="grow"
                      />
                    </label>

                    <label className="input input-bordered mb-3 flex items-center gap-2 bg-info  bg-opacity-10 text-sm font-medium text-black">
                      <input
                        type="text"
                        value={formData.categoryId}
                        onChange={handleChange}
                        name="category"
                        className="grow"
                      />
                    </label>

                    <div className="modal-action flex justify-end ">
                      <label
                        onClick={clearState}
                        htmlFor="my_modal_6"
                        className="btn"
                        >
                        Close
                      </label>
                      <button
                        className="btn btn-primary text-white"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProductEditFormModel;
