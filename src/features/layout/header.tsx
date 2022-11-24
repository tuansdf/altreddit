import { useState } from "preact/hooks";
import { Link, useParams } from "react-router-dom";

const menu = [
  {
    label: "All",
    href: "/r/all",
    match: "all",
  },
  {
    label: "Popular",
    href: "/r/popular",
    match: "popular",
  },
];

export default function Header() {
  const { subreddit } = useParams();

  const [openMenu, setOpenMenu] = useState(false);

  const activeOption = menu.find(
    (option) => option.match === subreddit?.toLowerCase()
  );

  return (
    <nav className="flex flex-wrap items-center justify-between border border-neutral-700 bg-neutral-800 p-1">
      <ul className="flex items-center gap-4">
        {/* logo */}
        <li>
          <Link
            to="/"
            className="text-xl font-bold text-primary-400 hover:no-underline"
          >
            Predd
          </Link>
        </li>
        <li className="relative text-sm sm:text-base">
          <button
            onClick={() => setOpenMenu((prev) => !prev)}
            className="w-40 rounded border border-neutral-800 py-2 px-4 text-start font-bold hover:border-neutral-700"
          >
            {activeOption?.label || "Feeds"}
          </button>
          {openMenu ? (
            <ul className="absolute top-full left-0 w-full border border-neutral-700 bg-neutral-800">
              {menu.map((option) => (
                <li>
                  <Link
                    to={option.href}
                    className="block py-2 px-4 hover:bg-neutral-600"
                  >
                    {option.label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
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
