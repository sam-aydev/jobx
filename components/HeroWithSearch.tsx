"use client";

import Image from "next/image";
import heroImg from "@/public/job.jpg";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function HeroWithSearch() {
  const [value, setValue] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(search_value: string) {
    const params = new URLSearchParams(searchParams);
    if (search_value) {
      params.set("search", search_value);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
    setValue("");

    // targetRef.current?.scrollIntoView({ behaviour: "smooth" });
  }
  return (
    <div className="md:flex md:mt-14">
      <div className="mt-8 md:mt-4 lg:mt-10 xl:mt-14 md:w-1/2">
        <p className=" mx-auto w-2/3 text-center font-bold  text-2xl">
          Are You In Search Of A Job? Find Your Dream Job.
        </p>
        <div className="relative flex justify-center mt-5 w-2/3 sm:w-1/2 md:w-2/3 lg:w-1/2 mx-auto">
          <input
            value={value}
            onChange={(e: any) => setValue(e.target.value)}
            type="text"
            className="px-2 w-full py-2 text-sm border-2 outline-none rounded-full border-orange-950"
          />
          <button
            onClick={() => handleSearch(value)}
            className="rounded-full px-3 h-[80%] right-1 top-[10%] bg-orange-950 text-white absolute hover:bg-orange-800"
          >
            Search
          </button>
        </div>
      </div>

      <div className="mt-10 md:mt-5 md:w-1/2">
        <Image
          src={heroImg}
          width={1000}
          height={10}
          alt="img"
          className="size-2/3 mx-auto md:size-3/4 rounded"
        />
      </div>
    </div>
  );
}
