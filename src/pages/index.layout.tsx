import { Outlet } from "react-router-dom";
import Header from "/src/features/layout/header";

export default function IndexLayout() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-200">
      <Header />

      <div className="mx-auto mt-2 max-w-screen-sm px-2">
        <Outlet />
      </div>
    </div>
  );
}
