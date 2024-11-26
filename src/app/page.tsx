import { list } from "@/actions/job";
import Filters from "@/components/common/Filters";
import JobList from "@/components/common/JobList";
import FilterProvider from "@/providers/filter";

export default async function Home() {
  const jobPosts = await list();
  return (
    <FilterProvider>
      <Filters />
      <JobList jobs={jobPosts} />
    </FilterProvider>
  );
}
