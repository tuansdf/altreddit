import { useParams } from "react-router-dom";
import usePosts from "/src/api/use-posts.api";
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
  const { data, isError, isLoading } = usePosts();

  const posts = data?.data;

  return (
    <div>
      <HorizontalMenu
        menu={menu}
        match={sort}
        getUrl={(match) => `/r/${subreddit}/${match}`}
      />

      {!isLoading || !!data ? (
        <PostList posts={posts} />
      ) : (
        <PostListPlaceholder />
      )}
    </div>
  );
}
