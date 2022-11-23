import useSubreddit from "/src/api/subreddit/use-subreddit.api";
import Layout from "/src/features/layout/layout";
import PostList from "/src/features/post/post-list";
import PostListPlaceholder from "/src/features/post/post-list-placeholder";

export function App() {
  const { data, isError, isLoading } = useSubreddit();

  const posts = data?.data;

  return (
    <Layout>
      {!isLoading || !!data ? (
        <PostList posts={posts} />
      ) : (
        <PostListPlaceholder />
      )}
    </Layout>
  );
}
