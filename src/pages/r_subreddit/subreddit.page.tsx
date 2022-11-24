import clsx from "clsx";
import { Link, useParams } from "react-router-dom";
import useSubreddit from "/src/api/subreddit/use-subreddit.api";
import PostList from "/src/features/post/post-list";
import PostListPlaceholder from "/src/features/post/post-list-placeholder";

const menu = [
  {
    label: "Hot",
    match: "hot",
  },
  {
    label: "New",
    match: "new",
  },
  {
    label: "Top",
    match: "top",
  },
  {
    label: "Rising",
    match: "rising",
  },
  {
    label: "Controversial",
    match: "controversial",
  },
];

export default function SubredditPage() {
  const { subreddit, sort } = useParams();
  const { data, isError, isLoading } = useSubreddit();

  const posts = data?.data;

  return (
    <div>
      <ul className="mb-4 flex gap-2 overflow-auto rounded border border-neutral-700 bg-neutral-800 p-4">
        {menu.map((option) => (
          <li>
            <Link
              to={`/r/${subreddit}/${option.match}`}
              className={clsx("rounded-full py-2 px-6 font-medium", {
                "bg-primary-600 hover:bg-primary-500": sort === option.match,
                "bg-neutral-700 hover:bg-neutral-600": sort !== option.match,
              })}
            >
              {option.label}
            </Link>
          </li>
        ))}
      </ul>

      {!isLoading || !!data ? (
        <PostList posts={posts} />
      ) : (
        <PostListPlaceholder />
      )}
    </div>
  );
}
