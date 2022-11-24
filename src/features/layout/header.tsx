import { useEffect, useRef, useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

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
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const [openMenu, setOpenMenu] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const activeOption = menu.find(
    (option) => option.match === subreddit?.toLowerCase()
  );

  const onSearch = (e: JSX.TargetedEvent<HTMLFormElement>) => {
    e.preventDefault();

    const toSearch = searchRef.current?.value;

    if (toSearch) {
      const params = `q=${toSearch}&type=link`;
      if (
        location.pathname.endsWith("search") ||
        location.pathname.endsWith("search/")
      ) {
        navigate(`?${params}`);
      } else if (location.pathname.startsWith("/r/")) {
        navigate(`/r/${subreddit}/search/?${params}`);
      } else {
        navigate(`/search/?${params}`);
      }
    }
  };

  useEffect(() => {
    const query = searchParams.get("q");
    if (query && searchRef.current) {
      searchRef.current.value = query;
    }
  }, []);

  return (
    <nav className="flex flex-wrap items-center justify-between border-b border-neutral-700 bg-neutral-800 px-2 py-1">
      <ul className="flex items-center gap-4">
        {/* logo */}
        <li>
          <Link
            to="/"
            className="text-lg font-bold text-primary-400 hover:no-underline sm:text-xl"
          >
            altreddit
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
            <ul className="absolute top-full left-0 z-50 w-full border border-neutral-700 bg-neutral-800">
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
          <form onSubmit={onSearch} className="w-full">
            <input
              ref={searchRef}
              type="search"
              placeholder="Search"
              className="mt-2 w-full rounded-full border border-neutral-600 bg-neutral-700 py-1 px-4 hover:border-neutral-500 sm:mt-0 sm:py-2 sm:px-6"
            />
          </form>
        </li>
      </ul>
      <ul></ul>
    </nav>
  );
}
