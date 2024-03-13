import React from "react";
import { GoSearch } from "react-icons/go";
import Table from "./Table";

export default function Content({ drugs, func }) {
  return (
    <div className="pt-5">
      <h2 class="text-3xl font-bold mb-9">Point of Sale</h2>
      <label className="input input-bordered flex items-center gap-2  mb-5">
        <GoSearch />
        <input
          type="text"
          className="grow bg-purple-500"
          placeholder="Search for products"
        />
      </label>
      <div className="overflow-y-auto ">
        <Table data={drugs} func={func} />
      </div>
    </div>
  );
}
