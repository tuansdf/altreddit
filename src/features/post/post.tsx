import { Link } from "react-router-dom";
import HlsPlayer from "../shared/hls-player";
import { IPost } from "/src/features/post/post.type";
import DisplayHtml from "/src/features/shared/display-html";

interface IProps extends IPost {
  isClamp?: boolean;
}

export default function Post({
  subreddit,
  author,
  created,
  bodyText,
  score,
  numComments,
  mediaSrc,
  videoSrc,
  postUrl,
  title,
  postHint,
  isClamp,
}: IProps) {
  return (
    <Link to={postUrl} className="block hover:no-underline">
      <div className="flex gap-1 rounded border border-neutral-700 bg-neutral-800 py-2 hover:cursor-pointer hover:border-neutral-600">
        <div className="w-8 flex-none text-center text-xs font-bold sm:w-10 sm:text-sm">
          {score}
        </div>

        <div className="flex flex-1 flex-col gap-2 pr-2">
          {/* header */}
          <div className="flex items-baseline gap-1 text-xs sm:gap-2 sm:text-sm">
            {/* subreddit */}
            <Link to={`/r/${subreddit}`} className="z-10 font-bold">
              r/{subreddit}
            </Link>
            {/* author */}
            <span className="text-neutral-400">
              <Link to={`/user/${author}`} className="z-10">
                u/{author}
              </Link>
            </span>
            {/* time */}
            <span className="text-neutral-400">{created}</span>
          </div>
          {/* title */}
          {title ? (
            <h3 className="pr-2 font-medium sm:text-lg">{title}</h3>
          ) : null}
          {/* body text */}
          {bodyText ? (
            <DisplayHtml
              className="prose-invert w-full pr-2 text-sm sm:text-base"
              isClamp={isClamp}
            >
              {bodyText || ""}
            </DisplayHtml>
          ) : null}
          {/* media */}
          {mediaSrc && postHint === "image" ? (
            <div className="z-10 cursor-default">
              <img src={mediaSrc} alt="" />
            </div>
          ) : null}
          {(videoSrc && postHint?.endsWith("video")) ?
            <div className="z-10 cursor-default w-full">
              <HlsPlayer url={videoSrc} />
            </div> : null}
          {/* footer */}
          <div className="pr-2 text-xs text-neutral-400 sm:text-sm">
            <span>{numComments} comments</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
