import { useEffect } from "preact/hooks";
import { useSearchParams } from "react-router-dom";
import usePosts from "/src/api/use-posts.api";
import PostList from "/src/features/post/post-list";
import PostListPlaceholder from "/src/features/post/post-list-placeholder";
import HorizontalMenu from "/src/features/shared/horizontal-menu";

const menu = [
  {
    label: "Posts",
    match: "link",
  },
  {
    label: "Communities",
    match: "sr",
  },
];

const types = ["link", "sr"];

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isError, isLoading } = usePosts();

  useEffect(() => {
    if (
      !searchParams.get("type") ||
      !types.includes(searchParams.get("type") || "")
    ) {
      setSearchParams((prev) => {
        prev.set("type", "link");
        return prev;
      });
    }
  }, [searchParams]);

  const posts = data?.data;
  const matchType = searchParams.get("type");

  return (
    <div>
      <HorizontalMenu
        menu={menu}
        match={matchType || ""}
        getUrl={(match) => {
          const params = new URLSearchParams(window.location.search);
          params.set("type", match);
          return `?${params.toString()}`;
        }}
      />

      {!isLoading || !!data ? (
        <PostList posts={posts} />
      ) : (
        <PostListPlaceholder />
      )}
    </div>
  );
}
