export default function PostPlaceholder() {
  return (
    <div className="flex gap-2 rounded bg-neutral-800 p-2">
      <div className="w-5 flex-none sm:w-7">
        <div className="h-4 animate-pulse rounded bg-neutral-700"></div>
      </div>

      <div className="w-full space-y-2">
        <div className="grid h-4 w-1/2 grid-cols-3 gap-2">
          <div className="animate-pulse rounded bg-neutral-700"></div>
          <div className="animate-pulse rounded bg-neutral-700"></div>
          <div className="animate-pulse rounded bg-neutral-700"></div>
        </div>
        <div className="h-6 w-2/3 animate-pulse rounded bg-neutral-700"></div>
        <div className="h-32 animate-pulse rounded bg-neutral-700"></div>
        <div className="h-4 w-1/6 animate-pulse rounded bg-neutral-700"></div>
      </div>
    </div>
  );
}
