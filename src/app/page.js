import Link from "next/link";import { FaLink } from "react-icons/fa";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Link className="btn bt" href={"/pos"}>
        Point of sale <FaLink className="text-secondary"/>
      </Link>
    </main>
  );
}

