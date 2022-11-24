import { getElapsedTimeMessage } from "/src/utils/date";
import { getCompactNumber } from "/src/utils/number";

export const extractPost = (post: any) => ({
  id: post.id,
  subreddit: post.subreddit,
  title: post.title,
  author: post.author,
  bodyText: post.selftext,
  created: getElapsedTimeMessage(post.created),
  score: getCompactNumber(post.score),
  numComments: getCompactNumber(post["num_comments"]),
  postUrl: post.permalink,
  postHint: post["post_hint"],
  mediaSrc: post["url_overriden_by_dest"],
});
