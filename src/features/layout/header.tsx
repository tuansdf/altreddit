import { Link } from "wouter";

export default function Header() {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-neutral-800 p-2">
      <ul>
        {/* logo */}
        <li>
          <Link
            href="/"
            className="text-xl font-bold text-primary-400 hover:no-underline"
          >
            Predd
          </Link>
        </li>
      </ul>
      <ul className="order-last w-full sm:order-none sm:w-auto">
        <li>
          <input
            type="search"
            placeholder="Search"
            className="mt-2 w-full rounded-full border border-neutral-600 bg-neutral-700 py-2 px-6 hover:border-neutral-500 sm:mt-0"
          />
        </li>
      </ul>
      <ul>
        {/* setting */}
        <li>Setting</li>
      </ul>
    </nav>
  );
}
