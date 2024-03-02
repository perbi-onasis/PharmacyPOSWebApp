import Link from "next/link";

import { FaLink } from "react-icons/fa";
import UserData from "./utilities/getAuthinticatedUserInfo";

export default function Home() {
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
