export interface IPost {
  id?: string;
  subreddit?: string;
  author?: string;
  created?: string;
  title?: string;
  bodyText?: string;
  score?: string;
  numComments?: string;
  mediaSrc?: string;
  postUrl?: string;
  postHint?: "image" | "link";
}
