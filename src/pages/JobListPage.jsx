import { useEffect, useState } from "react";
import { getJobs } from "../services/api";
import JobItem from "../components/JobItem";

function JobListPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const data = await getJobs();
        setJobs(data);
      } catch (err) {
        setError("Failed to load jobs");
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Job List</h2>

      {jobs.length === 0 ? (
        <p>No jobs found</p>
      ) : (
        jobs.map((job) => (
          <JobItem key={job.id} job={job} />
        ))
      )}
    </div>
  );
}

export default JobListPage;