import clsx from "clsx";
import DOMPurify from "dompurify";
import { marked } from "marked";
import { JSX } from "preact";

interface IProps extends JSX.HTMLAttributes<HTMLDivElement> {
  children: string;
  isClamp?: boolean;
}

export default function DisplayHtml({
  children,
  isClamp,
  className,
  ...rest
}: IProps) {
  const htmlContent = DOMPurify.sanitize(marked.parse(children));

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      className={clsx(
        "prose overflow-auto truncate whitespace-normal prose-p:whitespace-normal prose-a:whitespace-normal prose-a:text-primary-400",
        className,
        { "line-clamp-4": isClamp }
      )}
      {...rest}
    ></div>
  );
}
