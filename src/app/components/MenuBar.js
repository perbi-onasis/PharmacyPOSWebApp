import Link from "next/link";
import React from "react";
import { GoHomeFill } from "react-icons/go";

export default function MenuBar() {
  // icon

  return (
    <div className="flex flex-col  w-full ">
      <title>Point of Sale</title>

      <ul className="menu">
        <div className="divider">Logo</div>
        <div className="divider"></div>

        <li>
          <Link href="/pos" className=" btn btn-ghost w-full h-fit">
            <GoHomeFill size={30} className="text-primary" />
            <span className="font-bold text-xs">Point of Sale</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
