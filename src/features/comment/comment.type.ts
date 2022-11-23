export interface IComment {
  author?: string;
  time?: string;
  bodyText?: string;
  score?: string;
  depth?: number;
  replies?: IComment[];
}
