export default function Header() {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-neutral-800 p-2">
      <ul>
        {/* logo */}
        <li className="text-xl font-bold text-primary-400">Predd</li>
      </ul>
      <ul className="order-last w-full sm:order-none sm:w-auto">
        <li>
          <input
            type="search"
            placeholder="Search"
            className="mt-2 w-full rounded bg-neutral-700 py-2 px-4 sm:mt-0"
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
