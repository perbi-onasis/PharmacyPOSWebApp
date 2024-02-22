import React from "react";
import { GoSearch } from "react-icons/go";
import Table from "./Table";
import { drugs } from "../dummyData";


export default function Content() {


  return (
    <div className="bg-pink-40">
      <label className="input input-bordered flex items-center gap-2 max-w-md mb-5">
        <input type="text" className="grow" placeholder="Search" />
        <GoSearch />
      </label>
      <div className="">
     
        <Table data={drugs} />
      </div>
    </div>
  );
}
