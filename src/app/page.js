import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Hello</h1>
      <p>posible routs</p>
      <ul>
        <li><Link href={'/pos'}>pos</Link></li>
        <li>1</li>
        <li>1</li>
      </ul>
    </main>
  );
}
