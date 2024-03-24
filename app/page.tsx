import { db } from "@/lib/db";
import FilterComp from "@/components/FilterComp";
import HeroWithSearch from "@/components/HeroWithSearch";
import NavBar from "@/components/NavBar";
import JobList from "@/components/JobList";
import SortComp from "@/components/SortComp";

function getAllData() {
  const data = db.map((jobs) => jobs);
  return data;
}
export default function Page({
  searchParams,
}: {
  searchParams?: {
    filter?: string;
    search?: string;
    sort?: any;
  };
}) {
  const value = searchParams?.filter || "all";
  const jobs = getAllData();
  let filteredJobs;
  if (value === "all") filteredJobs = jobs;
  if (value === "frontend")
    filteredJobs = jobs.filter((job) => job.title === "Frontend Developer");
  if (value === "backend")
    filteredJobs = jobs.filter((job) => job.title === "Backend Developer");
  if (value === "DevOps")
    filteredJobs = jobs.filter((job) => job.title === "DevOps Engineer");
  if (value === "ML")
    filteredJobs = jobs.filter((job) => job.title === "ML Engineer");

  const search = searchParams?.search;
  if (search !== undefined) {
    filteredJobs = jobs.filter(
      (job) => job.title.toLocaleLowerCase() === search.toLocaleLowerCase()
    );
    filteredJobs = jobs.filter((job) =>
      job.title.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())
    );
  }

  const sortBy = searchParams?.sort || "job_title-desc";
  const [field, direction] = sortBy.split("-");

  const isDesc = direction === "asc" ? 1 : -1;
  let sortedJobs = filteredJobs?.sort(
    (a: any, b: any) => (a[field] - b[field]) * isDesc
  );
  if (direction === "asc") {
    sortedJobs = filteredJobs?.sort((a: any, b: any) =>
      a.title > b.title ? 1 : -1
    );
  } else {
    sortedJobs = filteredJobs?.sort((a: any, b: any) =>
      b.title > a.title ? 1 : -1
    );
  }

  return (
    <div>
      <div className="bg-orange-200 pb-10 md:px-20 ">
        <NavBar />
        <HeroWithSearch />
      </div>

      <div className="px-2 text-center sm:px-10 md:px-20 mt-9">
        <FilterComp />
        <SortComp />
        <JobList sortedJobs={sortedJobs} />
      </div>
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: "JOBEX: Find For Job",
  };
}
