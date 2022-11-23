import { Route } from "wouter";
import CommentList from "/src/features/comment/comment-list";
import Layout from "/src/features/layout/layout";
import PostList from "/src/features/post/post-list";

const post = {
  author: "author",
  subreddit: "subreddit",
  bodyText: "This is a post",
  numComments: "999.9k",
  score: "99.9k",
  time: "8 hours ago",
  mediaSrc: "https://source.unsplash.com/random",
  postUrl: "/r/subreddit/comments/postid",
};

const comment = {
  author: "author",
  bodyText: "This is a comment",
  score: "23k",
  time: "9 hours ago",
};

const commentReplies = {
  ...comment,
  replies: [comment, comment],
};

const posts = [post, post, post];
const comments = [comment, comment, commentReplies];

export function App() {
  return (
    <Layout>
      <Route>
        <PostList posts={posts} />

        <div className="mb-4"></div>
        <CommentList comments={comments} />
      </Route>
    </Layout>
  );
}
