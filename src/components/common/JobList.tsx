"use client";

import JobCard from "@/components/common/JobCard";
import { useFilter } from "@/hooks/use-filter";
import { FilterType } from "@/types/filter";
import { JobPost as JobPostType } from "@/types/job";
import Stack from "@mui/material/Stack";
import { useMemo } from "react";

type JobListProps = {
  jobs: JobPostType[];
};

const JobList = ({ jobs }: JobListProps) => {
  const { filters } = useFilter();

  const filteredJobs = useMemo(() => {
    const levelFilter = filters.filter(
      (filter) => filter.type === FilterType.Level
    );
    const roleFilter = filters.filter(
      (filter) => filter.type === FilterType.Role
    );
    const languageFilter = filters.filter(
      (filter) => filter.type === FilterType.Language
    );
    const toolFilter = filters.filter(
      (filter) => filter.type === FilterType.Tool
    );

    return jobs.filter((job) => {
      const jobLanguages = job.languages.join(",").toLowerCase().split(",");
      const jobTools = job.tools.join(",").toLowerCase().split(",");

      const levelMatch = levelFilter.length
        ? levelFilter.some(
            (filter) => job.level.toLowerCase() === filter.text.toLowerCase()
          )
        : true;
      const roleMatch = roleFilter.length
        ? roleFilter.some(
            (filter) => job.role.toLowerCase() === filter.text.toLowerCase()
          )
        : true;

      const languageMatch = languageFilter.length
        ? languageFilter.every((filter) =>
            jobLanguages.includes(filter.text.toLowerCase())
          )
        : true;
      const toolMatch = toolFilter.length
        ? toolFilter.every((filter) =>
            jobTools.includes(filter.text.toLowerCase())
          )
        : true;

      return levelMatch && roleMatch && languageMatch && toolMatch;
    });
  }, [filters, jobs]);

  return (
    <Stack gap={"12px"}>
      {filteredJobs.map((job) => (
        <JobCard post={job} key={job.id} />
      ))}
    </Stack>
  );
};

export default JobList;
