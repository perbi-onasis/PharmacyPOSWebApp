"use client";

import React, { useState } from "react";
import StocksTable from "@/components/Tables/StockTable";
import useFetchData from "@/hooks/useFetchData";
import { ProductProp } from "@/types/productProp";
import deleteProduct from "@/components/utiles/deleteProductRecords";

function StockManager() {
  const [refreshTrigger, setRefreshTrigger] = useState(0); // State to trigger data refresh

  const productData = useFetchData("products", [refreshTrigger]); // Pass refreshTrigger as a dependency

  const currentDate = new Date();

  const expiredProducts: ProductProp[] = [];
  const nonExpiredProducts: ProductProp[] = [];

  productData &&
    productData.forEach((product) => {
      if (new Date(product.expiryDate) < currentDate) {
        expiredProducts.push(product);
      } else {
        nonExpiredProducts.push(product);
      }
    });

  const handleDeleteProduct = async (productId: any) => {
    // Your delete product logic here
    await deleteProduct(productId);
    console.log(productId);
    

    // After deleting, update the refreshTrigger state to trigger data refresh
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div>
      <div className="">
        <div className="">
          <StocksTable
            deleteProduct={handleDeleteProduct}
            productItems={nonExpiredProducts}
          />
        </div>
        <div className="mt-10">
          <p className="text-xl font-bold">Expired Stock</p>
          <StocksTable
            deleteProduct={handleDeleteProduct}
            productItems={expiredProducts}
          />
        </div>
      </div>
    </div>
  );
}

export default StockManager;
