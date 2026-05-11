import JobItem from "./JobItem";

function JobList({ jobs }) {
  return (
    <div>
      <h2>Job List</h2>

      {jobs.map(job => (
        <JobItem key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobList;