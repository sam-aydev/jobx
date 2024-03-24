"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterComp() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  let value = searchParams.get("filter");
  const search = searchParams.get("search");
  if (search?.toLocaleLowerCase().startsWith("m")) {
    value = "ML";
  } else if (search?.toLocaleLowerCase().startsWith("d")) {
    value = "DevOps";
  } else if (search?.toLocaleLowerCase().startsWith("b")) {
    value = "backend";
  } else if (search?.toLocaleLowerCase().startsWith("f")) {
    value = "frontend";
  }

  function handleFilter(value: string) {
    const params = new URLSearchParams(searchParams);

    params.set("filter", value);
    params.delete("search");

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="space-x-4 space-y-2">
      <button
        onClick={() => handleFilter("all")}
        className={
          value === null || value === "all"
            ? `bg-orange-950 text-white px-2 py-1 border-2 border-orange-900 font-semibold rounded hover:bg-orange-800`
            : "bg-white border-2 border-orange-950 text-black px-2 py-1 font-semibold rounded hover:bg-orange-800"
        }
      >
        All
      </button>
      <button
        onClick={() => handleFilter("frontend")}
        className={
          value === "frontend" || search?.toLocaleLowerCase().startsWith("f")
            ? `bg-orange-950 text-white px-2 py-1 border-2 border-orange-900 font-semibold rounded hover:bg-orange-800`
            : "bg-white border-2 border-orange-950 text-black px-2 py-1 font-semibold rounded hover:bg-orange-800"
        }
      >
        Front End Engineer
      </button>
      <button
        onClick={() => handleFilter("backend")}
        className={
          value === "backend"
            ? `bg-orange-950 text-white px-2 py-1 border-2 border-orange-900 font-semibold rounded hover:bg-orange-800`
            : "bg-white border-2 border-orange-950 text-black px-2 py-1 font-semibold rounded hover:bg-orange-800"
        }
      >
        Back End Engineer
      </button>
      <button
        onClick={() => handleFilter("DevOps")}
        className={
          value === "DevOps"
            ? `bg-orange-950 text-white px-2 py-1 border-2 border-orange-900 font-semibold rounded hover:bg-orange-800`
            : "bg-white border-2 border-orange-950 text-black px-2 py-1 font-semibold rounded hover:bg-orange-800"
        }
      >
        DevOps Engineer
      </button>
      <button
        onClick={() => handleFilter("ML")}
        className={
          value === "ML"
            ? `bg-orange-950 text-white px-2 py-1 border-2 border-orange-900 font-semibold rounded hover:bg-orange-800`
            : "bg-white border-2 border-orange-950 text-black px-2 py-1 font-semibold rounded hover:bg-orange-800"
        }
      >
        ML Engineer
      </button>
    </div>
  );
}
