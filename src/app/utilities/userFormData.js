"use client";
import { useState } from "react";

export default function userFormData(event) {
  const [userData, setUserData] = useState({});
  event.preventDefault();

  const [email, password] = event.target.value;

  console.log(email, password);

  //   return { email: email, password: password };
}
