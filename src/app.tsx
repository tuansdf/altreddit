import { Route } from "wouter";
import Layout from "/src/features/layout/layout";
import PostList from "/src/features/post/post-list";

const post = {
  author: "author",
  subreddit: "subreddit",
  bodyText: "This is a random picture",
  numComments: "999.9k",
  score: "99.9k",
  time: "8 hours ago",
  mediaSrc: "https://source.unsplash.com/random",
  postUrl: "/r/subreddit/comments/postid",
};

const posts = [post, post, post];

export function App() {
  return (
    <Layout>
      <Route>
        <PostList posts={posts} />
      </Route>
    </Layout>
  );
}
