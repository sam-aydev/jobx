"use client";

import { useRouter } from "next/navigation";

export default function JobList({ sortedJobs }: any) {
  const router = useRouter();

  const dollarLocale = Intl.NumberFormat("en-US");
  return (
    <div
      id="job"
      className="place-items-center mt-4 grid grid-cols-2 md:grid-cols-3 lg:w-4/5 lg:mx-auto xl:grid-cols-4 gap-y-4 md:gap-y-2 px-2 gap-x-6  "
    >
      {sortedJobs?.map((job: any) => (
        <div
          key={job.id}
          className="size-40 md:size-48 h-fit rounded bg-orange-200 space-x-4 flex justify-between flex-col "
        >
          <div className="pt-2 px-2">
            <p
              style={{ backgroundColor: `${job.label}` }}
              className=" px-2 rounded-full text-xs"
            >
              {job.title}
            </p>
          </div>
          <div className="pt-6">
            <p className="text-[16px] text-left font-bold">{job.title}</p>
          </div>
          <div className="md:-mt-4">
            <p className="text-sm text-left">
              ${`${dollarLocale.format(job.salary)}`} per year
            </p>
          </div>
          <div className="md:-mt-3">
            <p className="text-sm text-left">{job.location}</p>
          </div>

          <div className="pt-3 mx-auto w-4/5">
            <button
              onClick={() => router.push(`/${job.id}`)}
              className=" bg-orange-950 px-2 rounded py-1 text-white"
            >
              View Listing
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
