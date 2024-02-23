import React from "react";
import { GoSearch } from "react-icons/go";
import Table from "./Table";



export default function Content({drugs, func}) {


  return (
    <div className="">
      <label className="input input-bordered flex items-center gap-2 max-w-md mb-5">
        <input type="text" className="grow" placeholder="Search" />
        <GoSearch />
      </label>
      <div className="">
     
        <Table data={drugs} func={func} />
      </div>
    </div>
  );
}
