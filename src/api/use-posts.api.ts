import { ICommonData, ICommonResponse } from "/src/api/common.type";
import { extractPost } from "/src/api/extractors";
import useCommon from "/src/api/use-common.api";
import { IPost } from "/src/features/post/post.type";

export default function usePosts(): ICommonResponse<IPost[]> {
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
    data: data.data?.children.map(({ data: post }: any) => extractPost(post)),
  };

  return {
    data: posts,
    isError,
    isLoading,
  };
}
