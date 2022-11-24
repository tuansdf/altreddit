import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import IndexLayout from "/src/pages/index.layout";
import SubredditPage from "/src/pages/subreddit.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/r/all" />,
      },
      {
        path: "/r/:subreddit",
        element: <SubredditPage />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
