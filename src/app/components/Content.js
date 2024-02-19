import React from "react";
import { GoSearch } from "react-icons/go";

export default function Content() {
  return (
    <div className="bg-pink-40">
      <label className="input input-bordered flex items-center gap-2 max-w-md mb-5">
        <input type="text" className="grow" placeholder="Search" />
        <GoSearch />
      </label>
      <div className="">Content</div>
    </div>
  );
}
