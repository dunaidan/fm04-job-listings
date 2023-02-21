import { Box } from "@mui/material";
import JobItem from "./JobItem";

function JobList({ jobList }) {
  
  return (
    <Box component="section" m="1em">
      {jobList.map((job) => {
        return <JobItem key={job.id} jobDetails={job}/>
      })}
    </Box>
  );
}

export default JobList;