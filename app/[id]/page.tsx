import JobDetails from "@/components/JobDetails";
import { db } from "@/lib/db";

function getData(id: number) {
  const data = db.find((job) => job.id === Number(id));
  return data;
}

export default function Page({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const job = getData(params.id);

  return (
    <div className="">
      <JobDetails job={job} />
    </div>
  );
}

export async function generateMetadata({ params }: any) {
  const job = getData(params.id);

  return {
    title: `Details on ${job?.title} role`,
  };
}
