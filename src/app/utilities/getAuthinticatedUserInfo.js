"use client";

import { options } from "../api/auth/[...nextauth]/options";

export default async function UserData() {
  const session = await getServerSession(options);
  return session;
}
