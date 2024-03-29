"use client";

import Link from "next/link";

import { FaLink } from "react-icons/fa";
import UserData from "./utilities/getAuthinticatedUserInfo";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/users/api/products/single",
          {
            method: "POST", // Specify the POST method
            headers: {
              "Content-Type": "application/json", // Set the content type
              // Add any other headers if needed
            },
            body: JSON.stringify({
              Name: "paraTest",
              CostPrice: "58",
              SellingPrice: "60",
              QuantityInStock: "99",
              ExpiryDate: new Date(),
            }), // If you have any data to send, include it here
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://localhost:8080/users/api/products/"
  //       );
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
  //       const data = await response.json();
  //       console.log(data)
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Link className="btn bt" href={"/pos"}>
        Point of sale <FaLink className="text-secondary" />
      </Link>

      {UserData ? (
        <Link className="btn" href="/api/auth/signout?callbackUrl=/">
          logout
        </Link>
      ) : (
        <Link href="/api/auth/signin">login</Link>
      )}
      <p> {UserData?.user?.email}</p>
    </main>
  );
}
