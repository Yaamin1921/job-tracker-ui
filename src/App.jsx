import { useEffect, useState } from "react";
import JobList from "./components/JobList";
import JobForm from "./components/JobForm";
import { getJobs } from "./services/api";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    loadJobs();
  }, []);

  async function loadJobs() {
    const data = await getJobs();
    setJobs(data);
  }

  function handleJobAdded(newJob) {
    setJobs([...jobs, newJob]);
  }

  return (
    <div>
      <h1>Job Tracker</h1>

      <JobForm onJobAdded={handleJobAdded} />

      <JobList jobs={jobs} />
    </div>
  );
}

export default App;