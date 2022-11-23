export interface ICommonResponse<T> {
  isError: boolean;
  isLoading: boolean;
  data?: ICommonData<T>;
}

export interface ICommonData<T> {
  after: string;
  data: T;
}
