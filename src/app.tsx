import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import IndexLayout from "/src/pages/index.layout";
import SubredditPage from "/src/pages/r_subreddit/subreddit.page";
import SearchPage from "/src/pages/search.page";

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
        path: "r/:subreddit",
        children: [
          { index: true, element: <SubredditPage /> },
          { path: "search", element: <SearchPage /> },
          { path: ":sort", element: <SubredditPage /> },
        ],
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
