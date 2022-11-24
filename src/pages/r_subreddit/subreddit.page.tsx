import { useParams } from "react-router-dom";
import useSubreddit from "/src/api/subreddit/use-subreddit.api";
import PostList from "/src/features/post/post-list";
import PostListPlaceholder from "/src/features/post/post-list-placeholder";
import HorizontalMenu from "/src/features/shared/horizontal-menu";

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
      <HorizontalMenu menu={menu} match={sort} prefixUrl={"/r/" + subreddit} />

      {!isLoading || !!data ? (
        <PostList posts={posts} />
      ) : (
        <PostListPlaceholder />
      )}
    </div>
  );
}
