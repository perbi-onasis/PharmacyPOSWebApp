import Link from "next/link";
import React from "react";

export default function NavBar() {
  const navigations = [
    {
      name: "Dashboard",
      link: "/dashboard",
      disabled: true,
    },
    {
      name: "Sales",
      link: "/pos",
      disabled: false,
    },
    {
      name: "Stocks",
      link: "/stocks",
      disabled: false,
    },
    {
      name: "Profile",
      link: "/profile",
      disabled: true,
    },
    {
      name: "Profile",
      link: "/profile",
      disabled: true,
    },
  ];
  return (
    <div>
      <div className="navbar bg-base-200 ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">PharmGenius</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {navigations.map((link) => (
              <li>
                <Link
                  className={`${link.disabled && "text-red-400"}`}
                  href={`${link.disabled ? "/" : link.link}`}
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
