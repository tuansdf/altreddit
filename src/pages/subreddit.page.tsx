import useSubreddit from "/src/api/subreddit/use-subreddit.api";
import PostList from "/src/features/post/post-list";
import PostListPlaceholder from "/src/features/post/post-list-placeholder";

export default function SubredditPage() {
  const { data, isError, isLoading } = useSubreddit();

  const posts = data?.data;

  return (
    <>
      {!isLoading || !!data ? (
        <PostList posts={posts} />
      ) : (
        <PostListPlaceholder />
      )}
    </>
  );
}
