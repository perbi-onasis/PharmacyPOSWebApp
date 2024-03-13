import Link from "next/link";
import React from "react";

export default function NavBar() {
  const navigations = [
    {
      name: "Sales",
      link: "/pos",
    },
    {
      name: "Stocks",
      link: "/stocks",
    },
  ];
  return (
    <div>
      <div className="navbar bg-base-100 border-b border-gray-500">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {navigations.map((link) => (
              <li>
                <Link
                  className=""
                  href={link.link}
                >
                  {link.name}
                </Link>
              </li>
            ))}
           
            {/* <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
