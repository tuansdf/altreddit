import { IComment } from "/src/features/comment/comment.type";
import { IPost } from "/src/features/post/post.type";
import { getElapsedTimeMessage } from "/src/utils/date";
import { getCompactNumber } from "/src/utils/number";

export const extractPost = (post: any): IPost => ({
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

export const extractComment = (comment: any): IComment => ({
  id: comment.id,
  author: comment.author,
  bodyText: comment.body,
  depth: comment.depth,
  score: getCompactNumber(comment.score),
  time: getElapsedTimeMessage(comment.created),
  replies: comment.replies?.data?.children.map(({ data: reply }: any) =>
    extractComment(reply)
  ),
});
