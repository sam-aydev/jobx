import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between px-8  pt-2">
      <div>
        <h2 className="text-2xl font-extrabold">
          <Link href="/">
            JOB<span className="text-white ">EX</span>
          </Link>
        </h2>
      </div>
      <div>
        <button className="bg-orange-950 px-2 py-2 text-white rounded hover:bg-orange-800">
          <Link href="/contact">Contact Us</Link>
        </button>
      </div>
    </div>
  );
}
