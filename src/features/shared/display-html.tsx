import clsx from "clsx";
import DOMPurify from "dompurify";
import { marked } from "marked";
import { JSX } from "preact";

interface IProps extends JSX.HTMLAttributes<HTMLDivElement> {
  text: string;
}

export default function DisplayHtml({ text, className, ...rest }: IProps) {
  const htmlContent = DOMPurify.sanitize(marked.parse(text));

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      className={clsx("prose prose-invert prose-a:text-primary-400", className)}
      {...rest}
    ></div>
  );
}
