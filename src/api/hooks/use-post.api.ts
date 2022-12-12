import useFetch from "/src/api/hooks/use-fetch";
import { ICommonResponse, IPostDetailData } from "/src/api/types/common.type";
import { extractComment, extractPost } from "/src/api/utils/extractors";

export default function usePost(): ICommonResponse<IPostDetailData> {
  const { data, isError, isLoading } = useFetch();

  if (!data) {
    return {
      data,
      isError,
      isLoading,
    };
  }

  const posts: IPostDetailData = {
    post: extractPost(data[0].data?.children[0].data),
    comments: data[1].data?.children.map(({ data: comment }: any) =>
      extractComment(comment)
    ),
  };

  return {
    data: posts,
    isError,
    isLoading,
  };
}
