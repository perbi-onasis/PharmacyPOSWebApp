import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="">Hello</h1>
      <p>Posible route</p>
      <ul>
        <li><Link className="btn bt" href={'/pos'}>point of sale</Link></li>
      </ul>
    </main>
  );
}

