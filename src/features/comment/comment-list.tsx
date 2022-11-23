import Comment from "/src/features/comment/comment";
import { IComment } from "/src/features/comment/comment.type";

interface IProps {
  comments?: IComment[];
}

export default function CommentList({ comments }: IProps) {
  if (!comments?.length) return null;

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <Comment
          author={comment.author}
          bodyText={comment.bodyText}
          replies={comment.replies}
          depth={comment.depth}
          score={comment.score}
          time={comment.time}
        />
      ))}
    </div>
  );
}
