"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import React, { useState } from "react";
import axios from "axios";

const metadata: Metadata = {
  title: "Stock Entry",
  description: "",
};

const AddStocksPage = () => {
  const initialFormData = {
    name: "",
    costPrice: "",
    sellingPrice: "",
    quantityInStock: "",
    expiryDate: "",
    categoryId: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log({
      ...formData,
      [name]: value,
    })
  };

  const apiUrl = "http://localhost:8053/" + "saveProduct"; // Replace with your API endpoint

  const sendItemsToAPI = async (formData: any) => {
    try {
      // Send a POST request to the API endpoint with the form data
      const response = await axios.post(apiUrl, formData);
      console.log("Items sent successfully:", response.data);
      return response.data; // Optionally, return any response data
    } catch (error) {
      console.error("Error sending items:", error);
      throw error; // Rethrow the error to handle it in the calling code
    }
  };

  const handleSubmits = (e: any) => {
    e.preventDefault();
    // Format the date to match the expected format for LocalDate in Java (YYYY-MM-DD)
    const formattedDate = formData.expiryDate.split("/").reverse().join("-");
    // Update formData with the formatted date
    const updatedFormData = {
      ...formData,
      expiryDate: formattedDate,
    };
    // Here you can send updatedFormData to the API using the sendItemsToAPI function or any other method
    console.log("Form data:", updatedFormData);

    sendItemsToAPI(updatedFormData);
    // Reset form data after submission
    //  setFormData(initialFormData);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formattedDate = formData.expiryDate.split("/").reverse().join("-");
    const updatedFormData = {
      ...formData,
      expiryDate: formattedDate,
    };
    console.log("Form data:", updatedFormData);

    sendItemsToAPI(updatedFormData);
  };


  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="New Stock" />

        <div className="grid-cols- grid gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Product Information
                </h3>
              </div>
              <div className="p-7">
                <form onSubmit={handleSubmit}>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="fullName"
                      >
                        Product Name
                      </label>
                      <div className="relative">
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="costPrice"
                      >
                        Cost Price
                      </label>

                      <input
                        className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        placeholder="0.00"
                        id="costPrice"
                        type="number"
                        name="costPrice"
                        value={formData.costPrice}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="sellingPrice"
                    >
                      Selling Price
                    </label>
                    <div className="relative">
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        id="sellingPrice"
                        placeholder="0.00"
                        type="number"
                        name="sellingPrice"
                        value={formData.sellingPrice}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="quantityInStock"
                    >
                      Quantity In Stock
                    </label>

                    <input
                      className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="number"
                      id="quantityInStock"
                      name="quantityInStock"
                      value={formData.quantityInStock}
                      placeholder="5"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="expiryDate"
                    >
                      Expiry Date
                    </label>

                    <input
                      type="date"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      required
                      className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="category"
                    >
                      Category ID
                    </label>

                    <input
                      className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      placeholder=""
                      type="text"
                      id="categoryId"
                      name="categoryId"
                      value={formData.categoryId}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                      type="button"
                    >
                      Cancel
                    </button>
                    <button
                      className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AddStocksPage;
