import useFetch from "/src/api/hooks/use-fetch";
import { ICommonData, ICommonResponse } from "/src/api/types/common.type";
import { extractPost } from "/src/api/utils/extractors";
import { IPost } from "/src/features/post/post.type";

export default function usePosts(): ICommonResponse<ICommonData<IPost[]>> {
  const { data, isError, isLoading } = useFetch();

  if (!data) {
    return {
      data,
      isError,
      isLoading,
    };
  }

  const posts: ICommonData<IPost[]> = {
    after: data.data?.after,
    data: data.data?.children.map(({ data: post }: any) => extractPost(post)),
  };

  return {
    data: posts,
    isError,
    isLoading,
  };
}
