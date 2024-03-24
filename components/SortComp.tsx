"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SortComp() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  function handleSort(value: string) {
    const params = new URLSearchParams(searchParams);

    params.set("sort", value);
    params.delete("search");

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="mt-8">
      <select
        onChange={(e) => handleSort(e.target.value)}
        name=""
        id=""
        className="border-2 border-orange-950  px-2 py-2 rounded bg-transparent"
      >
        <option
          value="title-desc"
          className="text-lg  px-2 border-2 border-orange-950 "
        >
          Sort By Job Title (desc)
        </option>
        <option
          value="title-asc"
          className="text-lg  px-2 border-2 border-orange-950 "
        >
          Sort By Job Title (asc)
        </option>
        <option value="salary-desc" className="text-lg px-2 ">
          Sort By Salary (desc)
        </option>
        <option value="salary-asc" className="text-lg px-2 ">
          Sort By Salary (asc)
        </option>
      </select>
    </div>
  );
}
