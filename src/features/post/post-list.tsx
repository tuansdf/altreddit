import Post from "/src/features/post/post";
import { IPost } from "/src/features/post/post.type";

interface IProps {
  posts?: IPost[];
}

export default function PostList({ posts }: IProps) {
  if (!posts?.length) return null;

  return (
    <div className="space-y-2">
      {posts.map((post) => (
        <Post {...post} />
      ))}
    </div>
  );
}
