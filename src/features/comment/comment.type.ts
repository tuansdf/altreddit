export interface IComment {
  id?: string;
  author?: string;
  time?: string;
  bodyText?: string;
  score?: string;
  depth?: number;
  replies?: IComment[];
}
