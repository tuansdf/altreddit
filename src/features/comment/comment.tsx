import { useState } from "preact/hooks";
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
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="relative flex h-auto items-stretch">
      <div
        className="group relative top-0 bottom-0 w-4 flex-none cursor-pointer"
        onClick={() => setCollapsed((prev) => !prev)}
      >
        <div className="mx-auto h-full w-0.5 bg-neutral-700 group-hover:bg-neutral-100"></div>
      </div>

      <div className="ml-3 space-y-4">
        <div className="space-y-2">
          {/* header */}
          <div className="flex gap-2 text-sm">
            <span className="font-medium">u/{author}</span>
            <span className="text-neutral-400">{time}</span>
          </div>
          {!collapsed ? (
            <>
              {/* body */}
              <DisplayHtml className="prose-invert text-sm sm:text-base">
                {bodyText || ""}
              </DisplayHtml>
              {/* footer */}
              <div className="text-sm">
                <span className="font-bold">{score}</span>
                <span className="text-neutral-400"> comments</span>
              </div>
            </>
          ) : null}
        </div>

        {replies?.length && !collapsed ? (
          <CommentList comments={replies} />
        ) : null}
      </div>
    </div>
  );
}
