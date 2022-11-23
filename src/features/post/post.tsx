import { Link } from "wouter";
import { IPost } from "/src/features/post/post.type";
import DisplayHtml from "/src/features/shared/display-html";

interface IProps extends IPost {}

export default function Post({
  subreddit,
  author,
  created,
  bodyText,
  score,
  numComments,
  mediaSrc,
  postUrl,
  title,
  postHint,
}: IProps) {
  return (
    <Link href={postUrl} className="hover:no-underline">
      <div className="flex gap-1 rounded border border-neutral-700 bg-neutral-800 py-2 hover:cursor-pointer hover:border-neutral-600">
        <div className="w-10 flex-none text-center text-xs font-bold text-primary-400 sm:text-sm">
          {score}
        </div>

        <div className="flex flex-col gap-2 pr-2">
          {/* header */}
          <div className="flex items-baseline gap-2 text-xs sm:text-sm">
            {/* subreddit */}
            <Link href={`/r/${subreddit}`} className="z-10 font-bold">
              r/{subreddit}
            </Link>
            {/* author */}
            <span className="text-neutral-400">
              Posted by{" "}
              <Link href={`/user/${author}`} className="z-10">
                u/{author}
              </Link>
            </span>
            {/* time */}
            <span className="text-neutral-400">{created}</span>
          </div>
          {/* title */}
          {title ? (
            <div className="pr-2 font-medium sm:text-lg">{title}</div>
          ) : null}
          {/* body text */}
          {bodyText ? (
            <DisplayHtml className="pr-2">{bodyText || ""}</DisplayHtml>
          ) : null}
          {/* media */}
          {mediaSrc && postHint === "image" ? (
            <div>
              <img src={mediaSrc} alt="" />
            </div>
          ) : null}
          {/* footer */}
          <div className="pr-2 text-xs text-neutral-400 sm:text-sm">
            <span>{numComments} comments</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
