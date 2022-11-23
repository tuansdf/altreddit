import { ICommonData, ICommonResponse } from "/src/api/common.type";
import useCommon from "/src/api/use-common.api";
import { IPost } from "/src/features/post/post.type";
import { getElapsedTimeMessage } from "/src/utils/date";
import { getCompactNumber } from "/src/utils/number";

export default function useSubreddit(): ICommonResponse<IPost[]> {
  const { data, isError, isLoading } = useCommon();

  if (!data) {
    return {
      data,
      isError,
      isLoading,
    };
  }

  const posts: ICommonData<IPost[]> = {
    after: data.data?.after,
    data: data.data?.children.map(({ data: post }: any) => ({
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
    })),
  };

  return {
    data: posts,
    isError,
    isLoading,
  };
}
