"use client";
import { useRouter } from "next/navigation";

export default function JobDetails({ job }: any) {
  const router = useRouter();
  const dollarLocale = Intl.NumberFormat("en-US");
  return (
    <div>
      <div className="py-4 bg-orange-200">
        <p className="text-center text-xl font-semibold">{job?.title}</p>
      </div>

      <div className="px-8 mt-8 md:w-3/4 md:mx-auto lg:w-2/3 xl:w-1/2">
        <div>
          <p className="text-lg font-semibold">Job Description</p>
          <p className="text-sm text-slate-400 mt-2">{job?.description}</p>
        </div>
        <div className="mt-8">
          <p className="text-lg font-semibold">Job Requirements</p>
          <p className="text-sm text-slate-400 mt-2">{job?.requirements}</p>
        </div>
        <div className="mt-8">
          <p className="text-lg font-semibold">Job Location</p>
          <p className="text-sm text-slate-400 mt-2">{job?.location}</p>
        </div>

        <div className="mt-8">
          <p className="text-lg font-semibold">Expected Salary</p>
          <p className="text-sm text-slate-400 mt-2">
            ${`${dollarLocale.format(job?.salary)}`}
          </p>
        </div>
      </div>
      <div className="flex justify-end px-8 mt-3 md:px-10 lg:px-20">
        <button
          className="px-2 py-2 bg-orange-950 rounded text-white hover:bg-orange-200 hover:text-black"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
