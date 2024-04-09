"use client";

import StocksTable from "@/components/Tables/StockTable";
import useFetchData from "@/hooks/useFetchData";
import { ProductProp } from "@/types/productProp";
import React from "react";

function StockManager() {
  const apiUrl = "http://localhost:8053/products";
  const packageData = useFetchData(apiUrl);

  const currentDate = new Date();

  const expiredProducts: ProductProp[] = [];
  const nonExpiredProducts: ProductProp[] = [];

  packageData &&
    packageData.forEach((product) => {
      if (new Date(product.expiryDate) < currentDate) {
        expiredProducts.push(product);
      } else {
        nonExpiredProducts.push(product);
      }
    });

  return (
    <div>
      <div className="">
        <div className="">
          <StocksTable productItems={nonExpiredProducts} />
        </div>
        <div className="mt-10">
          <p className="font-bold text-xl">Expired Stock</p>
          <StocksTable productItems={expiredProducts} />
        </div>
      </div>
    </div>
  );
}

export default StockManager;
