import clsx from "clsx";
import DOMPurify from "dompurify";
import { marked } from "marked";
import { JSX } from "preact";

interface IProps extends JSX.HTMLAttributes<HTMLDivElement> {
  children: string;
}

export default function DisplayHtml({ children, className, ...rest }: IProps) {
  const htmlContent = DOMPurify.sanitize(marked.parse(children));

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      className={clsx("prose prose-a:text-primary-400", className)}
      {...rest}
    ></div>
  );
}
