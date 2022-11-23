import CommentList from "/src/features/comment/comment-list";
import { IComment } from "/src/features/comment/comment.type";
import DisplayHtml from "/src/features/shared/display-html";

interface IProps extends IComment {}

export default function Comment({
  author,
  bodyText,
  score,
  depth,
  replies,
  time,
}: IProps) {
  return (
    <div className="space-x-6 space-y-4">
      <div className="relative flex h-auto items-stretch">
        <div className="group relative top-0 bottom-0 w-4 flex-none cursor-pointer">
          <div className="mx-auto h-full w-0.5 bg-neutral-700 group-hover:bg-neutral-100"></div>
        </div>

        <div className="ml-4 space-y-2">
          {/* header */}
          <div className="flex gap-2 text-sm">
            <span className="font-medium">u/{author}</span>
            <span className="text-neutral-400">{time}</span>
          </div>
          {/* body */}
          <DisplayHtml text={bodyText || ""}>{bodyText}</DisplayHtml>
          {/* footer */}
          <div className="text-sm">
            <span className="font-bold">{score}</span>
            <span className="text-neutral-400"> comments</span>
          </div>
        </div>
      </div>

      {replies?.length ? <CommentList comments={replies} /> : null}
    </div>
  );
}
