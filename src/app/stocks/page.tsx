import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import StockManager from "./StockManager";

export const metadata: Metadata = {
  title: "Stock Management",
  description: "",
};

const StocksPage = () => {
 
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Stock Management" />

      <div className="relative flex flex-col gap-10">
        <div className="">
          <StockManager />
        </div>
        <Link
          href={"/stocks/add"}
          className="fixed bottom-16 right-18 inline-flex rounded-full bg-primary bg-opacity-30 px-3 py-1 text-sm font-bold text-primary  "
        >
          Add Stock
        </Link>
      </div>
    </DefaultLayout>
  );
};

export default StocksPage;
