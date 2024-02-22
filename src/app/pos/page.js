import React from "react";
import MenuBar from "../components/MenuBar";
import Content from "../components/Content";
import MiniCart from "./MiniCart";

export default function page() {
  return (
    <div className="grid grid-cols-12 min-h-[100vh]">
      <div className="relative  bg-primary-content  p-4 ">
        <MenuBar />
      </div>
      {/* main content to the right */}
      <div className="col-span-11 grid grid-cols-3 gap-4 p-5 ">
        <div className="content  col-span-2">
          <Content />
        </div>
        <div className="content border-2 rounded-lg p-5">
          <MiniCart />
        </div>
      </div>
    </div>
  );
}
