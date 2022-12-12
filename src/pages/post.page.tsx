import usePost from "/src/api/hooks/use-post.api";
import CommentList from "/src/features/comment/comment-list";
import Post from "/src/features/post/post";
import PostPlaceholder from "/src/features/post/post-placeholder";

export default function PostPage() {
  const { data, isLoading, isError } = usePost();

  const post = data?.post;
  const comments = data?.comments;

  return (
    <div>
      {!isLoading && !isError && !!data ? (
        <div className="space-y-4">
          <Post {...data.post} />
          <CommentList comments={comments} />
        </div>
      ) : (
        <PostPlaceholder />
      )}
    </div>
  );
}
