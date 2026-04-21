import { useEffect, useState } from "react";
import { getJobs } from "../services/api";
import JobItem from "./JobItem";

function JobList(){
    const [jobs,setJobs]=useState([]);

    useEffect(
        ()=>{getJobs().then(data=>setJobs(data));
        },[]);

        return (
            <div>
                <h2>Job List</h2>
                {jobs.map(job=>(
                             <JobItem key={job.id} job={job} />
            ))}
            </div>
        );
        
}
export default JobList;