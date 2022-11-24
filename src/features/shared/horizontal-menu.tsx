import clsx from "clsx";
import { Link } from "react-router-dom";

interface IProps {
  menu: { label: string; match: string }[];
  match?: string;
  getUrl?: (match: string) => string;
}

export default function HorizontalMenu({ menu, match, getUrl }: IProps) {
  return (
    <ul className="mb-2 flex gap-2 overflow-auto rounded border border-neutral-700 bg-neutral-800 p-2 sm:mb-4">
      {menu.map((option) => (
        <li>
          <Link
            to={getUrl?.(option.match)}
            className={clsx(
              "inline-block rounded-full py-1 px-4 text-sm font-medium sm:px-6 sm:text-base",
              {
                "bg-primary-600 hover:bg-primary-500": match === option.match,
                "bg-neutral-700 hover:bg-neutral-600": match !== option.match,
              }
            )}
          >
            {option.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
