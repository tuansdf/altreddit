import { Link } from "wouter";
import { IPost } from "/src/features/post/post.type";

interface IProps extends IPost {}

export default function Post({
  subreddit,
  author,
  time,
  bodyText,
  score,
  numComments,
  mediaSrc,
  postUrl,
}: IProps) {
  return (
    <Link href={postUrl} className="hover:no-underline">
      <div className="flex gap-1 rounded border border-neutral-700 bg-neutral-800 py-2 hover:cursor-pointer hover:border-neutral-600">
        <div className="w-10 flex-none text-center text-sm font-bold text-primary-400">
          {score}
        </div>

        <div className="flex flex-col gap-2">
          {/* header */}
          <div className="flex items-baseline gap-2 text-sm">
            {/* subreddit */}
            <Link href={`/r/${subreddit}`} className="z-10 font-bold">
              r/{subreddit}
            </Link>
            {/* author */}
            <span className="text-neutral-200">
              Posted by{" "}
              <Link href={`/user/${author}`} className="z-10">
                u/{author}
              </Link>
            </span>
            {/* time */}
            <span className="text-neutral-200">{time}</span>
          </div>
          {/* body text */}
          <div className="font-medium">{bodyText}</div>
          {/* media */}
          {mediaSrc ? (
            <div>
              <img src={mediaSrc} alt="" />
            </div>
          ) : null}
          {/* footer */}
          <div className="flex items-baseline gap-2 text-sm text-neutral-200">
            <span>{numComments} comments</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
