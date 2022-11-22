import Layout from "/src/features/layout/layout";
import Post from "/src/features/post/post";

export function App() {
  return (
    <Layout>
      <Post
        author="author"
        subreddit="subreddit"
        bodyText="This is a random picture"
        numComments="999.9k"
        score="999.9k"
        time="8 hours ago"
        mediaSrc="https://source.unsplash.com/random"
        postUrl="/r/subreddit/comments/postid"
      />
    </Layout>
  );
}
