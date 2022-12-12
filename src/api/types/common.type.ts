import { IComment } from "/src/features/comment/comment.type";
import { IPost } from "/src/features/post/post.type";

export interface ICommonResponse<T> {
  isError: boolean;
  isLoading: boolean;
  data?: T;
}

export interface IPostDetailData {
  post: IPost;
  comments: IComment[];
}

export interface ICommonData<T> {
  after: string;
  data: T;
}
