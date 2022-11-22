import { ComponentChildren } from "preact";
import Header from "/src/features/layout/header";

interface IProps {
  children?: ComponentChildren;
}

export default function Layout({ children }: IProps) {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-50">
      <Header />

      <div className="mx-auto mt-2 max-w-screen-sm px-2">{children}</div>
    </div>
  );
}
